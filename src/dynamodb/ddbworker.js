"use strict";
require('globals');

global.onmessage = function (msg) {

    var action = msg.data.action;
    var region = msg.data.region;
    var identityPoolId = msg.data.identityPoolId;
    var tableName = msg.data.tableName;
    var item = msg.data.item;
    var attributeUpdates = msg.data.attributeUpdates;

    var reg;
    switch (region) {
        case "AWSRegionUSEast1": { reg = com.amazonaws.regions.Regions.US_EAST_1; break; }
        case "AWSRegionUSEast2": { reg = com.amazonaws.regions.Regions.US_EAST_2; break; }
        case "AWSRegionUSWest1": { reg = com.amazonaws.regions.Regions.US_WEST_1; break; }
        case "AWSRegionUSWest2": { reg = com.amazonaws.regions.Regions.US_WEST_2; break; }
        case "AWSRegionEUWest1": { reg = com.amazonaws.regions.Regions.EU_WEAT_1; break; }
        case "AWSRegionEUWest2": { reg = com.amazonaws.regions.Regions.EU_WEST_2; break; }
        case "AWSRegionEUCentral1": { reg = com.amazonaws.regions.Regions.EU_CENTRAL_1; break; }
        case "AWSRegionAPSoutheast1": { reg = com.amazonaws.regions.Regions.AP_SOUTHEAST_1; break; }
        case "AWSRegionAPNortheast1": { reg = com.amazonaws.regions.Regions.AP_NORTHEAST_1; break; }
        case "AWSRegionAPNortheast2": { reg = com.amazonaws.regions.Regions.AP_NORTHEAST_2; break; }
        case "AWSRegionAPSoutheast2": { reg = com.amazonaws.regions.Regions.AP_SOUTHEAST_2; break; }
        case "AWSRegionAPSouth1": { reg = com.amazonaws.regions.Regions.AP_SOUTH_1; break; }
        case "AWSRegionSAEast1": { reg = com.amazonaws.regions.Regions.SA_EAST_1; break; }
        case "AWSRegionCNNorth1": { reg = com.amazonaws.regions.Regions.CN_NORTH_1; break; }
        case "AWSRegionCACentral1": { reg = com.amazonaws.regions.Regions.CA_CENTRAL_1; break; }
        case "AWSRegionUSGovWest1": { reg = com.amazonaws.regions.Regions.GovCloud; break; }
    }

    var utils = require("utils/utils");
    var context = utils.ad.getApplicationContext();

    var credentials = new com.amazonaws.auth.CognitoCachingCredentialsProvider(
        context,
        identityPoolId,
        reg);

    var ddbClient = new com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient(credentials);
    ddbClient.setRegion(com.amazonaws.regions.Region.getRegion(reg));



    let map = new java.util.HashMap();

    for (let temp of item) {
        let attributeValue = com.amazonaws.services.dynamodbv2.model.AttributeValue;
        attributeValue = convertItemToAttributeValue(temp.value);
        map.put(temp.key, attributeValue);
    }
    let attributeUpdatesMap;
    if (attributeUpdates) {
        attributeUpdatesMap = new java.util.HashMap();
        for (let temp of attributeUpdates) {
            let attributeValue = convertItemToAttributeValue(temp.value);
            let attributeValueUpdateTmp = new com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate(attributeValue, temp.action);
            attributeUpdatesMap.put(temp.key, attributeValueUpdateTmp);
        }
    }
    switch (action) {
        case "putItem": {
            let result = com.amazonaws.services.dynamodbv2.model.PutItemResult;
            result = ddbClient.putItem(tableName, map);
            break;
        }
        case "getItem": {
            let result = com.amazonaws.services.dynamodbv2.model.GetItemResult;
            result = ddbClient.getItem(tableName, map);
            postMessage(convertItem(result));
            break;
        }
        case "deleteItem": {
            let result = com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
            result = ddbClient.deleteItem(tableName, map);
            break;
        }
        case "updateItem": {
            let result = com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
            result = ddbClient.updateItem(tableName, map, attributeUpdatesMap);
            break;
        }
    }


}

global.convertItemToAttributeValue = function (value) {

    let resultAttribuValue = new com.amazonaws.services.dynamodbv2.model.AttributeValue();
    if (value.type == "L") {
        let a = new java.util.ArrayList();
        for (let tmp of value.data) {
            let attributeValue = convertItemToAttributeValue(tmp);
            a.add(attributeValue);
        }
        resultAttribuValue.setL(a);
    } else if (value.type == "S") {
        resultAttribuValue.setS(value.data);
    } else if (value.type == "N") {
        resultAttribuValue.setN(value.data);
    } else if (value.type == "B") {
        resultAttribuValue.setB(value.data);
    } else if (value.type == "SS" || value.type == "NS") {
        let a = new java.util.ArrayList();
        for (let tmp of value.data) {
            a.add(tmp);
        }
        if (value.type == "SS") {
            resultAttribuValue.setSS(a);
        } else {
            resultAttribuValue.setNS(a);
        }
    } else if (value.type == "BO") {
        resultAttribuValue.setBOOL(new java.lang.Boolean(value.data));
    }
    return resultAttribuValue;
}

global.convertAttributeValue = function (attributeValue) {
    var data;
    if (attributeValue.getS() != null)
        data = attributeValue.getS();
    else if (attributeValue.getN() != null)
        data = attributeValue.getN();
    else if (attributeValue.getB() != null)
        data = attributeValue.getB();
    else if (attributeValue.getM() != null) {
        var values = attributeValue.getM();
        var iterator = values.keySet().iterator();

        var res = new Object();
        var data, data1, attribute1;
    
        while (iterator.hasNext()) {
            var tmp = iterator.next();
            attribute1 = values.get(tmp);
            data1 = convertAttributeValue(attribute1);
            res[tmp] = data1;
        }
        data = res;
    }
    else if (attributeValue.getL() != null) {
        var r = new Array();
        var list = attributeValue.getL();
        var it = list.iterator();
        while (it.hasNext()) {
            var d = it.next();
            r.push(convertAttributeValue(d));
        }
        data = r;

    } else if (attributeValue.getBS() != null || attributeValue.getNS() != null || attributeValue.getSS() != null) {
        var r = new Array();
        list = attributeValue.getBS();
        if (list == null) list = attributeValue.getNS();
        if (list == null) list = attributeValue.getSS();
        var it = list.iterator();
        while (it.hasNext()) {
            var d = it.next();
            r.push(d);
        }
        data = r;

    } else if (attributeValue.getNULL() != null)
        data = attributeValue.getNULL();
    else if (attributeValue.getBOOL() != null)
        data = attributeValue.getBOOL();

    return data;
}

global.convertItem = function (result) {
    let attributeValue = com.amazonaws.services.dynamodbv2.model.AttributeValue;

    if (! result.getItem()){
        return null;
    }
    var iterator = result.getItem().keySet().iterator();

    var res = new Object();
    var data;

    while (iterator.hasNext()) {
        var tmp = iterator.next();
        attributeValue = result.getItem().get(tmp);
        data = convertAttributeValue(attributeValue);
        res[tmp] = data;
    }
    return res;
}
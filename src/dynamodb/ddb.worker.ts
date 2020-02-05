import "globals";
import * as ddbUtils from './ddbutils.android';

const worker: Worker = self as any;

worker.onmessage = ((msg) => {

    if (!msg.data.action ||
        msg.data.action === "" ||
        msg.data.action === " " ||
        !msg.data.region ||
        msg.data.region === "" ||
        msg.data.region === " ") {
        return;
    }
    let action = msg.data.action;
    let region = msg.data.region;
    let identityPoolId = msg.data.identityPoolId;
    let tableName: string = msg.data.tableName;
    let item: Array<{key: string, value: {data: any, type: string}}> = msg.data.item;
    let attributeUpdates = msg.data.attributeUpdates;
    let queryExpression: string = msg.data.queryExpression;
    let reg;

    switch (region) {
        case "AWSRegionUSEast1": { reg = com.amazonaws.regions.Regions.US_EAST_1; break; }
        case "AWSRegionUSEast2": { reg = com.amazonaws.regions.Regions.US_EAST_2; break; }
        case "AWSRegionUSWest1": { reg = com.amazonaws.regions.Regions.US_WEST_1; break; }
        case "AWSRegionUSWest2": { reg = com.amazonaws.regions.Regions.US_WEST_2; break; }
        case "AWSRegionEUWest1": { reg = com.amazonaws.regions.Regions.EU_WEST_1; break; }
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
    let utils = require("utils/utils");
    let context = utils.ad.getApplicationContext();

    let credentials = new com.amazonaws.auth.CognitoCachingCredentialsProvider(context, identityPoolId, reg);
    let ddbClient = new com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient(credentials);
    ddbClient.setRegion(com.amazonaws.regions.Region.getRegion(reg));

    let map = new java.util.HashMap();

    for (let temp of item) {
        let attributeValue: com.amazonaws.services.dynamodbv2.model.AttributeValue;
        attributeValue = ddbUtils.convertItemToAttributeValue(temp.value);
        map.put(temp.key, attributeValue);
    }
    let attributeUpdatesMap;
    if (attributeUpdates) {
        attributeUpdatesMap = new java.util.HashMap();
        for (let temp of attributeUpdates) {
            let attributeValue = ddbUtils.convertItemToAttributeValue(temp.value);
            let attributeValueUpdateTmp = new com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate(attributeValue, temp.action);
            attributeUpdatesMap.put(temp.key, attributeValueUpdateTmp);
        }
    }
    switch (action) {
        case "putItem": {
            let result: com.amazonaws.services.dynamodbv2.model.PutItemResult;
            result = ddbClient.putItem(tableName, map);
            break;
        }
        case "getItem": {
            let result: com.amazonaws.services.dynamodbv2.model.GetItemResult;
            result = ddbClient.getItem(tableName, map);
            worker.postMessage(ddbUtils.convertItem(result));
            break;
        }
        case "deleteItem": {
            let result: com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
            result = ddbClient.deleteItem(tableName, map);
            break;
        }
        case "updateItem": {
            let result: com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
            result = ddbClient.updateItem(tableName, map, attributeUpdatesMap);
            break;
        }
        case "query": {
            let result: com.amazonaws.services.dynamodbv2.model.QueryResult;
            let query = new com.amazonaws.services.dynamodbv2.model.QueryRequest();
            query.withTableName(tableName);
            query.setKeyConditionExpression(queryExpression);
            let expressionMap = new java.util.HashMap<string, com.amazonaws.services.dynamodbv2.model.AttributeValue>();
            item.forEach(element => {
                expressionMap.put(element.key,
                    ddbUtils.convertItemToAttributeValue(element.value));
            });
            query.withExpressionAttributeValues(expressionMap);
            result = ddbClient.query(query);
            let finalResult = new Array<any>();
            let results = result.getItems();
            for (let i = 0; i < results.size(); i++) {
                finalResult.push(ddbUtils.convertMapItem(results.get(i)));
            }
            worker.postMessage(finalResult);
            break;
        }
    }
});
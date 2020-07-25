import "globals";
import * as ddbUtils from './ios/ddbutils.ios';

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
    let attributeList: Array<{key: string, value: {data: any, type: string}}>;
    let tagList: Array<{key: string, value: {data: any, type: string}}>;
    let limit: number;
    let scanIndexForward: boolean;
    if (msg.data.attributeList) {
        attributeList = msg.data.attributeList;
    }
    if (msg.data.tagList) {
        tagList = msg.data.tagList;
    }
    if (msg.data.limit) {
        limit = msg.data.limit;
    }

    if (msg.data.scanIndexForward !== undefined &&
        msg.data.scanIndexForward !== null) {
        scanIndexForward = msg.data.scanIndexForward;
    }

    switch (action) {
        case "putItem": {
            let input = new AWSDynamoDBPutItemInput();
            input.tableName = tableName;
            if (!item) {
                console.error("Item null or undefined");
                throw new Error("Item null or undefined");
            }
            let keyList = NSMutableArray.alloc().initWithCapacity(item.length);
            let objList = NSMutableArray.alloc().initWithCapacity(item.length);
            for (let _i = 0, item_1 = item; _i < item_1.length; _i++) {
                let temp = item_1[_i];
                let attributeValue = void 0;
                attributeValue = ddbUtils.convertItemToAttributeValue(temp.value);
                keyList.addObject(temp.key);
                objList.addObject(attributeValue);
            }
            input.item = NSDictionary.dictionaryWithObjectsForKeys(objList, keyList);
            let awsDynamoDB = AWSDynamoDB.DynamoDBForKey("PluginDynamoDB");
            let awsTask = awsDynamoDB.putItem(input);
            awsTask.continueWithBlock(function (task) {
                if (task.error) {
                    console.error(task.error.userInfo.valueForKey("message"));
                    throw new Error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    worker.postMessage(null);
                }
            });
            break;
        }
        case "getItem": {
            let input = new AWSDynamoDBGetItemInput();

            input.tableName = tableName;
            if (!item) {
                console.error("Item null or undefined");
                throw new Error("Item null or undefined");
            }
            let keyList = NSMutableArray.alloc().initWithCapacity(item.length);
            let objList = NSMutableArray.alloc().initWithCapacity(item.length);
            for (let _i = 0, item_2 = item; _i < item_2.length; _i++) {
                let temp = item_2[_i];
                let attributeValue = void 0;
                attributeValue = ddbUtils.convertItemToAttributeValue(temp.value);
                keyList.addObject(temp.key);
                objList.addObject(attributeValue);
            }
            input.key = NSDictionary.dictionaryWithObjectsForKeys(objList, keyList);
            let awsDynamoDB = AWSDynamoDB.DynamoDBForKey("PluginDynamoDB");
            let awsTask = awsDynamoDB.getItem(input);
            awsTask.continueWithBlock(function (task) {
                if (task.error) {
                    console.error(task.error.userInfo.valueForKey("message"));
                    throw new Error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    worker.postMessage(ddbUtils.convertItem(task.result));
                }
            });
            break;
        }
        case "deleteItem": {
            let input = new AWSDynamoDBDeleteItemInput();
            input.tableName = tableName;
            if (!item) {
                console.error("Item null or undefined");
                throw new Error("Item null or undefined");
            }
            let keyList = NSMutableArray.alloc().initWithCapacity(item.length);
            let objList = NSMutableArray.alloc().initWithCapacity(item.length);
            for (let _i = 0, item_3 = item; _i < item_3.length; _i++) {
                let temp = item_3[_i];
                let attributeValue = void 0;
                attributeValue = ddbUtils.convertItemToAttributeValue(temp.value);
                keyList.addObject(temp.key);
                objList.addObject(attributeValue);
            }
            input.key = NSDictionary.dictionaryWithObjectsForKeys(objList, keyList);
            let awsDynamoDB = AWSDynamoDB.DynamoDBForKey("PluginDynamoDB");
            let awsTask = awsDynamoDB.deleteItem(input);
            awsTask.continueWithBlock(function (task) {
                if (task.error) {
                    console.error(task.error.userInfo.valueForKey("message"));
                    throw new Error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    worker.postMessage(null);
                }
            });
            break;
        }
        case "updateItem": {
            let input = new AWSDynamoDBUpdateItemInput();
            input.tableName = tableName;
            if (!item) {
                console.error("Item null or undefined");
                throw new Error("Item null or undefined");
            }
            let keyList = NSMutableArray.alloc().initWithCapacity(item.length);
            let objList = NSMutableArray.alloc().initWithCapacity(item.length);
            for (let _i = 0, key_1 = item; _i < key_1.length; _i++) {
                let temp = key_1[_i];
                let attributeValue = void 0;
                attributeValue = ddbUtils.convertItemToAttributeValue(temp.value);
                keyList.addObject(temp.key);
                objList.addObject(attributeValue);
            }
            input.key = NSDictionary.dictionaryWithObjectsForKeys(objList, keyList);
            if (attributeUpdates) {
                keyList = NSMutableArray.alloc().initWithCapacity(attributeUpdates.length);
                objList = NSMutableArray.alloc().initWithCapacity(attributeUpdates.length);
                for (let _a = 0, attributeUpdates_1 = attributeUpdates; _a < attributeUpdates_1.length; _a++) {
                    let temp = attributeUpdates_1[_a];
                    let attributeValue = ddbUtils.convertItemToAttributeValue(temp.value);
                    let attributeValueUpdateTmp = new AWSDynamoDBAttributeValueUpdate();
                    attributeValueUpdateTmp.action = temp.action;
                    attributeValueUpdateTmp.value = attributeValue;
                    keyList.addObject(temp.key);
                    objList.addObject(attributeValueUpdateTmp);
                }
                input.attributeUpdates = NSDictionary.dictionaryWithObjectsForKeys(objList, keyList);
            }
            let awsDynamoDB = AWSDynamoDB.DynamoDBForKey("PluginDynamoDB");
            let awsTask = awsDynamoDB.updateItem(input);
            awsTask.continueWithBlock(function (task) {
                if (task.error) {
                    console.error(task.error.userInfo.valueForKey("message"));
                    throw new Error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    worker.postMessage(null);
                }
            });
            break;
        }
        case "query": {
            let input = new AWSDynamoDBQueryInput();
            input.tableName = tableName;
            input.scanIndexForward = scanIndexForward;
            input.keyConditionExpression = queryExpression;
            let keyListAttribute = NSMutableArray.alloc().initWithCapacity(attributeList.length);
            let objListAttribute = NSMutableArray.alloc().initWithCapacity(attributeList.length);
            for (let i = 0; i < attributeList.length; i++) {
                let attributeValue = ddbUtils.convertItemToAttributeValue(attributeList[i].value);
                keyListAttribute.addObject(attributeList[i].key);
                objListAttribute.addObject(attributeValue);
            }
            if (tagList) {
                let keyListNames = NSMutableArray.alloc().initWithCapacity(tagList.length);
                let objListNames = NSMutableArray.alloc().initWithCapacity(tagList.length);
                for (let i = 0; i < tagList.length; i++) {
                    keyListNames.addObject(tagList[i].key);
                    objListNames.addObject(tagList[i].value.data);
                }
                input.expressionAttributeNames = NSDictionary.dictionaryWithObjectsForKeys(objListNames, keyListNames);
            }
            if (limit) {
                input.limit = limit;
            }
            input.expressionAttributeValues = NSDictionary.dictionaryWithObjectsForKeys(objListAttribute, keyListAttribute);
            let awsDynamoDB = AWSDynamoDB.DynamoDBForKey("PluginDynamoDB");
            let awsTask = awsDynamoDB.query(input);
            awsTask.continueWithBlock(function (task) {
                if (task.error) {
                    console.error(task.error.userInfo.valueForKey("message"));
                    throw new Error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    let returnValue = new Array();
                    for (let i = 0; i < task.result.items.count; i++) {
                        returnValue.push(ddbUtils.convertRawItem(task.result.items[i]));
                    }
                    worker.postMessage(returnValue);
                }
            });
            break;
        }
    }
});
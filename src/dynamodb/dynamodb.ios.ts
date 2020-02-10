
import { Observable, Subject } from 'rxjs';
import * as ddbUtils from './ios/ddbutils.ios';

export class AwsDcDynamodb {
    private _region: string;
    private _identityPoolId: string;

    constructor() {
    }

    initDb(region: string, identityPoolId: string) {
        this._region = region;
        this._identityPoolId = identityPoolId;
        let regionValue = AWSRegionType[region];
        let credentialsProvider = AWSCognitoCredentialsProvider.alloc().initWithRegionTypeIdentityPoolId(regionValue, identityPoolId);
        let configuration = AWSServiceConfiguration.alloc().initWithRegionCredentialsProvider(regionValue, credentialsProvider);
        AWSDynamoDB.registerDynamoDBWithConfigurationForKey(configuration, "PluginDynamoDB");
    }

    getItem(tableName: string, item: Array<{
                key: string;
                value: {
                    data: any;
                    type: string;
                };
            }>): Observable<any> {
        let observer: Subject<any> = new Subject<any>();
        let input = new AWSDynamoDBGetItemInput();

        input.tableName = tableName;
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
            AwsDcDynamodb.invokeOnRunLoop(function () {
                if (task.error) {
                    observer.error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    observer.next(ddbUtils.convertItem(task.result));
                }
            });
        });
        return observer;
    }

    putItem(tableName: string, item: Array<{
                key: string;
                value: {
                    data: any;
                    type: string;
                };
            }>): Observable<any> {
        let observer: Subject<any> = new Subject<any>();
        let input = new AWSDynamoDBPutItemInput();
        input.tableName = tableName;
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
            AwsDcDynamodb.invokeOnRunLoop(function () {
                if (task.error) {
                    observer.error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    observer.next(null);
                }
            });
        });
        return observer;
    }

    deleteItem(tableName: string, item: Array<{
                    key: string;
                    value: {
                        data: any;
                        type: string;
                    };
                }>): Observable<any> {
        let observer: Subject<any> = new Subject<any>();
        let input = new AWSDynamoDBDeleteItemInput();
        input.tableName = tableName;
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
            AwsDcDynamodb.invokeOnRunLoop(function () {
                if (task.error) {
                    observer.error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    observer.next(null);
                }
            });
        });
        return observer;
    }

    updateItem(tableName, key, attributeUpdates): Observable<any> {
        let observer: Subject<any> = new Subject<any>();
        let input = new AWSDynamoDBUpdateItemInput();
        input.tableName = tableName;
        let keyList = NSMutableArray.alloc().initWithCapacity(key.length);
        let objList = NSMutableArray.alloc().initWithCapacity(key.length);
        for (let _i = 0, key_1 = key; _i < key_1.length; _i++) {
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
            AwsDcDynamodb.invokeOnRunLoop(function () {
                if (task.error) {
                    observer.error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    observer.next(null);
                }
            });
        });
        return observer;
    }

    queryItem(tableName: any, queryExpression: string,
              attributeList: Array<{key: string; value: {data: any; type: string; }}>,
              tagList?: Array<{key: string; value: {data: any; type: string; }}>,
              scanIndexForward?: boolean,
              limit?: number): Observable<any[]> {
        let observer: Subject<any[]> = new Subject<any[]>();
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
            AwsDcDynamodb.invokeOnRunLoop(function () {
                if (task.error) {
                    observer.error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    let returnValue = new Array();
                    for (let i = 0; i < task.result.items.count; i++) {
                        returnValue.push(ddbUtils.convertRawItem(task.result.items[i]));
                    }
                    observer.next(returnValue);
                }
            });
        });

        return observer;
     }

     private static invokeOnRunLoop = function() {
        let runLoop = CFRunLoopGetMain();
        return function (func) {
            CFRunLoopPerformBlock(runLoop, kCFRunLoopDefaultMode, func);
            CFRunLoopWakeUp(runLoop);
        };
    }();
}
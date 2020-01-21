
import { Observable, Subject } from 'rxjs';

export class AwsDc {
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
    getItem(tableName, item): Observable<Array<Object>> {
        let obs: Subject<Array<Object>> = new Subject<Array<Object>>();
        let input = new AWSDynamoDBGetItemInput();
        input.tableName = tableName;
        let keyList = NSMutableArray.alloc().initWithCapacity(item.length);
        let objList = NSMutableArray.alloc().initWithCapacity(item.length);
        for (let _i = 0, item_2 = item; _i < item_2.length; _i++) {
            let temp = item_2[_i];
            let attributeValue = void 0;
            attributeValue = AwsDc.convertItemToAttributeValue(temp.value);
            keyList.addObject(temp.key);
            objList.addObject(attributeValue);
        }
        input.key = NSDictionary.dictionaryWithObjectsForKeys(objList, keyList);
        let awsDynamoDB = AWSDynamoDB.DynamoDBForKey("PluginDynamoDB");
        let awsTask = awsDynamoDB.getItem(input);
        awsTask.continueWithBlock(function (task) {
            AwsDc.invokeOnRunLoop(function () {
                if (task.error) {
                    obs.error(task.error.userInfo.valueForKey("message"));
                }
                else {
                    obs.next(AwsDc.convertItem(task.result));
                }
            });
        });
        return obs;
    }

    private static invokeOnRunLoop = (function() {
        let runLoop = CFRunLoopGetMain();
        return function (func) {
            CFRunLoopPerformBlock(runLoop, kCFRunLoopDefaultMode, func);
            CFRunLoopWakeUp(runLoop);
        };
    }());

    private static convertItemToAttributeValue(value) {
        let resultAttribuValue = new AWSDynamoDBAttributeValue();
        if (value.type === "L") {
            let objList = NSMutableArray.alloc().initWithCapacity(value.data.length);
            for (let _i = 0, _a = value.data; _i < _a.length; _i++) {
                let tmp = _a[_i];
                let attributeValue = this.convertItemToAttributeValue(tmp);
                objList.addObject(attributeValue);
            }
            resultAttribuValue.L = NSArray.arrayWithArray(objList);
        }
        else if (value.type === "S") {
            resultAttribuValue.S = value.data;
        }
        else if (value.type === "N") {
            resultAttribuValue.N = value.data;
        }
        else if (value.type === "B") {
            resultAttribuValue.B = value.data;
        }
        else if (value.type === "SS" || value.type === "NS") {
            let objList = NSMutableArray.alloc().initWithCapacity(value.data.length);
            for (let _b = 0, _c = value.data; _b < _c.length; _b++) {
                let tmp = _c[_b];
                objList.addObject(tmp);
            }
            if (value.type === "SS") {
                resultAttribuValue.SS = NSArray.arrayWithArray(objList);
            }
            else {
                resultAttribuValue.NS = NSArray.arrayWithArray(objList);
            }
        }
        else if (value.type === "BO") {
            resultAttribuValue.BOOLEAN = new NSNumber(value.data);
        }
        return resultAttribuValue;
    }

    private static convertItem(result) {
        let attributeValue;
        if (!result.item) {
            return null;
        }
        let res = new Array<Object>(result.item.allKeys.count);
        let data;
        for (let i = 0; i < result.item.allKeys.count; i++) {
            let tmp = result.item.allKeys.objectAtIndex(i);
            attributeValue = result.item.objectForKey(tmp);
            data = AwsDc.convertAttributeValue(attributeValue);
            res[i] = data;
        }
        return res;
    }

    private static convertAttributeValue(attributeValue) {
        let data;
        if (attributeValue.S != null)
            data = attributeValue.S;
        else if (attributeValue.N != null)
            data = attributeValue.N;
        else if (attributeValue.B != null)
            data = attributeValue.B;
        else if (attributeValue.M != null)
            data = attributeValue.M;
        else if (attributeValue.L != null) {
            let r = new Array();
            let list = attributeValue.L;
            for (let i = 0; i < list.count; i++) {
                r.push(this.convertAttributeValue(list.objectAtIndex(i)));
            }
            data = r;
        }
        else if (attributeValue.BS != null || attributeValue.NS != null || attributeValue.SS != null) {
            let r = new Array();
            let list = attributeValue.BS;
            if (list == null)
                list = attributeValue.NS;
            if (list == null)
                list = attributeValue.SS;
            for (let i = 0; i < list.count; i++) {
                r.push(list.objectAtIndex(i));
            }
            data = r;
        }
        else if (attributeValue.NIL != null)
            data = attributeValue.NIL;
        else if (attributeValue.BOOLEAN != null)
            data = attributeValue.BOOLEAN;
        return data;
    }
}

/* "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let aws_dynamo_common_1 = require("./aws-dynamo.common");
let invokeOnRunLoop = (function () {
    let runLoop = CFRunLoopGetMain();
    return function (func) {
        CFRunLoopPerformBlock(runLoop, kCFRunLoopDefaultMode, func);
        CFRunLoopWakeUp(runLoop);
    };
}()); */
/* let AwsDynamo = (function (_super) {
    __extends(AwsDynamo, _super);
    function AwsDynamo() {
        return _super !== null && _super.apply(this, arguments) || this;
    } */
    /*
    AwsDynamo.prototype.initDdb = function (region, identityPoolId) {
        this.region = region;
        this.identityPoolId = identityPoolId;
        let regionValue = AWSRegionType[region];
        let credentialsProvider = AWSCognitoCredentialsProvider.alloc().initWithRegionTypeIdentityPoolId(regionValue, identityPoolId);
        let configuration = AWSServiceConfiguration.alloc().initWithRegionCredentialsProvider(regionValue, credentialsProvider);
        AWSDynamoDB.registerDynamoDBWithConfigurationForKey(configuration, "PluginDynamoDB");
    };
    AwsDynamo.prototype.putItem = function (tableName, item, delegate) {
        let input = new AWSDynamoDBPutItemInput();
        input.tableName = tableName;
        let keyList = NSMutableArray.alloc().initWithCapacity(item.length);
        let objList = NSMutableArray.alloc().initWithCapacity(item.length);
        for (let _i = 0, item_1 = item; _i < item_1.length; _i++) {
            let temp = item_1[_i];
            let attributeValue = void 0;
            attributeValue = this.convertItemToAttributeValue(temp.value);
            keyList.addObject(temp.key);
            objList.addObject(attributeValue);
        }
        input.item = NSDictionary.dictionaryWithObjectsForKeys(objList, keyList);
        let awsDynamoDB = AWSDynamoDB.DynamoDBForKey("PluginDynamoDB");
        let awsTask = awsDynamoDB.putItem(input);
        awsTask.continueWithBlock(function (task) {
            invokeOnRunLoop(function () {
                if (task.error) {
                    delegate.onError(task.error.userInfo.valueForKey("message"));
                }
                else {
                    delegate.onSuccess(null);
                }
            });
        });
    };
    AwsDynamo.prototype.getItem = function (tableName, item, delegate) {
        let input = new AWSDynamoDBGetItemInput();
        input.tableName = tableName;
        let keyList = NSMutableArray.alloc().initWithCapacity(item.length);
        let objList = NSMutableArray.alloc().initWithCapacity(item.length);
        for (let _i = 0, item_2 = item; _i < item_2.length; _i++) {
            let temp = item_2[_i];
            let attributeValue = void 0;
            attributeValue = this.convertItemToAttributeValue(temp.value);
            keyList.addObject(temp.key);
            objList.addObject(attributeValue);
        }
        input.key = NSDictionary.dictionaryWithObjectsForKeys(objList, keyList);
        let awsDynamoDB = AWSDynamoDB.DynamoDBForKey("PluginDynamoDB");
        let awsTask = awsDynamoDB.getItem(input);
        awsTask.continueWithBlock(function (task) {
            invokeOnRunLoop(function () {
                if (task.error) {
                    delegate.onError(task.error.userInfo.valueForKey("message"));
                }
                else {
                    delegate.onSuccess(AwsDynamo.convertItem(task.result));
                }
            });
        });
    };
    AwsDynamo.prototype.deleteItem = function (tableName, item, delegate) {
        let input = new AWSDynamoDBDeleteItemInput();
        input.tableName = tableName;
        let keyList = NSMutableArray.alloc().initWithCapacity(item.length);
        let objList = NSMutableArray.alloc().initWithCapacity(item.length);
        for (let _i = 0, item_3 = item; _i < item_3.length; _i++) {
            let temp = item_3[_i];
            let attributeValue = void 0;
            attributeValue = this.convertItemToAttributeValue(temp.value);
            keyList.addObject(temp.key);
            objList.addObject(attributeValue);
        }
        input.key = NSDictionary.dictionaryWithObjectsForKeys(objList, keyList);
        let awsDynamoDB = AWSDynamoDB.DynamoDBForKey("PluginDynamoDB");
        let awsTask = awsDynamoDB.deleteItem(input);
        awsTask.continueWithBlock(function (task) {
            invokeOnRunLoop(function () {
                if (task.error) {
                    delegate.onError(task.error.userInfo.valueForKey("message"));
                }
                else {
                    delegate.onSuccess(null);
                }
            });
        });
    };
    AwsDynamo.prototype.updateItem = function (tableName, key, attributeUpdates, delegate) {
        let input = new AWSDynamoDBUpdateItemInput();
        input.tableName = tableName;
        let keyList = NSMutableArray.alloc().initWithCapacity(key.length);
        let objList = NSMutableArray.alloc().initWithCapacity(key.length);
        for (let _i = 0, key_1 = key; _i < key_1.length; _i++) {
            let temp = key_1[_i];
            let attributeValue = void 0;
            attributeValue = this.convertItemToAttributeValue(temp.value);
            keyList.addObject(temp.key);
            objList.addObject(attributeValue);
        }
        input.key = NSDictionary.dictionaryWithObjectsForKeys(objList, keyList);
        if (attributeUpdates) {
            keyList = NSMutableArray.alloc().initWithCapacity(attributeUpdates.length);
            objList = NSMutableArray.alloc().initWithCapacity(attributeUpdates.length);
            for (let _a = 0, attributeUpdates_1 = attributeUpdates; _a < attributeUpdates_1.length; _a++) {
                let temp = attributeUpdates_1[_a];
                let attributeValue = this.convertItemToAttributeValue(temp.value);
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
            invokeOnRunLoop(function () {
                if (task.error) {
                    delegate.onError(task.error.userInfo.valueForKey("message"));
                }
                else {
                    delegate.onSuccess(null);
                }
            });
        });
    };
    AwsDynamo.prototype.convertItemToAttributeValue = function (value) {
        let resultAttribuValue = new AWSDynamoDBAttributeValue();
        if (value.type == "L") {
            let objList = NSMutableArray.alloc().initWithCapacity(value.data.length);
            for (let _i = 0, _a = value.data; _i < _a.length; _i++) {
                let tmp = _a[_i];
                let attributeValue = this.convertItemToAttributeValue(tmp);
                objList.addObject(attributeValue);
            }
            resultAttribuValue.L = NSArray.arrayWithArray(objList);
        }
        else if (value.type == "S") {
            resultAttribuValue.S = value.data;
        }
        else if (value.type == "N") {
            resultAttribuValue.N = value.data;
        }
        else if (value.type == "B") {
            resultAttribuValue.B = value.data;
        }
        else if (value.type == "SS" || value.type == "NS") {
            let objList = NSMutableArray.alloc().initWithCapacity(value.data.length);
            for (let _b = 0, _c = value.data; _b < _c.length; _b++) {
                let tmp = _c[_b];
                objList.addObject(tmp);
            }
            if (value.type == "SS") {
                resultAttribuValue.SS = NSArray.arrayWithArray(objList);
            }
            else {
                resultAttribuValue.NS = NSArray.arrayWithArray(objList);
            }
        }
        else if (value.type == "BO") {
            resultAttribuValue.BOOLEAN = new NSNumber(value.data);
        }
        return resultAttribuValue;
    };
    AwsDynamo.convertItem = function (result) {
        let attributeValue;
        if (!result.item) {
            return null;
        }
        let res = new Object();
        let obj, key, data;
        for (let i = 0; i < result.item.allKeys.count; i++) {
            let tmp = result.item.allKeys.objectAtIndex(i);
            attributeValue = result.item.objectForKey(tmp);
            data = this.convertAttributeValue(attributeValue);
            res[tmp] = data;
        }
        return res;
    };
    AwsDynamo.convertAttributeValue = function (attributeValue) {
        let data;
        if (attributeValue.S != null)
            data = attributeValue.S;
        else if (attributeValue.N != null)
            data = attributeValue.N;
        else if (attributeValue.B != null)
            data = attributeValue.B;
        else if (attributeValue.M != null)
            data = attributeValue.M;
        else if (attributeValue.L != null) {
            let r = new Array();
            let list = attributeValue.L;
            for (let i = 0; i < list.count; i++) {
                r.push(this.convertAttributeValue(list.objectAtIndex(i)));
            }
            data = r;
        }
        else if (attributeValue.BS != null || attributeValue.NS != null || attributeValue.SS != null) {
            let r = new Array();
            list = attributeValue.BS;
            if (list == null)
                list = attributeValue.NS;
            if (list == null)
                list = attributeValue.SS;
            for (let i = 0; i < list.count; i++) {
                r.push(list.objectAtIndex(i));
            }
            data = r;
        }
        else if (attributeValue.NIL != null)
            data = attributeValue.NIL;
        else if (attributeValue.BOOLEAN != null)
            data = attributeValue.BOOLEAN;
        return data;
    };
    return AwsDynamo;
}(aws_dynamo_common_1.Common));
exports.AwsDynamo = AwsDynamo;*/
//# sourceMappingURL=aws-dynamo.ios.js.map
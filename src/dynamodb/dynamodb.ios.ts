import { Observable, Subject } from 'rxjs';

declare const global, require;

export class AwsDcDynamodb {
    private region;
    private identityPoolId;

    constructor() {

    }

    initDb(region: string, identityPoolId: string): void {
        this.region = region;
        this.identityPoolId = identityPoolId;
        let regionValue = AWSRegionType[region];
        let credentialsProvider = AWSCognitoCredentialsProvider.alloc().initWithRegionTypeIdentityPoolId(regionValue, identityPoolId);
        let configuration = AWSServiceConfiguration.alloc().initWithRegionCredentialsProvider(regionValue, credentialsProvider);
        AWSDynamoDB.registerDynamoDBWithConfigurationForKey(configuration, "PluginDynamoDB");
    }
    getItem(tableName: any,
            item: Array<{key: string, value: {
                data: any, type: string
            }}>): Observable<any> {
                console.log(tableName);
                console.log(item);
        return this.mainFunction("getItem", tableName, item);
    }
    putItem(tableName: any, item: Array<{key: string, value: {
                data: any, type: string
            }}>): Observable<any> {
        return this.mainFunction("putItem", tableName, item);
    }
    deleteItem( tableName: any, item: Array<{key: string, value: {
                    data: any, type: string
                }}>): Observable<any> {
        return this.mainFunction("deleteItem", tableName, item);
    }
    updateItem(tableName: any, key: any, attributeUpdates: any): Observable<any> {
        return this.mainFunction("updateItem", tableName, key, attributeUpdates);
    }

    queryItem(tableName: any, queryExpression: string,
              attributeList: Array<{key: string; value: {data: any; type: string; }}>,
              tagList?: Array<{key: string; value: {data: any; type: string; }}>,
              scanIndexForward?: boolean,
              limit?: number): Observable<any[]> {
        let observer: Subject<any[]> = new Subject<any[]>();
        let worker;
        if (global["TNS_WEBPACK"]) {
            const WorkerScript = require("nativescript-worker-loader!./ddb-ios.worker.js");
            worker = new WorkerScript();
        } else {
            worker = new Worker("./ddb-ios.worker.js");
        }
        worker.postMessage({ "action": "query", "region": this.region,
                    "identityPoolId": this.identityPoolId,
                    "tableName": tableName, "tagList": tagList,
                    "attributeList": attributeList, "limit": limit,
                    "scanIndexForward": scanIndexForward,
                    "queryExpression": queryExpression });
        worker.onmessage = function (msg) {
            observer.next(msg.data);
        };
        worker.onerror = function (e) {
            observer.error(e.message);
        };
        return observer;
    }

    private mainFunction(action: string, tableName: any, item: any, attributeUpdates?: any): Observable<any> {
        let observer: Subject<any> = new Subject<any>();
        let worker;
        if (global["TNS_WEBPACK"]) {
            const WorkerScript = require("nativescript-worker-loader!./ddb-ios.worker.js");
            worker = new WorkerScript();
        } else {
            worker = new Worker("./ddb-ios.worker.js");
        }
        if (attributeUpdates) {
            worker.postMessage({ "action": action, "region": this.region,
                        "identityPoolId": this.identityPoolId,
                        "tableName": tableName, "key": item,
                        "attributeUpdates": attributeUpdates });
        } else {
            worker.postMessage({ "action": action, "region": this.region,
                        "identityPoolId": this.identityPoolId,
                        "tableName": tableName, "item": item });
        }
        worker.onmessage = function (msg) {
            observer.next(msg.data);
        };
        worker.onerror = function (e) {
            observer.error(e.message);
        };
        return observer;
    }
}
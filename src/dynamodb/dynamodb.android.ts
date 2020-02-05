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
    }
    getItem(tableName: any,
            item: Array<{key: string, value: {
                data: any, type: string
            }}>): Observable<any> {
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
              item: Array<{key: string, value: {
                data: any, type: string
              }}>, ): Observable<any[]> {
        let observer: Subject<any[]> = new Subject<any[]>();
        let worker;
        if (global["TNS_WEBPACK"]) {
            const WorkerScript = require("nativescript-worker-loader!./ddb.worker.js");
            worker = new WorkerScript();
        } else {
            worker = new Worker("./ddb.worker.js");
        }
        worker.postMessage({ "action": "query", "region": this.region,
                    "identityPoolId": this.identityPoolId,
                    "tableName": tableName, "item": item,
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
            const WorkerScript = require("nativescript-worker-loader!./ddb.worker.js");
            worker = new WorkerScript();
        } else {
            worker = new Worker("./ddb.worker.js");
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

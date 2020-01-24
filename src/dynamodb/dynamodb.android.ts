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
    getItem(tableName: any, item: any): Observable<Array<Object>> {
        return this.mainFunction("getItem", tableName, item);
    }
    putItem(tableName: any, item: any): Observable<Array<Object>> {
        return this.mainFunction("putItem", tableName, item);
    }
    deleteItem(tableName: any, item: any): Observable<Array<Object>> {
        return this.mainFunction("deleteItem", tableName, item);
    }
    updateItem(tableName: any, key: any, attributeUpdates: any): Observable<Array<Object>> {
        return this.mainFunction("updateItem", tableName, key, attributeUpdates);
    }

    private mainFunction(action: string, tableName: any, item: any, attributeUpdates?: any): Observable<Array<Object>> {
        let observer: Subject<Array<Object>> = new Subject<Array<Object>>();
        let worker;
        if (global["TNS_WEBPACK"]) {
            const WorkerScript = require("nativescript-worker-loader!./ddbworker.js");
            worker = new WorkerScript();
        } else {
            worker = new Worker("./ddbworker.js");
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
            console.log("inside the function... \n\n\n");
            console.log(msg.data);
            observer.next(msg.data);
            console.log("outside the function...\n\n\n");
        };
        worker.onerror = function (e) {
            observer.error(e.message);
        };
        return observer;
    }
}

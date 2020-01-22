import { Observable, Subject } from 'rxjs';

declare const global, require;

export class AwsDc {
    private region;
    private identityPoolId;

    constructor() {

    }

    /*AwsDynamo.prototype.initDdb = function (region, identityPoolId) {
        this.region = region;
        this.identityPoolId = identityPoolId;
    };
    AwsDynamo.prototype.putItem = function (tableName, item, delegate) {
        var worker = new Worker('./ddbworker.js');
        worker.postMessage({ "action": "putItem", "region": this.region, "identityPoolId": this.identityPoolId, "tableName": tableName, "item": item });
        worker.onmessage = function (msg) {
            delegate.onSuccess(null);
        };
        worker.onerror = function (e) {
            delegate.onError(e.message);
        };
    };
    AwsDynamo.prototype.getItem = function (tableName, item, delegate) {
        let worker;
        if (global["TNS_WEBPACK"]) {
            const WorkerScript = require("nativescript-worker-loader!./ddbworker.js");
            worker = new WorkerScript();
        } else {
            worker = new Worker("./ddbworker.js");
        }
        worker.postMessage({ "action": "getItem", "region": this.region, "identityPoolId": this.identityPoolId, "tableName": tableName, "item": item });
        worker.onmessage = function (msg) {
            delegate.onSuccess(msg.data);
        };
        worker.onerror = function (e) {
            delegate.onError(e.message);
        };
    };
    AwsDynamo.prototype.deleteItem = function (tableName, item, delegate) {
        var worker = new Worker('./ddbworker.js');
        worker.postMessage({ "action": "deleteItem", "region": this.region, "identityPoolId": this.identityPoolId, "tableName": tableName, "item": item });
        worker.onmessage = function (msg) {
            ;
            delegate.onSuccess(msg.data);
        };
        worker.onerror = function (e) {
            delegate.onError(e.message);
        };
    };
    AwsDynamo.prototype.updateItem = function (tableName, key, attributeUpdates, delegate) {
        var worker = new Worker('./ddbworker.js');
        worker.postMessage({ "action": "updateItem", "region": this.region, "identityPoolId": this.identityPoolId, "tableName": tableName, "item": key, "attributeUpdates": attributeUpdates });
        worker.onmessage = function (msg) {
            ;
            delegate.onSuccess(msg.data);
        };
        worker.onerror = function (e) {
            delegate.onError(e.message);
        };
    };*/

    initDb(region: string, identityPoolId: string): void {
        this.region = region;
        this.identityPoolId = identityPoolId;
    }
    getItem(tableName: any, item: any): Observable<Array<Object>> {
        let observer: Subject<Array<Object>> = new Subject<Array<Object>>();
        let worker;
        if (global["TNS_WEBPACK"]) {
            const WorkerScript = require("nativescript-worker-loader!./ddbworker.js");
            worker = new WorkerScript();
        } else {
            worker = new Worker("./ddbworker.js");
        }
        worker.postMessage({ "action": "getItem", "region": this.region, "identityPoolId": this.identityPoolId, "tableName": tableName, "item": item });
        worker.onmessage = function (msg) {
            observer.next(msg.data);
        };
        worker.onerror = function (e) {
            observer.error(e.message);
        };
        return observer;
    }
    /*putItem(tableName: any, item: any): Observable<Array<Object>>;
    deleteItem(tableName: any, item: any): Observable<Array<Object>>;
    updateItem(tableName: any, key: any, attributeUpdates: any): Observable<Array<Object>>;*/
}

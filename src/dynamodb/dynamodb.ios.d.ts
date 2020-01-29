import { Observable } from 'rxjs';
export declare class AwsDcDynamodb {
    private _region;
    private _identityPoolId;
    constructor();
    initDb(region: string, identityPoolId: string): void;
    getItem(tableName: any, item: any): Observable<any>;
    putItem(tableName: any, item: any): Observable<any>;
    deleteItem(tableName: any, item: any): Observable<any>;
    updateItem(tableName: any, key: any, attributeUpdates: any): Observable<any>;
    private static invokeOnRunLoop;
    private static convertItemToAttributeValue;
    private static convertItem;
    private static convertAttributeValue;
}

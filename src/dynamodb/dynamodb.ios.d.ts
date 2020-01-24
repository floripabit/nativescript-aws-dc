import { Observable } from 'rxjs';
export declare class AwsDcDynamodb {
    private _region;
    private _identityPoolId;
    constructor();
    initDb(region: string, identityPoolId: string): void;
    getItem(tableName: any, item: any): Observable<Array<Object>>;
    putItem(tableName: any, item: any): Observable<Array<Object>>;
    deleteItem(tableName: any, item: any): Observable<Array<Object>>;
    updateItem(tableName: any, key: any, attributeUpdates: any): Observable<Array<Object>>;
    private static invokeOnRunLoop;
    private static convertItemToAttributeValue;
    private static convertItem;
    private static convertAttributeValue;
}

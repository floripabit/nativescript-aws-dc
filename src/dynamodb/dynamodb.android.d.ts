import { Observable } from 'rxjs';
export declare class AwsDcDynamodb {
    private region;
    private identityPoolId;
    constructor();
    initDb(region: string, identityPoolId: string): void;
    getItem(tableName: any, item: any): Observable<Array<Object>>;
    putItem(tableName: any, item: any): Observable<Array<Object>>;
    deleteItem(tableName: any, item: any): Observable<Array<Object>>;
    updateItem(tableName: any, key: any, attributeUpdates: any): Observable<Array<Object>>;
    private mainFunction;
}

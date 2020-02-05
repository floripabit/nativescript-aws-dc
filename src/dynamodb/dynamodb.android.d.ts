import { Observable } from 'rxjs';
export declare class AwsDcDynamodb {
    private region;
    private identityPoolId;
    constructor();
    initDb(region: string, identityPoolId: string): void;
    getItem(tableName: any, item: any): Observable<any>;
    putItem(tableName: any, item: any): Observable<any>;
    deleteItem(tableName: any, item: any): Observable<any>;
    updateItem(tableName: any, key: any, attributeUpdates: any): Observable<any>;
    queryItem(tableName: any, item: any, queryExpression: any): Observable<any[]>;
    private mainFunction;
}

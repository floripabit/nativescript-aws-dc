import { Observable } from 'rxjs';
export declare class AwsDcDynamodb {
    private _region;
    private _identityPoolId;
    constructor();
    initDb(region: string, identityPoolId: string): void;
    getItem(tableName: string, item: Array<{
        key: string;
        value: {
            data: any;
            type: string;
        };
    }>): Observable<any>;
    putItem(tableName: string, item: Array<{
        key: string;
        value: {
            data: any;
            type: string;
        };
    }>): Observable<any>;
    deleteItem(tableName: string, item: Array<{
        key: string;
        value: {
            data: any;
            type: string;
        };
    }>): Observable<any>;
    updateItem(tableName: any, key: any, attributeUpdates: any): Observable<any>;
    queryItem(tableName: any, queryExpression: string, attributeList: Array<{
        key: string;
        value: {
            data: any;
            type: string;
        };
    }>, tagList?: Array<{
        key: string;
        value: {
            data: any;
            type: string;
        };
    }>, scanIndexForward?: boolean, limit?: number): Observable<any[]>;
    private static invokeOnRunLoop;
}

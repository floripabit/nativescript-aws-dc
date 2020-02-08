import { Observable } from 'rxjs';
export declare class AwsDcDynamodb {
    private region;
    private identityPoolId;
    constructor();
    initDb(region: string, identityPoolId: string): void;
    getItem(tableName: any, item: Array<{
        key: string;
        value: {
            data: any;
            type: string;
        };
    }>): Observable<any>;
    putItem(tableName: any, item: Array<{
        key: string;
        value: {
            data: any;
            type: string;
        };
    }>): Observable<any>;
    deleteItem(tableName: any, item: Array<{
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
    }>, limit?: number): Observable<any[]>;
    private mainFunction;
}

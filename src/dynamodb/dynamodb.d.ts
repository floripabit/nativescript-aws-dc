import { Observable, Subject } from 'rxjs';

export declare class AwsDcDynamodb {
  initDb(region: string, IientityPoolId: string): void;
  getItem(tableName: string, 
          item: Array<{key:string, value:{data:any, type:string}}>): Observable<any>;
  putItem(tableName: string, 
          item: Array<{key:string, value:{data:any, type:string}}>): Observable<any>;
  deleteItem(tableName: string, 
             item: Array<{key:string, value:{data:any, type:string}}>): Observable<any>;
  updateItem(tableName: string, key: any, attributeUpdates: any): Observable<any>;
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
}
import { Observable, Subject } from 'rxjs';

export declare class AwsDc {
  initDb(region: string, IientityPoolId: string): void;
  getItem(tableName: string, 
          item: Array<{key:string, value:{data:any, type:string}}>): Observable<Array<Object>>;
  putItem(tableName: string, 
          item: Array<{key:string, value:{data:any, type:string}}>): Observable<Array<Object>>;
  deleteItem(tableName: string, 
             item: Array<{key:string, value:{data:any, type:string}}>): Observable<Array<Object>>;
  updateItem(tableName: string, key: any, attributeUpdates: any): Observable<Array<Object>>;
}

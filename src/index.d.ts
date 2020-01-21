import { Observable, Subject } from 'rxjs';

export declare class AwsDc {
  initDb(region: string, IientityPoolId: string): void;
  getItem(tableName: string, 
          item: Array<{key:string, value:{data:any, type:string}}>): Observable<Array<Object>>;
}

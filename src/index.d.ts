export declare class AwsDc {
  constructor();
  initDb(region: string, IientityPoolId: string): void;
  getItem(tableName: string, 
          item: Array<{key:string, value:{data:any, type:string}}>): Promise<Array<any>>;
  teste();
}

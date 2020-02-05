declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module actions {
					export class DynamoDBv2Actions extends com.amazonaws.auth.policy.Action {
						public static class: java.lang.Class<com.amazonaws.auth.policy.actions.DynamoDBv2Actions>;
						public static AllDynamoDBv2Actions: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static BatchGetItem: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static BatchWriteItem: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static CreateBackup: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static CreateGlobalTable: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static CreateTable: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DeleteBackup: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DeleteItem: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DeleteTable: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DescribeBackup: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DescribeContinuousBackups: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DescribeEndpoints: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DescribeGlobalTable: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DescribeGlobalTableSettings: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DescribeLimits: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DescribeTable: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static DescribeTimeToLive: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static GetItem: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static ListBackups: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static ListGlobalTables: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static ListTables: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static ListTagsOfResource: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static PutItem: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static Query: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static RestoreTableFromBackup: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static RestoreTableToPointInTime: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static Scan: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static TagResource: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static UntagResource: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static UpdateContinuousBackups: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static UpdateGlobalTable: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static UpdateGlobalTableSettings: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static UpdateItem: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static UpdateTable: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static UpdateTimeToLive: com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public static valueOf(param0: string): com.amazonaws.auth.policy.actions.DynamoDBv2Actions;
						public getActionName(): string;
						public static values(): native.Array<com.amazonaws.auth.policy.actions.DynamoDBv2Actions>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export class AmazonDynamoDB {
					public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.AmazonDynamoDB>;
					/**
					 * Constructs a new instance of the com.amazonaws.services.dynamodbv2.AmazonDynamoDB interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setEndpoint(param0: string): void;
						setRegion(param0: com.amazonaws.regions.Region): void;
						batchGetItem(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						batchWriteItem(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						createBackup(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest): com.amazonaws.services.dynamodbv2.model.CreateBackupResult;
						createGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult;
						createTable(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
						deleteBackup(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest): com.amazonaws.services.dynamodbv2.model.DeleteBackupResult;
						deleteItem(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						deleteTable(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
						describeBackup(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest): com.amazonaws.services.dynamodbv2.model.DescribeBackupResult;
						describeContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult;
						describeEndpoints(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest): com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult;
						describeGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult;
						describeGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult;
						describeLimits(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
						describeTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
						describeTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult;
						getItem(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						listBackups(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest): com.amazonaws.services.dynamodbv2.model.ListBackupsResult;
						listGlobalTables(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult;
						listTables(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						listTagsOfResource(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult;
						putItem(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						query(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest): com.amazonaws.services.dynamodbv2.model.QueryResult;
						restoreTableFromBackup(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult;
						restoreTableToPointInTime(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult;
						scan(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest): com.amazonaws.services.dynamodbv2.model.ScanResult;
						tagResource(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest): void;
						untagResource(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest): void;
						updateContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult;
						updateGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult;
						updateGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult;
						updateItem(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						updateTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
						updateTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult;
						putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>, param3: string): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						describeTable(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
						scan(param0: string, param1: java.util.List<string>): com.amazonaws.services.dynamodbv2.model.ScanResult;
						scan(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
						scan(param0: string, param1: java.util.List<string>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
						deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						deleteTable(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
						createTable(param0: java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>, param1: string, param2: java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>, param3: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
						getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						listTables(): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						listTables(param0: string): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						listTables(param0: string, param1: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						listTables(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						updateTable(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
						batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>, param1: string): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						batchWriteItem(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						shutdown(): void;
						getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					});
					public constructor();
					public describeBackup(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest): com.amazonaws.services.dynamodbv2.model.DescribeBackupResult;
					public putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					public describeContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult;
					public batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public describeGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult;
					public scan(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public deleteTable(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
					public listTables(): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					public listGlobalTables(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult;
					public updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>, param3: string): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public batchWriteItem(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
					public updateGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult;
					public deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public describeTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult;
					public listTables(param0: string, param1: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public updateContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult;
					public listTables(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public getItem(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public query(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest): com.amazonaws.services.dynamodbv2.model.QueryResult;
					public updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public updateItem(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public batchWriteItem(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
					public updateTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
					public describeEndpoints(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest): com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult;
					public listBackups(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest): com.amazonaws.services.dynamodbv2.model.ListBackupsResult;
					public createTable(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
					public scan(param0: string, param1: java.util.List<string>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public restoreTableFromBackup(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult;
					public scan(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public updateTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult;
					public createBackup(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest): com.amazonaws.services.dynamodbv2.model.CreateBackupResult;
					public deleteBackup(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest): com.amazonaws.services.dynamodbv2.model.DeleteBackupResult;
					public createTable(param0: java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>, param1: string, param2: java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>, param3: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
					public describeTable(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
					public shutdown(): void;
					public setEndpoint(param0: string): void;
					public untagResource(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest): void;
					public describeTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
					public deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public deleteItem(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					public scan(param0: string, param1: java.util.List<string>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public describeGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult;
					public updateTable(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
					public listTables(param0: string): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>, param1: string): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public restoreTableToPointInTime(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult;
					public deleteTable(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
					public putItem(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					public tagResource(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest): void;
					public describeLimits(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
					public listTables(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public batchGetItem(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public setRegion(param0: com.amazonaws.regions.Region): void;
					public listTagsOfResource(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult;
					public updateGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult;
					public createGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export class AmazonDynamoDBAsync extends com.amazonaws.services.dynamodbv2.AmazonDynamoDB {
					public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.AmazonDynamoDBAsync>;
					/**
					 * Constructs a new instance of the com.amazonaws.services.dynamodbv2.AmazonDynamoDBAsync interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						batchGetItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchGetItemResult>;
						batchGetItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest,com.amazonaws.services.dynamodbv2.model.BatchGetItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchGetItemResult>;
						batchWriteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult>;
						batchWriteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest,com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult>;
						createBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateBackupResult>;
						createBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.CreateBackupRequest,com.amazonaws.services.dynamodbv2.model.CreateBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateBackupResult>;
						createGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult>;
						createGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest,com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult>;
						createTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateTableResult>;
						createTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.CreateTableRequest,com.amazonaws.services.dynamodbv2.model.CreateTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateTableResult>;
						deleteBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteBackupResult>;
						deleteBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest,com.amazonaws.services.dynamodbv2.model.DeleteBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteBackupResult>;
						deleteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteItemResult>;
						deleteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DeleteItemRequest,com.amazonaws.services.dynamodbv2.model.DeleteItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteItemResult>;
						deleteTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteTableResult>;
						deleteTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DeleteTableRequest,com.amazonaws.services.dynamodbv2.model.DeleteTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteTableResult>;
						describeBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeBackupResult>;
						describeBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest,com.amazonaws.services.dynamodbv2.model.DescribeBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeBackupResult>;
						describeContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult>;
						describeContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest,com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult>;
						describeEndpointsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult>;
						describeEndpointsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest,com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult>;
						describeGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult>;
						describeGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest,com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult>;
						describeGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult>;
						describeGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest,com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult>;
						describeLimitsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult>;
						describeLimitsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest,com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult>;
						describeTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTableResult>;
						describeTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeTableRequest,com.amazonaws.services.dynamodbv2.model.DescribeTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTableResult>;
						describeTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult>;
						describeTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest,com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult>;
						getItemAsync(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.GetItemResult>;
						getItemAsync(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.GetItemRequest,com.amazonaws.services.dynamodbv2.model.GetItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.GetItemResult>;
						listBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListBackupsResult>;
						listBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListBackupsRequest,com.amazonaws.services.dynamodbv2.model.ListBackupsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListBackupsResult>;
						listGlobalTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult>;
						listGlobalTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest,com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult>;
						listTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTablesResult>;
						listTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListTablesRequest,com.amazonaws.services.dynamodbv2.model.ListTablesResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTablesResult>;
						listTagsOfResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult>;
						listTagsOfResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest,com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult>;
						putItemAsync(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.PutItemResult>;
						putItemAsync(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.PutItemRequest,com.amazonaws.services.dynamodbv2.model.PutItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.PutItemResult>;
						queryAsync(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.QueryResult>;
						queryAsync(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.QueryRequest,com.amazonaws.services.dynamodbv2.model.QueryResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.QueryResult>;
						restoreTableFromBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult>;
						restoreTableFromBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest,com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult>;
						restoreTableToPointInTimeAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult>;
						restoreTableToPointInTimeAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest,com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult>;
						scanAsync(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ScanResult>;
						scanAsync(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ScanRequest,com.amazonaws.services.dynamodbv2.model.ScanResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ScanResult>;
						tagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest): java.util.concurrent.Future<java.lang.Void>;
						tagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.TagResourceRequest,java.lang.Void>): java.util.concurrent.Future<java.lang.Void>;
						untagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest): java.util.concurrent.Future<java.lang.Void>;
						untagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UntagResourceRequest,java.lang.Void>): java.util.concurrent.Future<java.lang.Void>;
						updateContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult>;
						updateContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest,com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult>;
						updateGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult>;
						updateGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest,com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult>;
						updateGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult>;
						updateGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest,com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult>;
						updateItemAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateItemResult>;
						updateItemAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateItemRequest,com.amazonaws.services.dynamodbv2.model.UpdateItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateItemResult>;
						updateTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTableResult>;
						updateTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateTableRequest,com.amazonaws.services.dynamodbv2.model.UpdateTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTableResult>;
						updateTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult>;
						updateTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest,com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult>;
						setEndpoint(param0: string): void;
						setRegion(param0: com.amazonaws.regions.Region): void;
						batchGetItem(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						batchWriteItem(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						createBackup(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest): com.amazonaws.services.dynamodbv2.model.CreateBackupResult;
						createGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult;
						createTable(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
						deleteBackup(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest): com.amazonaws.services.dynamodbv2.model.DeleteBackupResult;
						deleteItem(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						deleteTable(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
						describeBackup(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest): com.amazonaws.services.dynamodbv2.model.DescribeBackupResult;
						describeContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult;
						describeEndpoints(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest): com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult;
						describeGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult;
						describeGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult;
						describeLimits(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
						describeTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
						describeTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult;
						getItem(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						listBackups(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest): com.amazonaws.services.dynamodbv2.model.ListBackupsResult;
						listGlobalTables(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult;
						listTables(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						listTagsOfResource(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult;
						putItem(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						query(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest): com.amazonaws.services.dynamodbv2.model.QueryResult;
						restoreTableFromBackup(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult;
						restoreTableToPointInTime(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult;
						scan(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest): com.amazonaws.services.dynamodbv2.model.ScanResult;
						tagResource(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest): void;
						untagResource(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest): void;
						updateContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult;
						updateGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult;
						updateGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult;
						updateItem(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						updateTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
						updateTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult;
						putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>, param3: string): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						describeTable(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
						scan(param0: string, param1: java.util.List<string>): com.amazonaws.services.dynamodbv2.model.ScanResult;
						scan(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
						scan(param0: string, param1: java.util.List<string>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
						deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						deleteTable(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
						createTable(param0: java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>, param1: string, param2: java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>, param3: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
						getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						listTables(): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						listTables(param0: string): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						listTables(param0: string, param1: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						listTables(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						updateTable(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
						batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>, param1: string): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						batchWriteItem(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						shutdown(): void;
						getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					});
					public constructor();
					public describeBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeBackupResult>;
					public describeTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest,com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult>;
					public describeLimitsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest,com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult>;
					public putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					public describeContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult;
					public createBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateBackupResult>;
					public describeGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult;
					public scan(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public listTables(): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public updateGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest,com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult>;
					public updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>, param3: string): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public describeEndpointsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest,com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult>;
					public updateTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult>;
					public updateItemAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateItemRequest,com.amazonaws.services.dynamodbv2.model.UpdateItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateItemResult>;
					public describeContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult>;
					public queryAsync(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.QueryResult>;
					public restoreTableFromBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest,com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult>;
					public listTables(param0: string, param1: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public getItem(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public batchWriteItem(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
					public listBackups(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest): com.amazonaws.services.dynamodbv2.model.ListBackupsResult;
					public describeEndpointsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult>;
					public updateContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult>;
					public createGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult>;
					public deleteBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest,com.amazonaws.services.dynamodbv2.model.DeleteBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteBackupResult>;
					public listTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTablesResult>;
					public updateGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest,com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult>;
					public listBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListBackupsRequest,com.amazonaws.services.dynamodbv2.model.ListBackupsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListBackupsResult>;
					public updateTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest,com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult>;
					public restoreTableFromBackup(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult;
					public scan(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public createBackup(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest): com.amazonaws.services.dynamodbv2.model.CreateBackupResult;
					public restoreTableToPointInTimeAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult>;
					public deleteBackup(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest): com.amazonaws.services.dynamodbv2.model.DeleteBackupResult;
					public createTable(param0: java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>, param1: string, param2: java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>, param3: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
					public describeTable(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
					public updateItemAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateItemResult>;
					public shutdown(): void;
					public restoreTableToPointInTimeAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest,com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult>;
					public putItemAsync(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.PutItemResult>;
					public listTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListTablesRequest,com.amazonaws.services.dynamodbv2.model.ListTablesResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTablesResult>;
					public scanAsync(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ScanResult>;
					public untagResource(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest): void;
					public describeGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult>;
					public deleteItem(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public updateGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult>;
					public describeGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult;
					public listTables(param0: string): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public deleteTable(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
					public createBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.CreateBackupRequest,com.amazonaws.services.dynamodbv2.model.CreateBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateBackupResult>;
					public listGlobalTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest,com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult>;
					public tagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.TagResourceRequest,java.lang.Void>): java.util.concurrent.Future<java.lang.Void>;
					public tagResource(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest): void;
					public describeLimits(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
					public listTables(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public listTagsOfResource(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult;
					public batchGetItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest,com.amazonaws.services.dynamodbv2.model.BatchGetItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchGetItemResult>;
					public deleteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DeleteItemRequest,com.amazonaws.services.dynamodbv2.model.DeleteItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteItemResult>;
					public describeBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest,com.amazonaws.services.dynamodbv2.model.DescribeBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeBackupResult>;
					public updateGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult;
					public updateTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateTableRequest,com.amazonaws.services.dynamodbv2.model.UpdateTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTableResult>;
					public createGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult;
					public describeBackup(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest): com.amazonaws.services.dynamodbv2.model.DescribeBackupResult;
					public getItemAsync(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.GetItemResult>;
					public scanAsync(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ScanRequest,com.amazonaws.services.dynamodbv2.model.ScanResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ScanResult>;
					public createTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateTableResult>;
					public describeTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeTableRequest,com.amazonaws.services.dynamodbv2.model.DescribeTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTableResult>;
					public batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public putItemAsync(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.PutItemRequest,com.amazonaws.services.dynamodbv2.model.PutItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.PutItemResult>;
					public describeLimitsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult>;
					public describeContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest,com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult>;
					public deleteTable(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
					public deleteBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteBackupResult>;
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					public listGlobalTables(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult;
					public batchWriteItem(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
					public updateGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult;
					public deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public describeTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult;
					public updateGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult>;
					public updateContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult;
					public listTables(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public listBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListBackupsResult>;
					public getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public query(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest): com.amazonaws.services.dynamodbv2.model.QueryResult;
					public deleteTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DeleteTableRequest,com.amazonaws.services.dynamodbv2.model.DeleteTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteTableResult>;
					public updateItem(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public queryAsync(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.QueryRequest,com.amazonaws.services.dynamodbv2.model.QueryResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.QueryResult>;
					public listGlobalTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult>;
					public updateTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
					public describeEndpoints(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest): com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult;
					public createTable(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
					public createTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.CreateTableRequest,com.amazonaws.services.dynamodbv2.model.CreateTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateTableResult>;
					public scan(param0: string, param1: java.util.List<string>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public deleteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteItemResult>;
					public describeGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest,com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult>;
					public describeGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult>;
					public deleteTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteTableResult>;
					public listTagsOfResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult>;
					public updateTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult;
					public batchGetItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchGetItemResult>;
					public untagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UntagResourceRequest,java.lang.Void>): java.util.concurrent.Future<java.lang.Void>;
					public untagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest): java.util.concurrent.Future<java.lang.Void>;
					public updateContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest,com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult>;
					public setEndpoint(param0: string): void;
					public describeGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest,com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult>;
					public describeTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
					public deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					public scan(param0: string, param1: java.util.List<string>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public restoreTableFromBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult>;
					public updateTable(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
					public batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>, param1: string): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public describeTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult>;
					public restoreTableToPointInTime(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult;
					public batchWriteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult>;
					public updateTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTableResult>;
					public putItem(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					public batchWriteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest,com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult>;
					public listTagsOfResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest,com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult>;
					public batchGetItem(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public setRegion(param0: com.amazonaws.regions.Region): void;
					public tagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest): java.util.concurrent.Future<java.lang.Void>;
					public createGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest,com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult>;
					public describeTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTableResult>;
					public getItemAsync(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.GetItemRequest,com.amazonaws.services.dynamodbv2.model.GetItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.GetItemResult>;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export class AmazonDynamoDBAsyncClient extends com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient implements com.amazonaws.services.dynamodbv2.AmazonDynamoDBAsync {
					public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.AmazonDynamoDBAsyncClient>;
					public describeBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeBackupResult>;
					public describeTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest,com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult>;
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration);
					public describeLimitsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest,com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult>;
					public putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					public describeContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult;
					public createBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateBackupResult>;
					public describeGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult;
					public scan(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public listTables(): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public updateGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest,com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult>;
					public updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>, param3: string): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public describeEndpointsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest,com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult>;
					public updateTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult>;
					public updateItemAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateItemRequest,com.amazonaws.services.dynamodbv2.model.UpdateItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateItemResult>;
					public describeContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult>;
					public queryAsync(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.QueryResult>;
					public restoreTableFromBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest,com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult>;
					public listTables(param0: string, param1: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public getItem(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public batchWriteItem(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
					public listBackups(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest): com.amazonaws.services.dynamodbv2.model.ListBackupsResult;
					public describeEndpointsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult>;
					public updateContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult>;
					public createGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult>;
					public deleteBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest,com.amazonaws.services.dynamodbv2.model.DeleteBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteBackupResult>;
					public listTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTablesResult>;
					public updateGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest,com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult>;
					public listBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListBackupsRequest,com.amazonaws.services.dynamodbv2.model.ListBackupsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListBackupsResult>;
					public updateTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest,com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult>;
					public restoreTableFromBackup(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult;
					public scan(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public createBackup(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest): com.amazonaws.services.dynamodbv2.model.CreateBackupResult;
					public restoreTableToPointInTimeAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult>;
					public deleteBackup(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest): com.amazonaws.services.dynamodbv2.model.DeleteBackupResult;
					public createTable(param0: java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>, param1: string, param2: java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>, param3: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
					public describeTable(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
					public updateItemAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateItemResult>;
					public shutdown(): void;
					public restoreTableToPointInTimeAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest,com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult>;
					public putItemAsync(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.PutItemResult>;
					public listTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListTablesRequest,com.amazonaws.services.dynamodbv2.model.ListTablesResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTablesResult>;
					public scanAsync(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ScanResult>;
					public untagResource(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest): void;
					public describeGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult>;
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: java.util.concurrent.ExecutorService);
					public deleteItem(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public updateGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult>;
					public describeGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult;
					public listTables(param0: string): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public deleteTable(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
					public createBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.CreateBackupRequest,com.amazonaws.services.dynamodbv2.model.CreateBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateBackupResult>;
					public listGlobalTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest,com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult>;
					public tagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.TagResourceRequest,java.lang.Void>): java.util.concurrent.Future<java.lang.Void>;
					public tagResource(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest): void;
					public describeLimits(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
					public listTables(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public listTagsOfResource(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentials, param1: com.amazonaws.ClientConfiguration, param2: java.util.concurrent.ExecutorService);
					public batchGetItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest,com.amazonaws.services.dynamodbv2.model.BatchGetItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchGetItemResult>;
					public deleteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DeleteItemRequest,com.amazonaws.services.dynamodbv2.model.DeleteItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteItemResult>;
					public describeBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest,com.amazonaws.services.dynamodbv2.model.DescribeBackupResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeBackupResult>;
					public updateGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult;
					public updateTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateTableRequest,com.amazonaws.services.dynamodbv2.model.UpdateTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTableResult>;
					public createGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult;
					public describeBackup(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest): com.amazonaws.services.dynamodbv2.model.DescribeBackupResult;
					public getItemAsync(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.GetItemResult>;
					public scanAsync(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ScanRequest,com.amazonaws.services.dynamodbv2.model.ScanResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ScanResult>;
					public createTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateTableResult>;
					public describeTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeTableRequest,com.amazonaws.services.dynamodbv2.model.DescribeTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTableResult>;
					public batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public putItemAsync(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.PutItemRequest,com.amazonaws.services.dynamodbv2.model.PutItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.PutItemResult>;
					/** @deprecated */
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration, param2: com.amazonaws.metrics.RequestMetricCollector);
					public describeLimitsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult>;
					public describeContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest,com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult>;
					public deleteTable(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
					public deleteBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteBackupResult>;
					public constructor(param0: com.amazonaws.auth.AWSCredentials, param1: java.util.concurrent.ExecutorService);
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					/** @deprecated */
					public constructor();
					public listGlobalTables(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult;
					public batchWriteItem(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
					public updateGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentials, param1: com.amazonaws.ClientConfiguration);
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider);
					public deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public describeTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult;
					public updateGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult>;
					public updateContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult;
					public listTables(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public listBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListBackupsResult>;
					public getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public query(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest): com.amazonaws.services.dynamodbv2.model.QueryResult;
					public deleteTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DeleteTableRequest,com.amazonaws.services.dynamodbv2.model.DeleteTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteTableResult>;
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration, param2: com.amazonaws.http.HttpClient);
					public updateItem(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public queryAsync(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.QueryRequest,com.amazonaws.services.dynamodbv2.model.QueryResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.QueryResult>;
					public listGlobalTablesAsync(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult>;
					public updateTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
					public describeEndpoints(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest): com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult;
					public createTable(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
					public createTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.CreateTableRequest,com.amazonaws.services.dynamodbv2.model.CreateTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateTableResult>;
					public getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public scan(param0: string, param1: java.util.List<string>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public deleteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteItemResult>;
					public describeGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest,com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult>;
					public describeGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult>;
					/** @deprecated */
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					public deleteTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DeleteTableResult>;
					public listTagsOfResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult>;
					public updateTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult;
					public batchGetItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchGetItemResult>;
					public untagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UntagResourceRequest,java.lang.Void>): java.util.concurrent.Future<java.lang.Void>;
					public untagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest): java.util.concurrent.Future<java.lang.Void>;
					public updateContinuousBackupsAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest,com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult>;
					public constructor(param0: com.amazonaws.auth.AWSCredentials);
					public setEndpoint(param0: string): void;
					public describeGlobalTableSettingsAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest,com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult>;
					public deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public describeTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
					public putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					public getExecutorService(): java.util.concurrent.ExecutorService;
					public scan(param0: string, param1: java.util.List<string>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public restoreTableFromBackupAsync(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult>;
					public updateTable(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
					public batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>, param1: string): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public describeTimeToLiveAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult>;
					public restoreTableToPointInTime(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult;
					public batchWriteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult>;
					public updateTableAsync(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.UpdateTableResult>;
					public putItem(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					/** @deprecated */
					public constructor(param0: com.amazonaws.ClientConfiguration);
					public batchWriteItemAsync(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest,com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult>;
					public listTagsOfResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest,com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult>;
					public batchGetItem(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public setRegion(param0: com.amazonaws.regions.Region): void;
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration, param2: java.util.concurrent.ExecutorService);
					public tagResourceAsync(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest): java.util.concurrent.Future<java.lang.Void>;
					public createGlobalTableAsync(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest,com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult>;
					public describeTableAsync(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.DescribeTableResult>;
					public getItemAsync(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest, param1: com.amazonaws.handlers.AsyncHandler<com.amazonaws.services.dynamodbv2.model.GetItemRequest,com.amazonaws.services.dynamodbv2.model.GetItemResult>): java.util.concurrent.Future<com.amazonaws.services.dynamodbv2.model.GetItemResult>;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export class AmazonDynamoDBClient implements com.amazonaws.services.dynamodbv2.AmazonDynamoDB {
					public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient>;
					public jsonErrorUnmarshallers: java.util.List<com.amazonaws.transform.JsonErrorUnmarshaller>;
					public describeBackup(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest): com.amazonaws.services.dynamodbv2.model.DescribeBackupResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration);
					public putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					public describeContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult;
					public batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					/** @deprecated */
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration, param2: com.amazonaws.metrics.RequestMetricCollector);
					public describeGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult;
					public scan(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public deleteTable(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
					public listTables(): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					/** @deprecated */
					public constructor();
					public listGlobalTables(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult;
					public updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>, param3: string): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public batchWriteItem(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
					public updateGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentials, param1: com.amazonaws.ClientConfiguration);
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider);
					public deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public describeTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult;
					public listTables(param0: string, param1: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public updateContinuousBackups(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest): com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult;
					public listTables(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public getItem(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public query(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest): com.amazonaws.services.dynamodbv2.model.QueryResult;
					public updateItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration, param2: com.amazonaws.http.HttpClient);
					public updateItem(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					public batchWriteItem(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
					public updateTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
					public describeEndpoints(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest): com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult;
					public listBackups(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest): com.amazonaws.services.dynamodbv2.model.ListBackupsResult;
					public createTable(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
					public scan(param0: string, param1: java.util.List<string>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public getItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.GetItemResult;
					public restoreTableFromBackup(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult;
					/** @deprecated */
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					public scan(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public updateTimeToLive(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest): com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult;
					public createBackup(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest): com.amazonaws.services.dynamodbv2.model.CreateBackupResult;
					public deleteBackup(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest): com.amazonaws.services.dynamodbv2.model.DeleteBackupResult;
					public createTable(param0: java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>, param1: string, param2: java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>, param3: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentials);
					public describeTable(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
					public shutdown(): void;
					public setEndpoint(param0: string): void;
					public untagResource(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest): void;
					public describeTable(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
					public deleteItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public deleteItem(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
					public putItem(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					public scan(param0: string, param1: java.util.List<string>): com.amazonaws.services.dynamodbv2.model.ScanResult;
					public describeGlobalTableSettings(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult;
					public updateTable(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
					public listTables(param0: string): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public batchGetItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>, param1: string): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public restoreTableToPointInTime(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult;
					public deleteTable(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
					public putItem(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest): com.amazonaws.services.dynamodbv2.model.PutItemResult;
					/** @deprecated */
					public constructor(param0: com.amazonaws.ClientConfiguration);
					public tagResource(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest): void;
					public describeLimits(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
					public listTables(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
					public batchGetItem(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					public listTagsOfResource(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult;
					public setRegion(param0: com.amazonaws.regions.Region): void;
					public updateGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult;
					public createGlobalTable(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module metrics {
					export class DynamoDBRequestMetric extends com.amazonaws.metrics.RequestMetricType {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.metrics.DynamoDBRequestMetric>;
						public static DynamoDBConsumedCapacity: com.amazonaws.services.dynamodbv2.metrics.DynamoDBRequestMetric;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.metrics.DynamoDBRequestMetric>;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.metrics.DynamoDBRequestMetric;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class AttributeAction {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.AttributeAction>;
						public static ADD: com.amazonaws.services.dynamodbv2.model.AttributeAction;
						public static PUT: com.amazonaws.services.dynamodbv2.model.AttributeAction;
						public static DELETE: com.amazonaws.services.dynamodbv2.model.AttributeAction;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.AttributeAction;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.AttributeAction>;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.AttributeAction;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class AttributeDefinition {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>;
						public setAttributeType(param0: com.amazonaws.services.dynamodbv2.model.ScalarAttributeType): void;
						public constructor();
						public constructor(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ScalarAttributeType);
						public getAttributeName(): string;
						public withAttributeName(param0: string): com.amazonaws.services.dynamodbv2.model.AttributeDefinition;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public withAttributeType(param0: string): com.amazonaws.services.dynamodbv2.model.AttributeDefinition;
						public setAttributeType(param0: string): void;
						public withAttributeType(param0: com.amazonaws.services.dynamodbv2.model.ScalarAttributeType): com.amazonaws.services.dynamodbv2.model.AttributeDefinition;
						public constructor(param0: string, param1: string);
						public getAttributeType(): string;
						public setAttributeName(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class AttributeValue {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withN(param0: string): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public getB(): java.nio.ByteBuffer;
						public withSS(param0: java.util.Collection<string>): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public setN(param0: string): void;
						public getSS(): java.util.List<string>;
						public getBS(): java.util.List<java.nio.ByteBuffer>;
						public setBOOL(param0: java.lang.Boolean): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withNS(param0: native.Array<string>): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public getM(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public setNULL(param0: java.lang.Boolean): void;
						public isBOOL(): java.lang.Boolean;
						public setB(param0: java.nio.ByteBuffer): void;
						public withNS(param0: java.util.Collection<string>): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public withS(param0: string): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public constructor(param0: java.util.List<string>);
						public getS(): string;
						public withBS(param0: native.Array<java.nio.ByteBuffer>): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public withB(param0: java.nio.ByteBuffer): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public setM(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public withNULL(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public isNULL(): java.lang.Boolean;
						public getL(): java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public constructor();
						public getBOOL(): java.lang.Boolean;
						public setL(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public withSS(param0: native.Array<string>): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public withL(param0: native.Array<com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public setSS(param0: java.util.Collection<string>): void;
						public withM(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public setS(param0: string): void;
						public toString(): string;
						public getN(): string;
						public getNS(): java.util.List<string>;
						public addMEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public getNULL(): java.lang.Boolean;
						public setNS(param0: java.util.Collection<string>): void;
						public withBOOL(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public clearMEntries(): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public withBS(param0: java.util.Collection<java.nio.ByteBuffer>): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public withL(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public constructor(param0: string);
						public setBS(param0: java.util.Collection<java.nio.ByteBuffer>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class AttributeValueUpdate {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>;
						public getAction(): string;
						public withAction(param0: string): com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate;
						public constructor();
						public setAction(param0: com.amazonaws.services.dynamodbv2.model.AttributeAction): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withValue(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate;
						public toString(): string;
						public getValue(): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public setValue(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): void;
						public constructor(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: com.amazonaws.services.dynamodbv2.model.AttributeAction);
						public withAction(param0: com.amazonaws.services.dynamodbv2.model.AttributeAction): com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate;
						public setAction(param0: string): void;
						public constructor(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class AutoScalingPolicyDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyDescription>;
						public constructor();
						public getTargetTrackingScalingPolicyConfiguration(): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
						public withTargetTrackingScalingPolicyConfiguration(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription): com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyDescription;
						public setTargetTrackingScalingPolicyConfiguration(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPolicyName(): string;
						public setPolicyName(param0: string): void;
						public withPolicyName(param0: string): com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyDescription;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class AutoScalingPolicyUpdate {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyUpdate>;
						public constructor();
						public getTargetTrackingScalingPolicyConfiguration(): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
						public setTargetTrackingScalingPolicyConfiguration(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate): void;
						public withPolicyName(param0: string): com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyUpdate;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPolicyName(): string;
						public setPolicyName(param0: string): void;
						public withTargetTrackingScalingPolicyConfiguration(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate): com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyUpdate;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class AutoScalingSettingsDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription>;
						public withMaximumUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
						public constructor();
						public setMinimumUnits(param0: java.lang.Long): void;
						public setAutoScalingDisabled(param0: java.lang.Boolean): void;
						public withScalingPolicies(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyDescription>): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
						public getMinimumUnits(): java.lang.Long;
						public setScalingPolicies(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyDescription>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAutoScalingDisabled(): java.lang.Boolean;
						public getMaximumUnits(): java.lang.Long;
						public toString(): string;
						public withMinimumUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
						public isAutoScalingDisabled(): java.lang.Boolean;
						public withScalingPolicies(param0: native.Array<com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyDescription>): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
						public setMaximumUnits(param0: java.lang.Long): void;
						public withAutoScalingDisabled(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
						public getScalingPolicies(): java.util.List<com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyDescription>;
						public withAutoScalingRoleArn(param0: string): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
						public getAutoScalingRoleArn(): string;
						public setAutoScalingRoleArn(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class AutoScalingSettingsUpdate {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate>;
						public constructor();
						public setMinimumUnits(param0: java.lang.Long): void;
						public setAutoScalingDisabled(param0: java.lang.Boolean): void;
						public getMinimumUnits(): java.lang.Long;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAutoScalingDisabled(): java.lang.Boolean;
						public getMaximumUnits(): java.lang.Long;
						public withAutoScalingDisabled(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate;
						public toString(): string;
						public withMinimumUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate;
						public setScalingPolicyUpdate(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyUpdate): void;
						public getScalingPolicyUpdate(): com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyUpdate;
						public isAutoScalingDisabled(): java.lang.Boolean;
						public withMaximumUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate;
						public setMaximumUnits(param0: java.lang.Long): void;
						public withAutoScalingRoleArn(param0: string): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate;
						public getAutoScalingRoleArn(): string;
						public setAutoScalingRoleArn(param0: string): void;
						public withScalingPolicyUpdate(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyUpdate): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class AutoScalingTargetTrackingScalingPolicyConfigurationDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription>;
						public constructor();
						public setScaleOutCooldown(param0: java.lang.Integer): void;
						public withScaleOutCooldown(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
						public withScaleInCooldown(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTargetValue(): java.lang.Double;
						public withDisableScaleIn(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
						public getScaleOutCooldown(): java.lang.Integer;
						public withTargetValue(param0: java.lang.Double): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
						public toString(): string;
						public getDisableScaleIn(): java.lang.Boolean;
						public getScaleInCooldown(): java.lang.Integer;
						public isDisableScaleIn(): java.lang.Boolean;
						public setDisableScaleIn(param0: java.lang.Boolean): void;
						public setScaleInCooldown(param0: java.lang.Integer): void;
						public setTargetValue(param0: java.lang.Double): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class AutoScalingTargetTrackingScalingPolicyConfigurationUpdate {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate>;
						public constructor();
						public withDisableScaleIn(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
						public setScaleOutCooldown(param0: java.lang.Integer): void;
						public withScaleInCooldown(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTargetValue(): java.lang.Double;
						public getScaleOutCooldown(): java.lang.Integer;
						public withScaleOutCooldown(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
						public toString(): string;
						public getDisableScaleIn(): java.lang.Boolean;
						public getScaleInCooldown(): java.lang.Integer;
						public isDisableScaleIn(): java.lang.Boolean;
						public setDisableScaleIn(param0: java.lang.Boolean): void;
						public setScaleInCooldown(param0: java.lang.Integer): void;
						public setTargetValue(param0: java.lang.Double): void;
						public withTargetValue(param0: java.lang.Double): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BackupDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BackupDescription>;
						public withSourceTableFeatureDetails(param0: com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails): com.amazonaws.services.dynamodbv2.model.BackupDescription;
						public constructor();
						public getSourceTableFeatureDetails(): com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withSourceTableDetails(param0: com.amazonaws.services.dynamodbv2.model.SourceTableDetails): com.amazonaws.services.dynamodbv2.model.BackupDescription;
						public toString(): string;
						public setBackupDetails(param0: com.amazonaws.services.dynamodbv2.model.BackupDetails): void;
						public withBackupDetails(param0: com.amazonaws.services.dynamodbv2.model.BackupDetails): com.amazonaws.services.dynamodbv2.model.BackupDescription;
						public getBackupDetails(): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						public getSourceTableDetails(): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
						public setSourceTableFeatureDetails(param0: com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails): void;
						public setSourceTableDetails(param0: com.amazonaws.services.dynamodbv2.model.SourceTableDetails): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BackupDetails {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BackupDetails>;
						public setBackupSizeBytes(param0: java.lang.Long): void;
						public withBackupExpiryDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						public getBackupCreationDateTime(): java.util.Date;
						public withBackupType(param0: string): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setBackupCreationDateTime(param0: java.util.Date): void;
						public withBackupStatus(param0: string): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						public getBackupExpiryDateTime(): java.util.Date;
						public setBackupType(param0: com.amazonaws.services.dynamodbv2.model.BackupType): void;
						public getBackupArn(): string;
						public withBackupSizeBytes(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						public withBackupType(param0: com.amazonaws.services.dynamodbv2.model.BackupType): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						public withBackupName(param0: string): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						public setBackupStatus(param0: string): void;
						public constructor();
						public getBackupSizeBytes(): java.lang.Long;
						public setBackupType(param0: string): void;
						public setBackupArn(param0: string): void;
						public setBackupStatus(param0: com.amazonaws.services.dynamodbv2.model.BackupStatus): void;
						public getBackupName(): string;
						public withBackupStatus(param0: com.amazonaws.services.dynamodbv2.model.BackupStatus): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						public setBackupExpiryDateTime(param0: java.util.Date): void;
						public withBackupCreationDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						public toString(): string;
						public setBackupName(param0: string): void;
						public getBackupType(): string;
						public getBackupStatus(): string;
						public withBackupArn(param0: string): com.amazonaws.services.dynamodbv2.model.BackupDetails;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BackupInUseException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BackupInUseException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BackupNotFoundException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BackupNotFoundException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BackupStatus {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BackupStatus>;
						public static CREATING: com.amazonaws.services.dynamodbv2.model.BackupStatus;
						public static DELETED: com.amazonaws.services.dynamodbv2.model.BackupStatus;
						public static AVAILABLE: com.amazonaws.services.dynamodbv2.model.BackupStatus;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.BackupStatus>;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.BackupStatus;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.BackupStatus;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BackupSummary {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BackupSummary>;
						public setTableName(param0: string): void;
						public setBackupSizeBytes(param0: java.lang.Long): void;
						public getBackupCreationDateTime(): java.util.Date;
						public setTableId(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setBackupCreationDateTime(param0: java.util.Date): void;
						public getBackupExpiryDateTime(): java.util.Date;
						public setBackupType(param0: com.amazonaws.services.dynamodbv2.model.BackupType): void;
						public withBackupCreationDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public withTableId(param0: string): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public withBackupExpiryDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public withBackupType(param0: string): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public getBackupArn(): string;
						public withTableArn(param0: string): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public setBackupStatus(param0: string): void;
						public withBackupArn(param0: string): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public constructor();
						public getBackupSizeBytes(): java.lang.Long;
						public setBackupType(param0: string): void;
						public setBackupArn(param0: string): void;
						public withBackupType(param0: com.amazonaws.services.dynamodbv2.model.BackupType): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public setTableArn(param0: string): void;
						public getTableArn(): string;
						public withBackupStatus(param0: string): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public setBackupStatus(param0: com.amazonaws.services.dynamodbv2.model.BackupStatus): void;
						public getBackupName(): string;
						public setBackupExpiryDateTime(param0: java.util.Date): void;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public toString(): string;
						public withBackupStatus(param0: com.amazonaws.services.dynamodbv2.model.BackupStatus): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public getTableId(): string;
						public withBackupName(param0: string): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public withBackupSizeBytes(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						public setBackupName(param0: string): void;
						public getBackupType(): string;
						public getTableName(): string;
						public getBackupStatus(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BackupType {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BackupType>;
						public static USER: com.amazonaws.services.dynamodbv2.model.BackupType;
						public static SYSTEM: com.amazonaws.services.dynamodbv2.model.BackupType;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.BackupType;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.BackupType>;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.BackupType;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BackupTypeFilter {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BackupTypeFilter>;
						public static USER: com.amazonaws.services.dynamodbv2.model.BackupTypeFilter;
						public static SYSTEM: com.amazonaws.services.dynamodbv2.model.BackupTypeFilter;
						public static ALL: com.amazonaws.services.dynamodbv2.model.BackupTypeFilter;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.BackupTypeFilter;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.BackupTypeFilter>;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.BackupTypeFilter;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BatchGetItemRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest>;
						public addRequestItemsEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.KeysAndAttributes): com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest;
						public constructor();
						public constructor(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>, param1: string);
						public constructor(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>);
						public setReturnConsumedCapacity(param0: string): void;
						public withRequestItems(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>): com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest;
						public withReturnConsumedCapacity(param0: string): com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>, param1: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity);
						public toString(): string;
						public getReturnConsumedCapacity(): string;
						public setReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): void;
						public clearRequestItemsEntries(): com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest;
						public withReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest;
						public getRequestItems(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>;
						public setRequestItems(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BatchGetItemResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BatchGetItemResult>;
						public constructor();
						public setUnprocessedKeys(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>): void;
						public withUnprocessedKeys(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						public withConsumedCapacity(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ConsumedCapacity>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						public getResponses(): java.util.Map<string,java.util.List<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>>;
						public withConsumedCapacity(param0: native.Array<com.amazonaws.services.dynamodbv2.model.ConsumedCapacity>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withResponses(param0: java.util.Map<string,java.util.List<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						public toString(): string;
						public addResponsesEntry(param0: string, param1: java.util.List<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						public getConsumedCapacity(): java.util.List<com.amazonaws.services.dynamodbv2.model.ConsumedCapacity>;
						public setResponses(param0: java.util.Map<string,java.util.List<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>>): void;
						public getUnprocessedKeys(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>;
						public addUnprocessedKeysEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.KeysAndAttributes): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						public clearUnprocessedKeysEntries(): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
						public setConsumedCapacity(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ConsumedCapacity>): void;
						public clearResponsesEntries(): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BatchWriteItemRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest>;
						public constructor();
						public getRequestItems(): java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>;
						public setReturnConsumedCapacity(param0: string): void;
						public withReturnItemCollectionMetrics(param0: string): com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest;
						public clearRequestItemsEntries(): com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withReturnConsumedCapacity(param0: string): com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest;
						public withRequestItems(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest;
						public withReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest;
						public getReturnItemCollectionMetrics(): string;
						public setRequestItems(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): void;
						public setReturnItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics): void;
						public toString(): string;
						public getReturnConsumedCapacity(): string;
						public addRequestItemsEntry(param0: string, param1: java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest;
						public constructor(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>);
						public setReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): void;
						public setReturnItemCollectionMetrics(param0: string): void;
						public withReturnItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics): com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class BatchWriteItemResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult>;
						public constructor();
						public withUnprocessedItems(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						public addUnprocessedItemsEntry(param0: string, param1: java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						public clearUnprocessedItemsEntries(): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withItemCollectionMetrics(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics>>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						public toString(): string;
						public getConsumedCapacity(): java.util.List<com.amazonaws.services.dynamodbv2.model.ConsumedCapacity>;
						public withConsumedCapacity(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ConsumedCapacity>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						public addItemCollectionMetricsEntry(param0: string, param1: java.util.List<com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						public setItemCollectionMetrics(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics>>): void;
						public getUnprocessedItems(): java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>;
						public setUnprocessedItems(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): void;
						public getItemCollectionMetrics(): java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics>>;
						public setConsumedCapacity(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ConsumedCapacity>): void;
						public withConsumedCapacity(param0: native.Array<com.amazonaws.services.dynamodbv2.model.ConsumedCapacity>): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						public clearItemCollectionMetricsEntries(): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class Capacity {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.Capacity>;
						public constructor();
						public withCapacityUnits(param0: java.lang.Double): com.amazonaws.services.dynamodbv2.model.Capacity;
						public setCapacityUnits(param0: java.lang.Double): void;
						public getCapacityUnits(): java.lang.Double;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ComparisonOperator {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ComparisonOperator>;
						public static EQ: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static NE: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static IN: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static LE: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static LT: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static GE: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static GT: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static BETWEEN: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static NOT_NULL: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static NULL: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static CONTAINS: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static NOT_CONTAINS: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static BEGINS_WITH: com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.ComparisonOperator>;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.ComparisonOperator;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class Condition {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.Condition>;
						public withAttributeValueList(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.Condition;
						public constructor();
						public getComparisonOperator(): string;
						public getAttributeValueList(): java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setAttributeValueList(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public toString(): string;
						public withAttributeValueList(param0: native.Array<com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.Condition;
						public withComparisonOperator(param0: com.amazonaws.services.dynamodbv2.model.ComparisonOperator): com.amazonaws.services.dynamodbv2.model.Condition;
						public setComparisonOperator(param0: com.amazonaws.services.dynamodbv2.model.ComparisonOperator): void;
						public setComparisonOperator(param0: string): void;
						public withComparisonOperator(param0: string): com.amazonaws.services.dynamodbv2.model.Condition;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ConditionalCheckFailedException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ConditionalCheckFailedException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ConditionalOperator {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ConditionalOperator>;
						public static AND: com.amazonaws.services.dynamodbv2.model.ConditionalOperator;
						public static OR: com.amazonaws.services.dynamodbv2.model.ConditionalOperator;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.ConditionalOperator;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.ConditionalOperator>;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.ConditionalOperator;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ConsumedCapacity {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ConsumedCapacity>;
						public setTableName(param0: string): void;
						public constructor();
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public clearGlobalSecondaryIndexesEntries(): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public getCapacityUnits(): java.lang.Double;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public addLocalSecondaryIndexesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.Capacity): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public withLocalSecondaryIndexes(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Capacity>): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public withGlobalSecondaryIndexes(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Capacity>): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public withTable(param0: com.amazonaws.services.dynamodbv2.model.Capacity): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public toString(): string;
						public addGlobalSecondaryIndexesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.Capacity): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public withCapacityUnits(param0: java.lang.Double): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public getLocalSecondaryIndexes(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Capacity>;
						public setLocalSecondaryIndexes(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Capacity>): void;
						public setCapacityUnits(param0: java.lang.Double): void;
						public getGlobalSecondaryIndexes(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Capacity>;
						public getTable(): com.amazonaws.services.dynamodbv2.model.Capacity;
						public setGlobalSecondaryIndexes(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Capacity>): void;
						public getTableName(): string;
						public setTable(param0: com.amazonaws.services.dynamodbv2.model.Capacity): void;
						public clearLocalSecondaryIndexesEntries(): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ContinuousBackupsDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription>;
						public withPointInTimeRecoveryDescription(param0: com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription): com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription;
						public constructor();
						public getContinuousBackupsStatus(): string;
						public setContinuousBackupsStatus(param0: com.amazonaws.services.dynamodbv2.model.ContinuousBackupsStatus): void;
						public withContinuousBackupsStatus(param0: com.amazonaws.services.dynamodbv2.model.ContinuousBackupsStatus): com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setContinuousBackupsStatus(param0: string): void;
						public getPointInTimeRecoveryDescription(): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription;
						public withContinuousBackupsStatus(param0: string): com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription;
						public setPointInTimeRecoveryDescription(param0: com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ContinuousBackupsStatus {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ContinuousBackupsStatus>;
						public static ENABLED: com.amazonaws.services.dynamodbv2.model.ContinuousBackupsStatus;
						public static DISABLED: com.amazonaws.services.dynamodbv2.model.ContinuousBackupsStatus;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.ContinuousBackupsStatus;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.ContinuousBackupsStatus;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.ContinuousBackupsStatus>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ContinuousBackupsUnavailableException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ContinuousBackupsUnavailableException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class CreateBackupRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.CreateBackupRequest>;
						public setTableName(param0: string): void;
						public constructor();
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.CreateBackupRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withBackupName(param0: string): com.amazonaws.services.dynamodbv2.model.CreateBackupRequest;
						public getBackupName(): string;
						public setBackupName(param0: string): void;
						public getTableName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class CreateBackupResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.CreateBackupResult>;
						public setBackupDetails(param0: com.amazonaws.services.dynamodbv2.model.BackupDetails): void;
						public constructor();
						public withBackupDetails(param0: com.amazonaws.services.dynamodbv2.model.BackupDetails): com.amazonaws.services.dynamodbv2.model.CreateBackupResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getBackupDetails(): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class CreateGlobalSecondaryIndexAction {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction>;
						public constructor();
						public setKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): void;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): void;
						public toString(): string;
						public getProjection(): com.amazonaws.services.dynamodbv2.model.Projection;
						public setIndexName(param0: string): void;
						public getKeySchema(): java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public withKeySchema(param0: native.Array<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction;
						public setProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): void;
						public withProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction;
						public getProvisionedThroughput(): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
						public getIndexName(): string;
						public withKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction;
						public withProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class CreateGlobalTableRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest>;
						public withGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest;
						public withReplicationGroup(param0: native.Array<com.amazonaws.services.dynamodbv2.model.Replica>): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest;
						public constructor();
						public withReplicationGroup(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.Replica>): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest;
						public getReplicationGroup(): java.util.List<com.amazonaws.services.dynamodbv2.model.Replica>;
						public setReplicationGroup(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.Replica>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setGlobalTableName(param0: string): void;
						public getGlobalTableName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class CreateGlobalTableResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult>;
						public constructor();
						public setGlobalTableDescription(param0: com.amazonaws.services.dynamodbv2.model.GlobalTableDescription): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withGlobalTableDescription(param0: com.amazonaws.services.dynamodbv2.model.GlobalTableDescription): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult;
						public getGlobalTableDescription(): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class CreateReplicaAction {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.CreateReplicaAction>;
						public constructor();
						public withRegionName(param0: string): com.amazonaws.services.dynamodbv2.model.CreateReplicaAction;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getRegionName(): string;
						public setRegionName(param0: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class CreateTableRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.CreateTableRequest>;
						public setTableName(param0: string): void;
						public setKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): void;
						public withLocalSecondaryIndexes(param0: native.Array<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex>): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public withKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public getGlobalSecondaryIndexes(): java.util.List<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withSSESpecification(param0: com.amazonaws.services.dynamodbv2.model.SSESpecification): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public withGlobalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex>): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public getAttributeDefinitions(): java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>;
						public withAttributeDefinitions(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public getKeySchema(): java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public setLocalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex>): void;
						public getStreamSpecification(): com.amazonaws.services.dynamodbv2.model.StreamSpecification;
						public setProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): void;
						public getProvisionedThroughput(): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
						public getSSESpecification(): com.amazonaws.services.dynamodbv2.model.SSESpecification;
						public withStreamSpecification(param0: com.amazonaws.services.dynamodbv2.model.StreamSpecification): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public constructor();
						public constructor(param0: string, param1: java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>);
						public withAttributeDefinitions(param0: native.Array<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public setStreamSpecification(param0: com.amazonaws.services.dynamodbv2.model.StreamSpecification): void;
						public setAttributeDefinitions(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>): void;
						public withGlobalSecondaryIndexes(param0: native.Array<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex>): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public withLocalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex>): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public toString(): string;
						public withKeySchema(param0: native.Array<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public constructor(param0: java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>, param1: string, param2: java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>, param3: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput);
						public setGlobalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex>): void;
						public withProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public getLocalSecondaryIndexes(): java.util.List<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex>;
						public getTableName(): string;
						public setSSESpecification(param0: com.amazonaws.services.dynamodbv2.model.SSESpecification): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class CreateTableResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.CreateTableResult>;
						public constructor();
						public withTableDescription(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
						public setTableDescription(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): void;
						public getTableDescription(): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DeleteBackupRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest>;
						public constructor();
						public withBackupArn(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest;
						public setBackupArn(param0: string): void;
						public getBackupArn(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DeleteBackupResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DeleteBackupResult>;
						public withBackupDescription(param0: com.amazonaws.services.dynamodbv2.model.BackupDescription): com.amazonaws.services.dynamodbv2.model.DeleteBackupResult;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setBackupDescription(param0: com.amazonaws.services.dynamodbv2.model.BackupDescription): void;
						public getBackupDescription(): com.amazonaws.services.dynamodbv2.model.BackupDescription;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DeleteGlobalSecondaryIndexAction {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DeleteGlobalSecondaryIndexAction>;
						public setIndexName(param0: string): void;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIndexName(): string;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteGlobalSecondaryIndexAction;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DeleteItemRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DeleteItemRequest>;
						public getExpected(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>;
						public getExpressionAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public getReturnValues(): string;
						public getConditionExpression(): string;
						public equals(param0: any): boolean;
						public withReturnItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public withConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public setReturnItemCollectionMetrics(param0: string): void;
						public setKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public withConditionExpression(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public getConditionalOperator(): string;
						public addKeyEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public clearExpectedEntries(): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public withKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public constructor();
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>);
						public setExpected(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>): void;
						public clearExpressionAttributeValuesEntries(): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: com.amazonaws.services.dynamodbv2.model.ReturnValue);
						public withConditionalOperator(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public getReturnItemCollectionMetrics(): string;
						public toString(): string;
						public withReturnValues(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public withExpressionAttributeNames(param0: java.util.Map<string,string>): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public setReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): void;
						public getTableName(): string;
						public addExpressionAttributeValuesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string);
						public setTableName(param0: string): void;
						public setReturnValues(param0: com.amazonaws.services.dynamodbv2.model.ReturnValue): void;
						public hashCode(): number;
						public withReturnConsumedCapacity(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public withReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public setReturnItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics): void;
						public setReturnValues(param0: string): void;
						public withReturnItemCollectionMetrics(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public setConditionExpression(param0: string): void;
						public withReturnValues(param0: com.amazonaws.services.dynamodbv2.model.ReturnValue): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public clearExpressionAttributeNamesEntries(): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public setConditionalOperator(param0: string): void;
						public withExpected(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public setReturnConsumedCapacity(param0: string): void;
						public getKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public getReturnConsumedCapacity(): string;
						public setConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): void;
						public addExpectedEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public getExpressionAttributeNames(): java.util.Map<string,string>;
						public setExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public setExpressionAttributeNames(param0: java.util.Map<string,string>): void;
						public addExpressionAttributeNamesEntry(param0: string, param1: string): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
						public clearKeyEntries(): com.amazonaws.services.dynamodbv2.model.DeleteItemRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DeleteItemResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DeleteItemResult>;
						public constructor();
						public setItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getConsumedCapacity(): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public setAttributes(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public withAttributes(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						public toString(): string;
						public clearAttributesEntries(): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						public withItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						public withConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						public getAttributes(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public addAttributesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
						public getItemCollectionMetrics(): com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics;
						public setConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DeleteReplicaAction {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DeleteReplicaAction>;
						public constructor();
						public withRegionName(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteReplicaAction;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getRegionName(): string;
						public setRegionName(param0: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DeleteRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DeleteRequest>;
						public constructor();
						public constructor(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>);
						public clearKeyEntries(): com.amazonaws.services.dynamodbv2.model.DeleteRequest;
						public withKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.DeleteRequest;
						public setKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public addKeyEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.DeleteRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DeleteTableRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DeleteTableRequest>;
						public setTableName(param0: string): void;
						public constructor();
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.DeleteTableRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTableName(): string;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DeleteTableResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DeleteTableResult>;
						public constructor();
						public setTableDescription(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): void;
						public getTableDescription(): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public withTableDescription(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeBackupRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest>;
						public constructor();
						public setBackupArn(param0: string): void;
						public getBackupArn(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public withBackupArn(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeBackupResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeBackupResult>;
						public withBackupDescription(param0: com.amazonaws.services.dynamodbv2.model.BackupDescription): com.amazonaws.services.dynamodbv2.model.DescribeBackupResult;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setBackupDescription(param0: com.amazonaws.services.dynamodbv2.model.BackupDescription): void;
						public getBackupDescription(): com.amazonaws.services.dynamodbv2.model.BackupDescription;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeContinuousBackupsRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest>;
						public setTableName(param0: string): void;
						public constructor();
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTableName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeContinuousBackupsResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult>;
						public getContinuousBackupsDescription(): com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withContinuousBackupsDescription(param0: com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription): com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult;
						public setContinuousBackupsDescription(param0: com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeEndpointsRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeEndpointsResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withEndpoints(param0: native.Array<com.amazonaws.services.dynamodbv2.model.Endpoint>): com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult;
						public withEndpoints(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.Endpoint>): com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult;
						public getEndpoints(): java.util.List<com.amazonaws.services.dynamodbv2.model.Endpoint>;
						public toString(): string;
						public setEndpoints(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.Endpoint>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeGlobalTableRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest>;
						public withGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setGlobalTableName(param0: string): void;
						public getGlobalTableName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeGlobalTableResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult>;
						public constructor();
						public setGlobalTableDescription(param0: com.amazonaws.services.dynamodbv2.model.GlobalTableDescription): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withGlobalTableDescription(param0: com.amazonaws.services.dynamodbv2.model.GlobalTableDescription): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult;
						public getGlobalTableDescription(): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeGlobalTableSettingsRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest>;
						public withGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setGlobalTableName(param0: string): void;
						public getGlobalTableName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeGlobalTableSettingsResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult>;
						public constructor();
						public withGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult;
						public setReplicaSettings(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withReplicaSettings(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription>): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult;
						public setGlobalTableName(param0: string): void;
						public withReplicaSettings(param0: native.Array<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription>): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult;
						public getGlobalTableName(): string;
						public getReplicaSettings(): java.util.List<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeLimitsRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeLimitsResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult>;
						public withTableMaxReadCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
						public constructor();
						public setAccountMaxWriteCapacityUnits(param0: java.lang.Long): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withAccountMaxReadCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
						public getAccountMaxReadCapacityUnits(): java.lang.Long;
						public toString(): string;
						public setAccountMaxReadCapacityUnits(param0: java.lang.Long): void;
						public setTableMaxWriteCapacityUnits(param0: java.lang.Long): void;
						public setTableMaxReadCapacityUnits(param0: java.lang.Long): void;
						public getTableMaxReadCapacityUnits(): java.lang.Long;
						public getTableMaxWriteCapacityUnits(): java.lang.Long;
						public withTableMaxWriteCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
						public getAccountMaxWriteCapacityUnits(): java.lang.Long;
						public withAccountMaxWriteCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeTableRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeTableRequest>;
						public setTableName(param0: string): void;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeTableRequest;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTableName(): string;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeTableResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeTableResult>;
						public constructor();
						public getTable(): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setTable(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): void;
						public withTable(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeTimeToLiveRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest>;
						public setTableName(param0: string): void;
						public constructor();
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTableName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class DescribeTimeToLiveResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult>;
						public withTimeToLiveDescription(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription): com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setTimeToLiveDescription(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription): void;
						public getTimeToLiveDescription(): com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class Endpoint {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.Endpoint>;
						public constructor();
						public withCachePeriodInMinutes(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.Endpoint;
						public withAddress(param0: string): com.amazonaws.services.dynamodbv2.model.Endpoint;
						public setAddress(param0: string): void;
						public getCachePeriodInMinutes(): java.lang.Long;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setCachePeriodInMinutes(param0: java.lang.Long): void;
						public getAddress(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ExpectedAttributeValue {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>;
						public constructor();
						public getComparisonOperator(): string;
						public getAttributeValueList(): java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withAttributeValueList(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
						public isExists(): java.lang.Boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withComparisonOperator(param0: string): com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
						public setAttributeValueList(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public toString(): string;
						public getValue(): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public setValue(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): void;
						public constructor(param0: java.lang.Boolean);
						public getExists(): java.lang.Boolean;
						public withComparisonOperator(param0: com.amazonaws.services.dynamodbv2.model.ComparisonOperator): com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
						public setComparisonOperator(param0: com.amazonaws.services.dynamodbv2.model.ComparisonOperator): void;
						public withAttributeValueList(param0: native.Array<com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
						public constructor(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue);
						public withExists(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
						public setExists(param0: java.lang.Boolean): void;
						public setComparisonOperator(param0: string): void;
						public withValue(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GetItemRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GetItemRequest>;
						public setTableName(param0: string): void;
						public clearExpressionAttributeNamesEntries(): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public withKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public getConsistentRead(): java.lang.Boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withReturnConsumedCapacity(param0: string): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public getProjectionExpression(): string;
						public clearKeyEntries(): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public withReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public withProjectionExpression(param0: string): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public setConsistentRead(param0: java.lang.Boolean): void;
						public setKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public withConsistentRead(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public withAttributesToGet(param0: native.Array<string>): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public setProjectionExpression(param0: string): void;
						public constructor();
						public withExpressionAttributeNames(param0: java.util.Map<string,string>): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public addKeyEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public setReturnConsumedCapacity(param0: string): void;
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>);
						public getKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.lang.Boolean);
						public addExpressionAttributeNamesEntry(param0: string, param1: string): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public isConsistentRead(): java.lang.Boolean;
						public toString(): string;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
						public getReturnConsumedCapacity(): string;
						public getExpressionAttributeNames(): java.util.Map<string,string>;
						public setReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): void;
						public getAttributesToGet(): java.util.List<string>;
						public setExpressionAttributeNames(param0: java.util.Map<string,string>): void;
						public getTableName(): string;
						public setAttributesToGet(param0: java.util.Collection<string>): void;
						public withAttributesToGet(param0: java.util.Collection<string>): com.amazonaws.services.dynamodbv2.model.GetItemRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GetItemResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GetItemResult>;
						public constructor();
						public addItemEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						public setItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getItem(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						public withConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getConsumedCapacity(): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public clearItemEntries(): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						public setConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GlobalSecondaryIndex {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex>;
						public constructor();
						public setKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): void;
						public toString(): string;
						public getProjection(): com.amazonaws.services.dynamodbv2.model.Projection;
						public setIndexName(param0: string): void;
						public withKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex;
						public withProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex;
						public getKeySchema(): java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public withKeySchema(param0: native.Array<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex;
						public setProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): void;
						public getProvisionedThroughput(): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
						public getIndexName(): string;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex;
						public withProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GlobalSecondaryIndexDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription>;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
						public setKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription): void;
						public setIndexSizeBytes(param0: java.lang.Long): void;
						public getIndexSizeBytes(): java.lang.Long;
						public getProjection(): com.amazonaws.services.dynamodbv2.model.Projection;
						public withIndexArn(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
						public withKeySchema(param0: native.Array<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
						public setIndexArn(param0: string): void;
						public getKeySchema(): java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public getBackfilling(): java.lang.Boolean;
						public constructor();
						public withIndexStatus(param0: com.amazonaws.services.dynamodbv2.model.IndexStatus): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
						public withItemCount(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
						public withBackfilling(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
						public setIndexStatus(param0: string): void;
						public isBackfilling(): java.lang.Boolean;
						public getIndexStatus(): string;
						public setIndexStatus(param0: com.amazonaws.services.dynamodbv2.model.IndexStatus): void;
						public getIndexArn(): string;
						public setProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): void;
						public withKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
						public withProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
						public toString(): string;
						public getItemCount(): java.lang.Long;
						public setIndexName(param0: string): void;
						public setBackfilling(param0: java.lang.Boolean): void;
						public setItemCount(param0: java.lang.Long): void;
						public withProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
						public withIndexSizeBytes(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
						public getProvisionedThroughput(): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription;
						public getIndexName(): string;
						public withIndexStatus(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GlobalSecondaryIndexInfo {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo>;
						public withKeySchema(param0: native.Array<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo;
						public constructor();
						public setKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): void;
						public withProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo;
						public setProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): void;
						public toString(): string;
						public getProjection(): com.amazonaws.services.dynamodbv2.model.Projection;
						public setIndexName(param0: string): void;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo;
						public withProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo;
						public getKeySchema(): java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public setProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): void;
						public getProvisionedThroughput(): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
						public getIndexName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GlobalSecondaryIndexUpdate {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate>;
						public withUpdate(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalSecondaryIndexAction): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate;
						public constructor();
						public setUpdate(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalSecondaryIndexAction): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getDelete(): com.amazonaws.services.dynamodbv2.model.DeleteGlobalSecondaryIndexAction;
						public toString(): string;
						public getUpdate(): com.amazonaws.services.dynamodbv2.model.UpdateGlobalSecondaryIndexAction;
						public getCreate(): com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction;
						public withDelete(param0: com.amazonaws.services.dynamodbv2.model.DeleteGlobalSecondaryIndexAction): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate;
						public setCreate(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction): void;
						public withCreate(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate;
						public setDelete(param0: com.amazonaws.services.dynamodbv2.model.DeleteGlobalSecondaryIndexAction): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GlobalTable {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GlobalTable>;
						public constructor();
						public withGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalTable;
						public getReplicationGroup(): java.util.List<com.amazonaws.services.dynamodbv2.model.Replica>;
						public setReplicationGroup(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.Replica>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setGlobalTableName(param0: string): void;
						public getGlobalTableName(): string;
						public withReplicationGroup(param0: native.Array<com.amazonaws.services.dynamodbv2.model.Replica>): com.amazonaws.services.dynamodbv2.model.GlobalTable;
						public toString(): string;
						public withReplicationGroup(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.Replica>): com.amazonaws.services.dynamodbv2.model.GlobalTable;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GlobalTableAlreadyExistsException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GlobalTableAlreadyExistsException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GlobalTableDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GlobalTableDescription>;
						public constructor();
						public getCreationDateTime(): java.util.Date;
						public setCreationDateTime(param0: java.util.Date): void;
						public withReplicationGroup(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaDescription>): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
						public withGlobalTableArn(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withReplicationGroup(param0: native.Array<com.amazonaws.services.dynamodbv2.model.ReplicaDescription>): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
						public getGlobalTableArn(): string;
						public setGlobalTableName(param0: string): void;
						public setReplicationGroup(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaDescription>): void;
						public withGlobalTableStatus(param0: com.amazonaws.services.dynamodbv2.model.GlobalTableStatus): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
						public toString(): string;
						public setGlobalTableArn(param0: string): void;
						public getGlobalTableStatus(): string;
						public setGlobalTableStatus(param0: com.amazonaws.services.dynamodbv2.model.GlobalTableStatus): void;
						public withGlobalTableStatus(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
						public withCreationDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
						public withGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
						public getReplicationGroup(): java.util.List<com.amazonaws.services.dynamodbv2.model.ReplicaDescription>;
						public setGlobalTableStatus(param0: string): void;
						public getGlobalTableName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GlobalTableGlobalSecondaryIndexSettingsUpdate {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate>;
						public constructor();
						public withProvisionedWriteCapacityAutoScalingSettingsUpdate(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate): com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getProvisionedWriteCapacityAutoScalingSettingsUpdate(): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate;
						public setProvisionedWriteCapacityAutoScalingSettingsUpdate(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate): void;
						public toString(): string;
						public setIndexName(param0: string): void;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate;
						public withProvisionedWriteCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate;
						public setProvisionedWriteCapacityUnits(param0: java.lang.Long): void;
						public getProvisionedWriteCapacityUnits(): java.lang.Long;
						public getIndexName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GlobalTableNotFoundException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GlobalTableNotFoundException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class GlobalTableStatus {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.GlobalTableStatus>;
						public static CREATING: com.amazonaws.services.dynamodbv2.model.GlobalTableStatus;
						public static ACTIVE: com.amazonaws.services.dynamodbv2.model.GlobalTableStatus;
						public static DELETING: com.amazonaws.services.dynamodbv2.model.GlobalTableStatus;
						public static UPDATING: com.amazonaws.services.dynamodbv2.model.GlobalTableStatus;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalTableStatus;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.GlobalTableStatus;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.GlobalTableStatus>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class IndexNotFoundException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.IndexNotFoundException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class IndexStatus {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.IndexStatus>;
						public static CREATING: com.amazonaws.services.dynamodbv2.model.IndexStatus;
						public static UPDATING: com.amazonaws.services.dynamodbv2.model.IndexStatus;
						public static DELETING: com.amazonaws.services.dynamodbv2.model.IndexStatus;
						public static ACTIVE: com.amazonaws.services.dynamodbv2.model.IndexStatus;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.IndexStatus;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.IndexStatus>;
						public toString(): string;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.IndexStatus;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class InternalServerErrorException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.InternalServerErrorException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class InvalidRestoreTimeException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.InvalidRestoreTimeException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ItemCollectionMetrics {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics>;
						public constructor();
						public setItemCollectionKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public addItemCollectionKeyEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics;
						public withItemCollectionKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics;
						public clearItemCollectionKeyEntries(): com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public getSizeEstimateRangeGB(): java.util.List<java.lang.Double>;
						public setSizeEstimateRangeGB(param0: java.util.Collection<java.lang.Double>): void;
						public getItemCollectionKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withSizeEstimateRangeGB(param0: java.util.Collection<java.lang.Double>): com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics;
						public withSizeEstimateRangeGB(param0: native.Array<java.lang.Double>): com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ItemCollectionSizeLimitExceededException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ItemCollectionSizeLimitExceededException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class KeySchemaElement {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public constructor();
						public setKeyType(param0: string): void;
						public getAttributeName(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: com.amazonaws.services.dynamodbv2.model.KeyType);
						public toString(): string;
						public withKeyType(param0: string): com.amazonaws.services.dynamodbv2.model.KeySchemaElement;
						public withAttributeName(param0: string): com.amazonaws.services.dynamodbv2.model.KeySchemaElement;
						public constructor(param0: string, param1: string);
						public setKeyType(param0: com.amazonaws.services.dynamodbv2.model.KeyType): void;
						public setAttributeName(param0: string): void;
						public getKeyType(): string;
						public withKeyType(param0: com.amazonaws.services.dynamodbv2.model.KeyType): com.amazonaws.services.dynamodbv2.model.KeySchemaElement;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class KeyType {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.KeyType>;
						public static HASH: com.amazonaws.services.dynamodbv2.model.KeyType;
						public static RANGE: com.amazonaws.services.dynamodbv2.model.KeyType;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.KeyType;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.KeyType;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.KeyType>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class KeysAndAttributes {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.KeysAndAttributes>;
						public setProjectionExpression(param0: string): void;
						public constructor();
						public addExpressionAttributeNamesEntry(param0: string, param1: string): com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
						public getConsistentRead(): java.lang.Boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withConsistentRead(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
						public getProjectionExpression(): string;
						public clearExpressionAttributeNamesEntries(): com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
						public setKeys(param0: java.util.Collection<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>): void;
						public withProjectionExpression(param0: string): com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
						public isConsistentRead(): java.lang.Boolean;
						public withExpressionAttributeNames(param0: java.util.Map<string,string>): com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
						public toString(): string;
						public getExpressionAttributeNames(): java.util.Map<string,string>;
						public setConsistentRead(param0: java.lang.Boolean): void;
						public withKeys(param0: native.Array<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>): com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
						public withAttributesToGet(param0: java.util.Collection<string>): com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
						public getAttributesToGet(): java.util.List<string>;
						public setExpressionAttributeNames(param0: java.util.Map<string,string>): void;
						public withAttributesToGet(param0: native.Array<string>): com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
						public withKeys(param0: java.util.Collection<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>): com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
						public setAttributesToGet(param0: java.util.Collection<string>): void;
						public getKeys(): java.util.List<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class LimitExceededException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.LimitExceededException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ListBackupsRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ListBackupsRequest>;
						public setTableName(param0: string): void;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.ListBackupsRequest;
						public constructor();
						public getTimeRangeUpperBound(): java.util.Date;
						public setBackupType(param0: string): void;
						public setBackupType(param0: com.amazonaws.services.dynamodbv2.model.BackupTypeFilter): void;
						public withLimit(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListBackupsRequest;
						public withBackupType(param0: com.amazonaws.services.dynamodbv2.model.BackupTypeFilter): com.amazonaws.services.dynamodbv2.model.ListBackupsRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTimeRangeLowerBound(): java.util.Date;
						public setExclusiveStartBackupArn(param0: string): void;
						public withTimeRangeUpperBound(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.ListBackupsRequest;
						public withExclusiveStartBackupArn(param0: string): com.amazonaws.services.dynamodbv2.model.ListBackupsRequest;
						public toString(): string;
						public getLimit(): java.lang.Integer;
						public setTimeRangeUpperBound(param0: java.util.Date): void;
						public setLimit(param0: java.lang.Integer): void;
						public withTimeRangeLowerBound(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.ListBackupsRequest;
						public setTimeRangeLowerBound(param0: java.util.Date): void;
						public withBackupType(param0: string): com.amazonaws.services.dynamodbv2.model.ListBackupsRequest;
						public getExclusiveStartBackupArn(): string;
						public getBackupType(): string;
						public getTableName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ListBackupsResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ListBackupsResult>;
						public setBackupSummaries(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.BackupSummary>): void;
						public getBackupSummaries(): java.util.List<com.amazonaws.services.dynamodbv2.model.BackupSummary>;
						public constructor();
						public withBackupSummaries(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.BackupSummary>): com.amazonaws.services.dynamodbv2.model.ListBackupsResult;
						public withLastEvaluatedBackupArn(param0: string): com.amazonaws.services.dynamodbv2.model.ListBackupsResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setLastEvaluatedBackupArn(param0: string): void;
						public withBackupSummaries(param0: native.Array<com.amazonaws.services.dynamodbv2.model.BackupSummary>): com.amazonaws.services.dynamodbv2.model.ListBackupsResult;
						public getLastEvaluatedBackupArn(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ListGlobalTablesRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setRegionName(param0: string): void;
						public toString(): string;
						public getLimit(): java.lang.Integer;
						public setExclusiveStartGlobalTableName(param0: string): void;
						public setLimit(param0: java.lang.Integer): void;
						public getExclusiveStartGlobalTableName(): string;
						public withLimit(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest;
						public withExclusiveStartGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest;
						public getRegionName(): string;
						public withRegionName(param0: string): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ListGlobalTablesResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult>;
						public setLastEvaluatedGlobalTableName(param0: string): void;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setGlobalTables(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalTable>): void;
						public getLastEvaluatedGlobalTableName(): string;
						public withLastEvaluatedGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult;
						public getGlobalTables(): java.util.List<com.amazonaws.services.dynamodbv2.model.GlobalTable>;
						public withGlobalTables(param0: native.Array<com.amazonaws.services.dynamodbv2.model.GlobalTable>): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult;
						public withGlobalTables(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalTable>): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ListTablesRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ListTablesRequest>;
						public getLimit(): java.lang.Integer;
						public constructor();
						public setExclusiveStartTableName(param0: string): void;
						public constructor(param0: string, param1: java.lang.Integer);
						public setLimit(param0: java.lang.Integer): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withLimit(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ListTablesRequest;
						public withExclusiveStartTableName(param0: string): com.amazonaws.services.dynamodbv2.model.ListTablesRequest;
						public toString(): string;
						public constructor(param0: string);
						public getExclusiveStartTableName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ListTablesResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ListTablesResult>;
						public setTableNames(param0: java.util.Collection<string>): void;
						public constructor();
						public withTableNames(param0: native.Array<string>): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						public getLastEvaluatedTableName(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTableNames(): java.util.List<string>;
						public setLastEvaluatedTableName(param0: string): void;
						public withLastEvaluatedTableName(param0: string): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						public withTableNames(param0: java.util.Collection<string>): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ListTagsOfResourceRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest>;
						public setNextToken(param0: string): void;
						public constructor();
						public withResourceArn(param0: string): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest;
						public getResourceArn(): string;
						public setResourceArn(param0: string): void;
						public withNextToken(param0: string): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest;
						public getNextToken(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ListTagsOfResourceResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult>;
						public setTags(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.Tag>): void;
						public withTags(param0: native.Array<com.amazonaws.services.dynamodbv2.model.Tag>): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult;
						public setNextToken(param0: string): void;
						public constructor();
						public getTags(): java.util.List<com.amazonaws.services.dynamodbv2.model.Tag>;
						public withNextToken(param0: string): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult;
						public withTags(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.Tag>): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult;
						public getNextToken(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class LocalSecondaryIndex {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex>;
						public constructor();
						public setKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): void;
						public withKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): void;
						public toString(): string;
						public getProjection(): com.amazonaws.services.dynamodbv2.model.Projection;
						public setIndexName(param0: string): void;
						public withProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex;
						public getKeySchema(): java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public getIndexName(): string;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex;
						public withKeySchema(param0: native.Array<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class LocalSecondaryIndexDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription>;
						public constructor();
						public setKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): void;
						public withKeySchema(param0: native.Array<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription;
						public withIndexArn(param0: string): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setIndexSizeBytes(param0: java.lang.Long): void;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription;
						public getIndexArn(): string;
						public setProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): void;
						public getIndexSizeBytes(): java.lang.Long;
						public toString(): string;
						public getItemCount(): java.lang.Long;
						public getProjection(): com.amazonaws.services.dynamodbv2.model.Projection;
						public setIndexName(param0: string): void;
						public withIndexSizeBytes(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription;
						public setIndexArn(param0: string): void;
						public withItemCount(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription;
						public withProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription;
						public withKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription;
						public setItemCount(param0: java.lang.Long): void;
						public getKeySchema(): java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public getIndexName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class LocalSecondaryIndexInfo {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo>;
						public constructor();
						public withProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo;
						public setKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): void;
						public withKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setProjection(param0: com.amazonaws.services.dynamodbv2.model.Projection): void;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo;
						public withKeySchema(param0: native.Array<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo;
						public toString(): string;
						public getProjection(): com.amazonaws.services.dynamodbv2.model.Projection;
						public setIndexName(param0: string): void;
						public getKeySchema(): java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public getIndexName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class PointInTimeRecoveryDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription>;
						public getPointInTimeRecoveryStatus(): string;
						public setLatestRestorableDateTime(param0: java.util.Date): void;
						public constructor();
						public getLatestRestorableDateTime(): java.util.Date;
						public setPointInTimeRecoveryStatus(param0: string): void;
						public withEarliestRestorableDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withPointInTimeRecoveryStatus(param0: string): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription;
						public setEarliestRestorableDateTime(param0: java.util.Date): void;
						public toString(): string;
						public setPointInTimeRecoveryStatus(param0: com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryStatus): void;
						public withPointInTimeRecoveryStatus(param0: com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryStatus): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription;
						public getEarliestRestorableDateTime(): java.util.Date;
						public withLatestRestorableDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class PointInTimeRecoverySpecification {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.PointInTimeRecoverySpecification>;
						public getPointInTimeRecoveryEnabled(): java.lang.Boolean;
						public constructor();
						public isPointInTimeRecoveryEnabled(): java.lang.Boolean;
						public setPointInTimeRecoveryEnabled(param0: java.lang.Boolean): void;
						public withPointInTimeRecoveryEnabled(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoverySpecification;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class PointInTimeRecoveryStatus {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryStatus>;
						public static ENABLED: com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryStatus;
						public static DISABLED: com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryStatus;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryStatus>;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryStatus;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryStatus;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class PointInTimeRecoveryUnavailableException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryUnavailableException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class Projection {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.Projection>;
						public withProjectionType(param0: string): com.amazonaws.services.dynamodbv2.model.Projection;
						public constructor();
						public setProjectionType(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withNonKeyAttributes(param0: java.util.Collection<string>): com.amazonaws.services.dynamodbv2.model.Projection;
						public toString(): string;
						public setProjectionType(param0: com.amazonaws.services.dynamodbv2.model.ProjectionType): void;
						public withProjectionType(param0: com.amazonaws.services.dynamodbv2.model.ProjectionType): com.amazonaws.services.dynamodbv2.model.Projection;
						public getNonKeyAttributes(): java.util.List<string>;
						public withNonKeyAttributes(param0: native.Array<string>): com.amazonaws.services.dynamodbv2.model.Projection;
						public getProjectionType(): string;
						public setNonKeyAttributes(param0: java.util.Collection<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ProjectionType {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ProjectionType>;
						public static ALL: com.amazonaws.services.dynamodbv2.model.ProjectionType;
						public static KEYS_ONLY: com.amazonaws.services.dynamodbv2.model.ProjectionType;
						public static INCLUDE: com.amazonaws.services.dynamodbv2.model.ProjectionType;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.ProjectionType>;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.ProjectionType;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.ProjectionType;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ProvisionedThroughput {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput>;
						public withWriteCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
						public constructor();
						public withReadCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
						public getWriteCapacityUnits(): java.lang.Long;
						public setWriteCapacityUnits(param0: java.lang.Long): void;
						public setReadCapacityUnits(param0: java.lang.Long): void;
						public getReadCapacityUnits(): java.lang.Long;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.lang.Long, param1: java.lang.Long);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ProvisionedThroughputDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription>;
						public withWriteCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription;
						public constructor();
						public getLastIncreaseDateTime(): java.util.Date;
						public setWriteCapacityUnits(param0: java.lang.Long): void;
						public withLastIncreaseDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription;
						public getLastDecreaseDateTime(): java.util.Date;
						public setReadCapacityUnits(param0: java.lang.Long): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setLastDecreaseDateTime(param0: java.util.Date): void;
						public setNumberOfDecreasesToday(param0: java.lang.Long): void;
						public toString(): string;
						public getWriteCapacityUnits(): java.lang.Long;
						public getNumberOfDecreasesToday(): java.lang.Long;
						public withNumberOfDecreasesToday(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription;
						public withLastDecreaseDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription;
						public getReadCapacityUnits(): java.lang.Long;
						public withReadCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription;
						public setLastIncreaseDateTime(param0: java.util.Date): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ProvisionedThroughputExceededException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputExceededException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class PutItemRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.PutItemRequest>;
						public getExpected(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>;
						public getExpressionAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withConditionExpression(param0: string): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public getItem(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public getReturnValues(): string;
						public getConditionExpression(): string;
						public equals(param0: any): boolean;
						public setReturnItemCollectionMetrics(param0: string): void;
						public addExpectedEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public getConditionalOperator(): string;
						public withReturnValues(param0: string): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public clearExpectedEntries(): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public constructor();
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>);
						public setExpected(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>): void;
						public withReturnItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: com.amazonaws.services.dynamodbv2.model.ReturnValue);
						public withExpected(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public getReturnItemCollectionMetrics(): string;
						public toString(): string;
						public setReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): void;
						public clearExpressionAttributeNamesEntries(): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public getTableName(): string;
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: string);
						public setTableName(param0: string): void;
						public setReturnValues(param0: com.amazonaws.services.dynamodbv2.model.ReturnValue): void;
						public addExpressionAttributeNamesEntry(param0: string, param1: string): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public hashCode(): number;
						public withExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public withReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public setReturnItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics): void;
						public withConditionalOperator(param0: string): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public addItemEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public setReturnValues(param0: string): void;
						public setConditionExpression(param0: string): void;
						public setItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public addExpressionAttributeValuesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public clearItemEntries(): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public setConditionalOperator(param0: string): void;
						public withConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public clearExpressionAttributeValuesEntries(): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public withReturnItemCollectionMetrics(param0: string): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public setReturnConsumedCapacity(param0: string): void;
						public withReturnValues(param0: com.amazonaws.services.dynamodbv2.model.ReturnValue): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public getReturnConsumedCapacity(): string;
						public setConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): void;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public getExpressionAttributeNames(): java.util.Map<string,string>;
						public withReturnConsumedCapacity(param0: string): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public withExpressionAttributeNames(param0: java.util.Map<string,string>): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public withItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.PutItemRequest;
						public setExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public setExpressionAttributeNames(param0: java.util.Map<string,string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class PutItemResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.PutItemResult>;
						public withItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						public constructor();
						public withConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						public withAttributes(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						public setItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getConsumedCapacity(): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public setAttributes(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public toString(): string;
						public clearAttributesEntries(): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						public getAttributes(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public addAttributesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						public getItemCollectionMetrics(): com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics;
						public setConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class PutRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.PutRequest>;
						public constructor();
						public constructor(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>);
						public withItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.PutRequest;
						public addItemEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.PutRequest;
						public setItem(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getItem(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public clearItemEntries(): com.amazonaws.services.dynamodbv2.model.PutRequest;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class QueryRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.QueryRequest>;
						public withExpressionAttributeNames(param0: java.util.Map<string,string>): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public withReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public getScanIndexForward(): java.lang.Boolean;
						public getExpressionAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withScanIndexForward(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public equals(param0: any): boolean;
						public setScanIndexForward(param0: java.lang.Boolean): void;
						public withProjectionExpression(param0: string): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setKeyConditionExpression(param0: string): void;
						public setConsistentRead(param0: java.lang.Boolean): void;
						public clearQueryFilterEntries(): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setExclusiveStartKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getConditionalOperator(): string;
						public withFilterExpression(param0: string): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public withSelect(param0: string): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setProjectionExpression(param0: string): void;
						public constructor();
						public addKeyConditionsEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.Condition): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public getQueryFilter(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>;
						public withSelect(param0: com.amazonaws.services.dynamodbv2.model.Select): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public isConsistentRead(): java.lang.Boolean;
						public toString(): string;
						public withAttributesToGet(param0: java.util.Collection<string>): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public withReturnConsumedCapacity(param0: string): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public clearKeyConditionsEntries(): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): void;
						public addExpressionAttributeNamesEntry(param0: string, param1: string): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public withQueryFilter(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public getFilterExpression(): string;
						public getIndexName(): string;
						public setSelect(param0: com.amazonaws.services.dynamodbv2.model.Select): void;
						public clearExclusiveStartKeyEntries(): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setFilterExpression(param0: string): void;
						public getTableName(): string;
						public constructor(param0: string);
						public addQueryFilterEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.Condition): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public withKeyConditionExpression(param0: string): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setTableName(param0: string): void;
						public withConditionalOperator(param0: string): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public getConsistentRead(): java.lang.Boolean;
						public hashCode(): number;
						public setKeyConditions(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): void;
						public getProjectionExpression(): string;
						public withConsistentRead(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public withConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setQueryFilter(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): void;
						public getLimit(): java.lang.Integer;
						public isScanIndexForward(): java.lang.Boolean;
						public addExpressionAttributeValuesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setSelect(param0: string): void;
						public setLimit(param0: java.lang.Integer): void;
						public withLimit(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public withExclusiveStartKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public withAttributesToGet(param0: native.Array<string>): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public getSelect(): string;
						public setConditionalOperator(param0: string): void;
						public getExclusiveStartKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public clearExpressionAttributeValuesEntries(): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setReturnConsumedCapacity(param0: string): void;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public withExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setIndexName(param0: string): void;
						public getReturnConsumedCapacity(): string;
						public setConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): void;
						public addExclusiveStartKeyEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public getExpressionAttributeNames(): java.util.Map<string,string>;
						public getKeyConditions(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>;
						public getAttributesToGet(): java.util.List<string>;
						public setExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public withKeyConditions(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setExpressionAttributeNames(param0: java.util.Map<string,string>): void;
						public clearExpressionAttributeNamesEntries(): com.amazonaws.services.dynamodbv2.model.QueryRequest;
						public setAttributesToGet(param0: java.util.Collection<string>): void;
						public getKeyConditionExpression(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class QueryResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.QueryResult>;
						public withLastEvaluatedKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.QueryResult;
						public withScannedCount(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.QueryResult;
						public constructor();
						public getScannedCount(): java.lang.Integer;
						public getCount(): java.lang.Integer;
						public withCount(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.QueryResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getItems(): java.util.List<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>;
						public getConsumedCapacity(): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public withItems(param0: native.Array<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>): com.amazonaws.services.dynamodbv2.model.QueryResult;
						public setLastEvaluatedKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public setCount(param0: java.lang.Integer): void;
						public clearLastEvaluatedKeyEntries(): com.amazonaws.services.dynamodbv2.model.QueryResult;
						public setItems(param0: java.util.Collection<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>): void;
						public toString(): string;
						public getLastEvaluatedKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withItems(param0: java.util.Collection<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>): com.amazonaws.services.dynamodbv2.model.QueryResult;
						public setScannedCount(param0: java.lang.Integer): void;
						public addLastEvaluatedKeyEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.QueryResult;
						public withConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): com.amazonaws.services.dynamodbv2.model.QueryResult;
						public setConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class Replica {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.Replica>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getRegionName(): string;
						public withRegionName(param0: string): com.amazonaws.services.dynamodbv2.model.Replica;
						public setRegionName(param0: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReplicaAlreadyExistsException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReplicaAlreadyExistsException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReplicaDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReplicaDescription>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getRegionName(): string;
						public setRegionName(param0: string): void;
						public toString(): string;
						public withRegionName(param0: string): com.amazonaws.services.dynamodbv2.model.ReplicaDescription;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReplicaGlobalSecondaryIndexSettingsDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription>;
						public constructor();
						public setProvisionedReadCapacityAutoScalingSettings(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription): void;
						public withProvisionedReadCapacityAutoScalingSettings(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription;
						public withProvisionedReadCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription;
						public withProvisionedWriteCapacityAutoScalingSettings(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setIndexStatus(param0: string): void;
						public setProvisionedReadCapacityUnits(param0: java.lang.Long): void;
						public getIndexStatus(): string;
						public setIndexStatus(param0: com.amazonaws.services.dynamodbv2.model.IndexStatus): void;
						public toString(): string;
						public withIndexStatus(param0: string): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription;
						public getProvisionedWriteCapacityAutoScalingSettings(): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
						public setIndexName(param0: string): void;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription;
						public setProvisionedWriteCapacityAutoScalingSettings(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription): void;
						public getProvisionedReadCapacityAutoScalingSettings(): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
						public getProvisionedReadCapacityUnits(): java.lang.Long;
						public withProvisionedWriteCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription;
						public withIndexStatus(param0: com.amazonaws.services.dynamodbv2.model.IndexStatus): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription;
						public setProvisionedWriteCapacityUnits(param0: java.lang.Long): void;
						public getProvisionedWriteCapacityUnits(): java.lang.Long;
						public getIndexName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReplicaGlobalSecondaryIndexSettingsUpdate {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate>;
						public constructor();
						public withProvisionedReadCapacityAutoScalingSettingsUpdate(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setProvisionedReadCapacityUnits(param0: java.lang.Long): void;
						public withProvisionedReadCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate;
						public toString(): string;
						public setIndexName(param0: string): void;
						public getProvisionedReadCapacityAutoScalingSettingsUpdate(): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate;
						public getProvisionedReadCapacityUnits(): java.lang.Long;
						public setProvisionedReadCapacityAutoScalingSettingsUpdate(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate): void;
						public getIndexName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReplicaNotFoundException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReplicaNotFoundException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReplicaSettingsDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription>;
						public withReplicaStatus(param0: com.amazonaws.services.dynamodbv2.model.ReplicaStatus): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription;
						public getReplicaStatus(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getReplicaProvisionedWriteCapacityUnits(): java.lang.Long;
						public setReplicaProvisionedWriteCapacityAutoScalingSettings(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription): void;
						public setReplicaGlobalSecondaryIndexSettings(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription>): void;
						public setReplicaStatus(param0: string): void;
						public getReplicaProvisionedReadCapacityUnits(): java.lang.Long;
						public withReplicaStatus(param0: string): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription;
						public getRegionName(): string;
						public setReplicaStatus(param0: com.amazonaws.services.dynamodbv2.model.ReplicaStatus): void;
						public getReplicaProvisionedReadCapacityAutoScalingSettings(): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
						public withReplicaProvisionedReadCapacityAutoScalingSettings(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription;
						public constructor();
						public setReplicaProvisionedWriteCapacityUnits(param0: java.lang.Long): void;
						public setReplicaProvisionedReadCapacityUnits(param0: java.lang.Long): void;
						public withReplicaProvisionedWriteCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription;
						public getReplicaGlobalSecondaryIndexSettings(): java.util.List<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription>;
						public withReplicaGlobalSecondaryIndexSettings(param0: native.Array<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription>): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription;
						public withRegionName(param0: string): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription;
						public withReplicaProvisionedWriteCapacityAutoScalingSettings(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription;
						public setRegionName(param0: string): void;
						public toString(): string;
						public getReplicaProvisionedWriteCapacityAutoScalingSettings(): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
						public setReplicaProvisionedReadCapacityAutoScalingSettings(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription): void;
						public withReplicaProvisionedReadCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription;
						public withReplicaGlobalSecondaryIndexSettings(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription>): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReplicaSettingsUpdate {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate>;
						public constructor();
						public setReplicaProvisionedReadCapacityUnits(param0: java.lang.Long): void;
						public setReplicaGlobalSecondaryIndexSettingsUpdate(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withReplicaProvisionedReadCapacityAutoScalingSettingsUpdate(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate;
						public withReplicaGlobalSecondaryIndexSettingsUpdate(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate>): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate;
						public setRegionName(param0: string): void;
						public toString(): string;
						public withReplicaGlobalSecondaryIndexSettingsUpdate(param0: native.Array<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate>): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate;
						public setReplicaProvisionedReadCapacityAutoScalingSettingsUpdate(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate): void;
						public getReplicaGlobalSecondaryIndexSettingsUpdate(): java.util.List<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate>;
						public withRegionName(param0: string): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate;
						public getReplicaProvisionedReadCapacityUnits(): java.lang.Long;
						public withReplicaProvisionedReadCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate;
						public getRegionName(): string;
						public getReplicaProvisionedReadCapacityAutoScalingSettingsUpdate(): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReplicaStatus {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReplicaStatus>;
						public static CREATING: com.amazonaws.services.dynamodbv2.model.ReplicaStatus;
						public static UPDATING: com.amazonaws.services.dynamodbv2.model.ReplicaStatus;
						public static DELETING: com.amazonaws.services.dynamodbv2.model.ReplicaStatus;
						public static ACTIVE: com.amazonaws.services.dynamodbv2.model.ReplicaStatus;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.ReplicaStatus;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.ReplicaStatus;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.ReplicaStatus>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReplicaUpdate {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReplicaUpdate>;
						public withDelete(param0: com.amazonaws.services.dynamodbv2.model.DeleteReplicaAction): com.amazonaws.services.dynamodbv2.model.ReplicaUpdate;
						public constructor();
						public getCreate(): com.amazonaws.services.dynamodbv2.model.CreateReplicaAction;
						public getDelete(): com.amazonaws.services.dynamodbv2.model.DeleteReplicaAction;
						public withCreate(param0: com.amazonaws.services.dynamodbv2.model.CreateReplicaAction): com.amazonaws.services.dynamodbv2.model.ReplicaUpdate;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setDelete(param0: com.amazonaws.services.dynamodbv2.model.DeleteReplicaAction): void;
						public toString(): string;
						public setCreate(param0: com.amazonaws.services.dynamodbv2.model.CreateReplicaAction): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ResourceInUseException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ResourceInUseException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ResourceNotFoundException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ResourceNotFoundException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class RestoreSummary {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.RestoreSummary>;
						public constructor();
						public withSourceBackupArn(param0: string): com.amazonaws.services.dynamodbv2.model.RestoreSummary;
						public withRestoreInProgress(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.RestoreSummary;
						public withSourceTableArn(param0: string): com.amazonaws.services.dynamodbv2.model.RestoreSummary;
						public getRestoreDateTime(): java.util.Date;
						public setRestoreInProgress(param0: java.lang.Boolean): void;
						public getRestoreInProgress(): java.lang.Boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public isRestoreInProgress(): java.lang.Boolean;
						public withRestoreDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.RestoreSummary;
						public toString(): string;
						public getSourceBackupArn(): string;
						public setSourceTableArn(param0: string): void;
						public getSourceTableArn(): string;
						public setRestoreDateTime(param0: java.util.Date): void;
						public setSourceBackupArn(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class RestoreTableFromBackupRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest>;
						public withTargetTableName(param0: string): com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest;
						public constructor();
						public setBackupArn(param0: string): void;
						public getBackupArn(): string;
						public withBackupArn(param0: string): com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTargetTableName(): string;
						public setTargetTableName(param0: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class RestoreTableFromBackupResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult>;
						public constructor();
						public setTableDescription(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): void;
						public getTableDescription(): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public withTableDescription(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class RestoreTableToPointInTimeRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest>;
						public withSourceTableName(param0: string): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest;
						public constructor();
						public getRestoreDateTime(): java.util.Date;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public isUseLatestRestorableTime(): java.lang.Boolean;
						public setTargetTableName(param0: string): void;
						public toString(): string;
						public getUseLatestRestorableTime(): java.lang.Boolean;
						public withTargetTableName(param0: string): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest;
						public setUseLatestRestorableTime(param0: java.lang.Boolean): void;
						public getSourceTableName(): string;
						public setRestoreDateTime(param0: java.util.Date): void;
						public getTargetTableName(): string;
						public withRestoreDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest;
						public setSourceTableName(param0: string): void;
						public withUseLatestRestorableTime(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class RestoreTableToPointInTimeResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult>;
						public constructor();
						public setTableDescription(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): void;
						public getTableDescription(): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withTableDescription(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReturnConsumedCapacity {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity>;
						public static INDEXES: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity;
						public static TOTAL: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity;
						public static NONE: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity>;
						public toString(): string;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReturnItemCollectionMetrics {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics>;
						public static SIZE: com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics;
						public static NONE: com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics>;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ReturnValue {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ReturnValue>;
						public static NONE: com.amazonaws.services.dynamodbv2.model.ReturnValue;
						public static ALL_OLD: com.amazonaws.services.dynamodbv2.model.ReturnValue;
						public static UPDATED_OLD: com.amazonaws.services.dynamodbv2.model.ReturnValue;
						public static ALL_NEW: com.amazonaws.services.dynamodbv2.model.ReturnValue;
						public static UPDATED_NEW: com.amazonaws.services.dynamodbv2.model.ReturnValue;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.ReturnValue>;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.ReturnValue;
						public toString(): string;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.ReturnValue;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class SSEDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.SSEDescription>;
						public withSSEType(param0: string): com.amazonaws.services.dynamodbv2.model.SSEDescription;
						public withSSEType(param0: com.amazonaws.services.dynamodbv2.model.SSEType): com.amazonaws.services.dynamodbv2.model.SSEDescription;
						public constructor();
						public setSSEType(param0: com.amazonaws.services.dynamodbv2.model.SSEType): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getStatus(): string;
						public getKMSMasterKeyArn(): string;
						public toString(): string;
						public setStatus(param0: com.amazonaws.services.dynamodbv2.model.SSEStatus): void;
						public withKMSMasterKeyArn(param0: string): com.amazonaws.services.dynamodbv2.model.SSEDescription;
						public getSSEType(): string;
						public withStatus(param0: string): com.amazonaws.services.dynamodbv2.model.SSEDescription;
						public setSSEType(param0: string): void;
						public setKMSMasterKeyArn(param0: string): void;
						public setStatus(param0: string): void;
						public withStatus(param0: com.amazonaws.services.dynamodbv2.model.SSEStatus): com.amazonaws.services.dynamodbv2.model.SSEDescription;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class SSESpecification {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.SSESpecification>;
						public withEnabled(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.SSESpecification;
						public constructor();
						public setSSEType(param0: com.amazonaws.services.dynamodbv2.model.SSEType): void;
						public withSSEType(param0: string): com.amazonaws.services.dynamodbv2.model.SSESpecification;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getEnabled(): java.lang.Boolean;
						public isEnabled(): java.lang.Boolean;
						public withKMSMasterKeyId(param0: string): com.amazonaws.services.dynamodbv2.model.SSESpecification;
						public toString(): string;
						public getSSEType(): string;
						public getKMSMasterKeyId(): string;
						public setEnabled(param0: java.lang.Boolean): void;
						public setKMSMasterKeyId(param0: string): void;
						public setSSEType(param0: string): void;
						public withSSEType(param0: com.amazonaws.services.dynamodbv2.model.SSEType): com.amazonaws.services.dynamodbv2.model.SSESpecification;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class SSEStatus {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.SSEStatus>;
						public static ENABLING: com.amazonaws.services.dynamodbv2.model.SSEStatus;
						public static ENABLED: com.amazonaws.services.dynamodbv2.model.SSEStatus;
						public static DISABLING: com.amazonaws.services.dynamodbv2.model.SSEStatus;
						public static DISABLED: com.amazonaws.services.dynamodbv2.model.SSEStatus;
						public static UPDATING: com.amazonaws.services.dynamodbv2.model.SSEStatus;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.SSEStatus>;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.SSEStatus;
						public toString(): string;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.SSEStatus;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class SSEType {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.SSEType>;
						public static AES256: com.amazonaws.services.dynamodbv2.model.SSEType;
						public static KMS: com.amazonaws.services.dynamodbv2.model.SSEType;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.SSEType;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.SSEType;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.SSEType>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ScalarAttributeType {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ScalarAttributeType>;
						public static S: com.amazonaws.services.dynamodbv2.model.ScalarAttributeType;
						public static N: com.amazonaws.services.dynamodbv2.model.ScalarAttributeType;
						public static B: com.amazonaws.services.dynamodbv2.model.ScalarAttributeType;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.ScalarAttributeType>;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.ScalarAttributeType;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.ScalarAttributeType;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ScanRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ScanRequest>;
						public clearExclusiveStartKeyEntries(): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public getExpressionAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withAttributesToGet(param0: native.Array<string>): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public addScanFilterEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.Condition): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public equals(param0: any): boolean;
						public withExclusiveStartKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public withConsistentRead(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public addExpressionAttributeNamesEntry(param0: string, param1: string): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public clearExpressionAttributeNamesEntries(): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public withReturnConsumedCapacity(param0: string): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public setConsistentRead(param0: java.lang.Boolean): void;
						public setExclusiveStartKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getConditionalOperator(): string;
						public withReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public setProjectionExpression(param0: string): void;
						public constructor();
						public withExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public setSegment(param0: java.lang.Integer): void;
						public addExpressionAttributeValuesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public isConsistentRead(): java.lang.Boolean;
						public toString(): string;
						public getTotalSegments(): java.lang.Integer;
						public clearScanFilterEntries(): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public getScanFilter(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>;
						public setReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): void;
						public getSegment(): java.lang.Integer;
						public withConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public getFilterExpression(): string;
						public getIndexName(): string;
						public setSelect(param0: com.amazonaws.services.dynamodbv2.model.Select): void;
						public setFilterExpression(param0: string): void;
						public getTableName(): string;
						public withSegment(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public withConditionalOperator(param0: string): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public constructor(param0: string);
						public withSelect(param0: com.amazonaws.services.dynamodbv2.model.Select): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public setTableName(param0: string): void;
						public setScanFilter(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): void;
						public withTotalSegments(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public withScanFilter(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public withExpressionAttributeNames(param0: java.util.Map<string,string>): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public getConsistentRead(): java.lang.Boolean;
						public hashCode(): number;
						public getProjectionExpression(): string;
						public clearExpressionAttributeValuesEntries(): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public withSelect(param0: string): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public getLimit(): java.lang.Integer;
						public setLimit(param0: java.lang.Integer): void;
						public setSelect(param0: string): void;
						public withLimit(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public getSelect(): string;
						public setConditionalOperator(param0: string): void;
						public getExclusiveStartKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public setReturnConsumedCapacity(param0: string): void;
						public addExclusiveStartKeyEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public withFilterExpression(param0: string): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public setIndexName(param0: string): void;
						public withAttributesToGet(param0: java.util.Collection<string>): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public getReturnConsumedCapacity(): string;
						public setConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): void;
						public getExpressionAttributeNames(): java.util.Map<string,string>;
						public withProjectionExpression(param0: string): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public getAttributesToGet(): java.util.List<string>;
						public setExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.ScanRequest;
						public setExpressionAttributeNames(param0: java.util.Map<string,string>): void;
						public setTotalSegments(param0: java.lang.Integer): void;
						public setAttributesToGet(param0: java.util.Collection<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class ScanResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.ScanResult>;
						public constructor();
						public getScannedCount(): java.lang.Integer;
						public withLastEvaluatedKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.ScanResult;
						public getCount(): java.lang.Integer;
						public withItems(param0: native.Array<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>): com.amazonaws.services.dynamodbv2.model.ScanResult;
						public withCount(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ScanResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getItems(): java.util.List<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>;
						public getConsumedCapacity(): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public withConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): com.amazonaws.services.dynamodbv2.model.ScanResult;
						public setLastEvaluatedKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public clearLastEvaluatedKeyEntries(): com.amazonaws.services.dynamodbv2.model.ScanResult;
						public setCount(param0: java.lang.Integer): void;
						public setItems(param0: java.util.Collection<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>): void;
						public toString(): string;
						public getLastEvaluatedKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public setScannedCount(param0: java.lang.Integer): void;
						public withScannedCount(param0: java.lang.Integer): com.amazonaws.services.dynamodbv2.model.ScanResult;
						public withItems(param0: java.util.Collection<java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>>): com.amazonaws.services.dynamodbv2.model.ScanResult;
						public addLastEvaluatedKeyEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.ScanResult;
						public setConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class Select {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.Select>;
						public static ALL_ATTRIBUTES: com.amazonaws.services.dynamodbv2.model.Select;
						public static ALL_PROJECTED_ATTRIBUTES: com.amazonaws.services.dynamodbv2.model.Select;
						public static SPECIFIC_ATTRIBUTES: com.amazonaws.services.dynamodbv2.model.Select;
						public static COUNT: com.amazonaws.services.dynamodbv2.model.Select;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.Select;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.Select>;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.Select;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class SourceTableDetails {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.SourceTableDetails>;
						public setTableName(param0: string): void;
						public withItemCount(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
						public getTableSizeBytes(): java.lang.Long;
						public setKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): void;
						public setTableId(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
						public withTableSizeBytes(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
						public getKeySchema(): java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public setProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): void;
						public getProvisionedThroughput(): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
						public constructor();
						public withTableId(param0: string): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
						public withKeySchema(param0: native.Array<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
						public setTableArn(param0: string): void;
						public getTableArn(): string;
						public toString(): string;
						public getItemCount(): java.lang.Long;
						public setTableCreationDateTime(param0: java.util.Date): void;
						public withTableCreationDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
						public getTableId(): string;
						public withTableArn(param0: string): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
						public setTableSizeBytes(param0: java.lang.Long): void;
						public withKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
						public setItemCount(param0: java.lang.Long): void;
						public getTableCreationDateTime(): java.util.Date;
						public getTableName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class SourceTableFeatureDetails {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails>;
						public setGlobalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo>): void;
						public constructor();
						public setSSEDescription(param0: com.amazonaws.services.dynamodbv2.model.SSEDescription): void;
						public withLocalSecondaryIndexes(param0: native.Array<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo>): com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails;
						public getStreamDescription(): com.amazonaws.services.dynamodbv2.model.StreamSpecification;
						public getGlobalSecondaryIndexes(): java.util.List<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setStreamDescription(param0: com.amazonaws.services.dynamodbv2.model.StreamSpecification): void;
						public withStreamDescription(param0: com.amazonaws.services.dynamodbv2.model.StreamSpecification): com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails;
						public getSSEDescription(): com.amazonaws.services.dynamodbv2.model.SSEDescription;
						public withLocalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo>): com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails;
						public toString(): string;
						public withSSEDescription(param0: com.amazonaws.services.dynamodbv2.model.SSEDescription): com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails;
						public withGlobalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo>): com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails;
						public withGlobalSecondaryIndexes(param0: native.Array<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo>): com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails;
						public setTimeToLiveDescription(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription): void;
						public withTimeToLiveDescription(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription): com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails;
						public getTimeToLiveDescription(): com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription;
						public getLocalSecondaryIndexes(): java.util.List<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo>;
						public setLocalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class StreamSpecification {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.StreamSpecification>;
						public constructor();
						public withStreamEnabled(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.StreamSpecification;
						public getStreamViewType(): string;
						public setStreamEnabled(param0: java.lang.Boolean): void;
						public isStreamEnabled(): java.lang.Boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setStreamViewType(param0: string): void;
						public toString(): string;
						public withStreamViewType(param0: string): com.amazonaws.services.dynamodbv2.model.StreamSpecification;
						public withStreamViewType(param0: com.amazonaws.services.dynamodbv2.model.StreamViewType): com.amazonaws.services.dynamodbv2.model.StreamSpecification;
						public getStreamEnabled(): java.lang.Boolean;
						public setStreamViewType(param0: com.amazonaws.services.dynamodbv2.model.StreamViewType): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class StreamViewType {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.StreamViewType>;
						public static NEW_IMAGE: com.amazonaws.services.dynamodbv2.model.StreamViewType;
						public static OLD_IMAGE: com.amazonaws.services.dynamodbv2.model.StreamViewType;
						public static NEW_AND_OLD_IMAGES: com.amazonaws.services.dynamodbv2.model.StreamViewType;
						public static KEYS_ONLY: com.amazonaws.services.dynamodbv2.model.StreamViewType;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.StreamViewType;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.StreamViewType;
						public toString(): string;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.StreamViewType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class TableAlreadyExistsException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.TableAlreadyExistsException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class TableDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.TableDescription>;
						public withGlobalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription>): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public setKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): void;
						public getTableSizeBytes(): java.lang.Long;
						public setTableId(param0: string): void;
						public equals(param0: any): boolean;
						public withLatestStreamLabel(param0: string): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public getSSEDescription(): com.amazonaws.services.dynamodbv2.model.SSEDescription;
						public withTableId(param0: string): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public setLocalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription>): void;
						public getAttributeDefinitions(): java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>;
						public getGlobalSecondaryIndexes(): java.util.List<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription>;
						public withSSEDescription(param0: com.amazonaws.services.dynamodbv2.model.SSEDescription): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public withKeySchema(param0: native.Array<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public constructor();
						public getTableStatus(): string;
						public getCreationDateTime(): java.util.Date;
						public withRestoreSummary(param0: com.amazonaws.services.dynamodbv2.model.RestoreSummary): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public setTableArn(param0: string): void;
						public getTableArn(): string;
						public getLatestStreamArn(): string;
						public withLocalSecondaryIndexes(param0: native.Array<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription>): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public toString(): string;
						public getItemCount(): java.lang.Long;
						public getTableId(): string;
						public setTableSizeBytes(param0: java.lang.Long): void;
						public setTableStatus(param0: string): void;
						public getProvisionedThroughput(): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription;
						public getTableName(): string;
						public setTableName(param0: string): void;
						public withLatestStreamArn(param0: string): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public setSSEDescription(param0: com.amazonaws.services.dynamodbv2.model.SSEDescription): void;
						public setLatestStreamLabel(param0: string): void;
						public setCreationDateTime(param0: java.util.Date): void;
						public withLocalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription>): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public getLocalSecondaryIndexes(): java.util.List<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription>;
						public setTableStatus(param0: com.amazonaws.services.dynamodbv2.model.TableStatus): void;
						public withTableStatus(param0: string): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public hashCode(): number;
						public setProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription): void;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public withCreationDateTime(param0: java.util.Date): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public setGlobalSecondaryIndexes(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription>): void;
						public withAttributeDefinitions(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public withStreamSpecification(param0: com.amazonaws.services.dynamodbv2.model.StreamSpecification): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public withItemCount(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public withProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public getKeySchema(): java.util.List<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>;
						public withGlobalSecondaryIndexes(param0: native.Array<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription>): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public getStreamSpecification(): com.amazonaws.services.dynamodbv2.model.StreamSpecification;
						public withTableStatus(param0: com.amazonaws.services.dynamodbv2.model.TableStatus): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public setStreamSpecification(param0: com.amazonaws.services.dynamodbv2.model.StreamSpecification): void;
						public setRestoreSummary(param0: com.amazonaws.services.dynamodbv2.model.RestoreSummary): void;
						public withTableArn(param0: string): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public setAttributeDefinitions(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>): void;
						public withAttributeDefinitions(param0: native.Array<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public getLatestStreamLabel(): string;
						public setLatestStreamArn(param0: string): void;
						public getRestoreSummary(): com.amazonaws.services.dynamodbv2.model.RestoreSummary;
						public withKeySchema(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.KeySchemaElement>): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public withTableSizeBytes(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public setItemCount(param0: java.lang.Long): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class TableInUseException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.TableInUseException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class TableNotFoundException {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.TableNotFoundException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class TableStatus {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.TableStatus>;
						public static CREATING: com.amazonaws.services.dynamodbv2.model.TableStatus;
						public static UPDATING: com.amazonaws.services.dynamodbv2.model.TableStatus;
						public static DELETING: com.amazonaws.services.dynamodbv2.model.TableStatus;
						public static ACTIVE: com.amazonaws.services.dynamodbv2.model.TableStatus;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.TableStatus;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.TableStatus>;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.TableStatus;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class Tag {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.Tag>;
						public constructor();
						public setValue(param0: string): void;
						public withValue(param0: string): com.amazonaws.services.dynamodbv2.model.Tag;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getValue(): string;
						public getKey(): string;
						public setKey(param0: string): void;
						public toString(): string;
						public withKey(param0: string): com.amazonaws.services.dynamodbv2.model.Tag;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class TagResourceRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.TagResourceRequest>;
						public withResourceArn(param0: string): com.amazonaws.services.dynamodbv2.model.TagResourceRequest;
						public setTags(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.Tag>): void;
						public withTags(param0: native.Array<com.amazonaws.services.dynamodbv2.model.Tag>): com.amazonaws.services.dynamodbv2.model.TagResourceRequest;
						public constructor();
						public getTags(): java.util.List<com.amazonaws.services.dynamodbv2.model.Tag>;
						public getResourceArn(): string;
						public setResourceArn(param0: string): void;
						public withTags(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.Tag>): com.amazonaws.services.dynamodbv2.model.TagResourceRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class TimeToLiveDescription {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription>;
						public constructor();
						public getAttributeName(): string;
						public setTimeToLiveStatus(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveStatus): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTimeToLiveStatus(): string;
						public setTimeToLiveStatus(param0: string): void;
						public withAttributeName(param0: string): com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription;
						public withTimeToLiveStatus(param0: string): com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription;
						public withTimeToLiveStatus(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveStatus): com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription;
						public toString(): string;
						public setAttributeName(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class TimeToLiveSpecification {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification>;
						public withEnabled(param0: java.lang.Boolean): com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification;
						public constructor();
						public setEnabled(param0: java.lang.Boolean): void;
						public getAttributeName(): string;
						public withAttributeName(param0: string): com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getEnabled(): java.lang.Boolean;
						public isEnabled(): java.lang.Boolean;
						public toString(): string;
						public setAttributeName(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class TimeToLiveStatus {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.TimeToLiveStatus>;
						public static ENABLING: com.amazonaws.services.dynamodbv2.model.TimeToLiveStatus;
						public static DISABLING: com.amazonaws.services.dynamodbv2.model.TimeToLiveStatus;
						public static ENABLED: com.amazonaws.services.dynamodbv2.model.TimeToLiveStatus;
						public static DISABLED: com.amazonaws.services.dynamodbv2.model.TimeToLiveStatus;
						public static values(): native.Array<com.amazonaws.services.dynamodbv2.model.TimeToLiveStatus>;
						public static valueOf(param0: string): com.amazonaws.services.dynamodbv2.model.TimeToLiveStatus;
						public toString(): string;
						public static fromValue(param0: string): com.amazonaws.services.dynamodbv2.model.TimeToLiveStatus;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UntagResourceRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UntagResourceRequest>;
						public getTagKeys(): java.util.List<string>;
						public withTagKeys(param0: native.Array<string>): com.amazonaws.services.dynamodbv2.model.UntagResourceRequest;
						public constructor();
						public withResourceArn(param0: string): com.amazonaws.services.dynamodbv2.model.UntagResourceRequest;
						public getResourceArn(): string;
						public setResourceArn(param0: string): void;
						public setTagKeys(param0: java.util.Collection<string>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withTagKeys(param0: java.util.Collection<string>): com.amazonaws.services.dynamodbv2.model.UntagResourceRequest;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateContinuousBackupsRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest>;
						public setTableName(param0: string): void;
						public constructor();
						public getPointInTimeRecoverySpecification(): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoverySpecification;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setPointInTimeRecoverySpecification(param0: com.amazonaws.services.dynamodbv2.model.PointInTimeRecoverySpecification): void;
						public withPointInTimeRecoverySpecification(param0: com.amazonaws.services.dynamodbv2.model.PointInTimeRecoverySpecification): com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest;
						public getTableName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateContinuousBackupsResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult>;
						public getContinuousBackupsDescription(): com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setContinuousBackupsDescription(param0: com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription): void;
						public withContinuousBackupsDescription(param0: com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription): com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateGlobalSecondaryIndexAction {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateGlobalSecondaryIndexAction>;
						public setIndexName(param0: string): void;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withIndexName(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateGlobalSecondaryIndexAction;
						public withProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.UpdateGlobalSecondaryIndexAction;
						public setProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): void;
						public getProvisionedThroughput(): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
						public getIndexName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateGlobalTableRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest>;
						public constructor();
						public withGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest;
						public getReplicaUpdates(): java.util.List<com.amazonaws.services.dynamodbv2.model.ReplicaUpdate>;
						public withReplicaUpdates(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest;
						public withReplicaUpdates(param0: native.Array<com.amazonaws.services.dynamodbv2.model.ReplicaUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setGlobalTableName(param0: string): void;
						public getGlobalTableName(): string;
						public setReplicaUpdates(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaUpdate>): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateGlobalTableResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult>;
						public withGlobalTableDescription(param0: com.amazonaws.services.dynamodbv2.model.GlobalTableDescription): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult;
						public constructor();
						public setGlobalTableDescription(param0: com.amazonaws.services.dynamodbv2.model.GlobalTableDescription): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getGlobalTableDescription(): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateGlobalTableSettingsRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest>;
						public constructor();
						public withReplicaSettingsUpdate(param0: native.Array<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest;
						public getGlobalTableProvisionedWriteCapacityUnits(): java.lang.Long;
						public getGlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate(): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setGlobalTableName(param0: string): void;
						public setGlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate): void;
						public withGlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest;
						public withGlobalTableProvisionedWriteCapacityUnits(param0: java.lang.Long): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest;
						public toString(): string;
						public withGlobalTableGlobalSecondaryIndexSettingsUpdate(param0: native.Array<com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest;
						public withGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest;
						public setGlobalTableGlobalSecondaryIndexSettingsUpdate(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate>): void;
						public withReplicaSettingsUpdate(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest;
						public withGlobalTableGlobalSecondaryIndexSettingsUpdate(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest;
						public setGlobalTableProvisionedWriteCapacityUnits(param0: java.lang.Long): void;
						public getGlobalTableGlobalSecondaryIndexSettingsUpdate(): java.util.List<com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate>;
						public setReplicaSettingsUpdate(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate>): void;
						public getGlobalTableName(): string;
						public getReplicaSettingsUpdate(): java.util.List<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateGlobalTableSettingsResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult>;
						public withReplicaSettings(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription>): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult;
						public constructor();
						public setReplicaSettings(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setGlobalTableName(param0: string): void;
						public withReplicaSettings(param0: native.Array<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription>): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult;
						public getGlobalTableName(): string;
						public withGlobalTableName(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult;
						public getReplicaSettings(): java.util.List<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateItemRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateItemRequest>;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public getAttributeUpdates(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>;
						public getExpected(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>;
						public getExpressionAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public addKeyEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public getReturnValues(): string;
						public getConditionExpression(): string;
						public equals(param0: any): boolean;
						public withExpected(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public setAttributeUpdates(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>): void;
						public addExpectedEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public setReturnItemCollectionMetrics(param0: string): void;
						public setKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getConditionalOperator(): string;
						public addExpressionAttributeNamesEntry(param0: string, param1: string): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public withExpressionAttributeNames(param0: java.util.Map<string,string>): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public constructor();
						public setExpected(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>): void;
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>);
						public getReturnItemCollectionMetrics(): string;
						public withReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public withReturnItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public toString(): string;
						public withReturnValues(param0: com.amazonaws.services.dynamodbv2.model.ReturnValue): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public withReturnItemCollectionMetrics(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public setReturnConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ReturnConsumedCapacity): void;
						public clearExpressionAttributeNamesEntries(): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public withKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public getTableName(): string;
						public withAttributeUpdates(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public getUpdateExpression(): string;
						public setTableName(param0: string): void;
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>, param3: com.amazonaws.services.dynamodbv2.model.ReturnValue);
						public setReturnValues(param0: com.amazonaws.services.dynamodbv2.model.ReturnValue): void;
						public clearExpressionAttributeValuesEntries(): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public hashCode(): number;
						public withConditionalOperator(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public withReturnValues(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public setReturnItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ReturnItemCollectionMetrics): void;
						public clearKeyEntries(): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public setReturnValues(param0: string): void;
						public setConditionExpression(param0: string): void;
						public addExpressionAttributeValuesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public setConditionalOperator(param0: string): void;
						public withExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public setReturnConsumedCapacity(param0: string): void;
						public clearAttributeUpdatesEntries(): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public getKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withReturnConsumedCapacity(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public constructor(param0: string, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>, param3: string);
						public getReturnConsumedCapacity(): string;
						public setConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): void;
						public addAttributeUpdatesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public setUpdateExpression(param0: string): void;
						public withConditionExpression(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public getExpressionAttributeNames(): java.util.Map<string,string>;
						public withUpdateExpression(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public withConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
						public setExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public setExpressionAttributeNames(param0: java.util.Map<string,string>): void;
						public clearExpectedEntries(): com.amazonaws.services.dynamodbv2.model.UpdateItemRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateItemResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateItemResult>;
						public constructor();
						public setItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getConsumedCapacity(): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
						public setAttributes(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public toString(): string;
						public withConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						public withAttributes(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						public clearAttributesEntries(): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						public withItemCollectionMetrics(param0: com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						public getAttributes(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public getItemCollectionMetrics(): com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics;
						public setConsumedCapacity(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity): void;
						public addAttributesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateTableRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateTableRequest>;
						public setTableName(param0: string): void;
						public withAttributeDefinitions(param0: native.Array<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>): com.amazonaws.services.dynamodbv2.model.UpdateTableRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withStreamSpecification(param0: com.amazonaws.services.dynamodbv2.model.StreamSpecification): com.amazonaws.services.dynamodbv2.model.UpdateTableRequest;
						public withGlobalSecondaryIndexUpdates(param0: native.Array<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateTableRequest;
						public withSSESpecification(param0: com.amazonaws.services.dynamodbv2.model.SSESpecification): com.amazonaws.services.dynamodbv2.model.UpdateTableRequest;
						public withAttributeDefinitions(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>): com.amazonaws.services.dynamodbv2.model.UpdateTableRequest;
						public getAttributeDefinitions(): java.util.List<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>;
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateTableRequest;
						public getStreamSpecification(): com.amazonaws.services.dynamodbv2.model.StreamSpecification;
						public setProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): void;
						public getProvisionedThroughput(): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
						public getSSESpecification(): com.amazonaws.services.dynamodbv2.model.SSESpecification;
						public withProvisionedThroughput(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput): com.amazonaws.services.dynamodbv2.model.UpdateTableRequest;
						public constructor(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput);
						public constructor();
						public setStreamSpecification(param0: com.amazonaws.services.dynamodbv2.model.StreamSpecification): void;
						public setAttributeDefinitions(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.AttributeDefinition>): void;
						public toString(): string;
						public getGlobalSecondaryIndexUpdates(): java.util.List<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate>;
						public setGlobalSecondaryIndexUpdates(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate>): void;
						public withGlobalSecondaryIndexUpdates(param0: java.util.Collection<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate>): com.amazonaws.services.dynamodbv2.model.UpdateTableRequest;
						public getTableName(): string;
						public setSSESpecification(param0: com.amazonaws.services.dynamodbv2.model.SSESpecification): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateTableResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateTableResult>;
						public constructor();
						public setTableDescription(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): void;
						public getTableDescription(): com.amazonaws.services.dynamodbv2.model.TableDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withTableDescription(param0: com.amazonaws.services.dynamodbv2.model.TableDescription): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateTimeToLiveRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest>;
						public setTableName(param0: string): void;
						public setTimeToLiveSpecification(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification): void;
						public constructor();
						public withTableName(param0: string): com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getTableName(): string;
						public withTimeToLiveSpecification(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification): com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest;
						public toString(): string;
						public getTimeToLiveSpecification(): com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class UpdateTimeToLiveResult {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult>;
						public setTimeToLiveSpecification(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification): void;
						public constructor();
						public withTimeToLiveSpecification(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification): com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public getTimeToLiveSpecification(): com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export class WriteRequest {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.WriteRequest>;
						public getDeleteRequest(): com.amazonaws.services.dynamodbv2.model.DeleteRequest;
						public constructor();
						public constructor(param0: com.amazonaws.services.dynamodbv2.model.DeleteRequest);
						public withDeleteRequest(param0: com.amazonaws.services.dynamodbv2.model.DeleteRequest): com.amazonaws.services.dynamodbv2.model.WriteRequest;
						public setDeleteRequest(param0: com.amazonaws.services.dynamodbv2.model.DeleteRequest): void;
						public constructor(param0: com.amazonaws.services.dynamodbv2.model.PutRequest);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPutRequest(): com.amazonaws.services.dynamodbv2.model.PutRequest;
						public setPutRequest(param0: com.amazonaws.services.dynamodbv2.model.PutRequest): void;
						public withPutRequest(param0: com.amazonaws.services.dynamodbv2.model.PutRequest): com.amazonaws.services.dynamodbv2.model.WriteRequest;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AttributeDefinitionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AttributeDefinitionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AttributeDefinitionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeDefinition, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AttributeDefinitionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.AttributeDefinition,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AttributeDefinitionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.AttributeDefinition;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AttributeDefinitionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AttributeValueJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AttributeValueJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AttributeValueJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AttributeValueJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.AttributeValue,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AttributeValueJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AttributeValueJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AttributeValueUpdateJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AttributeValueUpdateJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AttributeValueUpdateJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AttributeValueUpdateJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AttributeValueUpdateJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AttributeValueUpdateJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingPolicyDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingPolicyDescriptionJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingPolicyDescriptionJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingPolicyDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingPolicyDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingPolicyDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingPolicyUpdateJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingPolicyUpdateJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyUpdate, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingPolicyUpdateJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingPolicyUpdateJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyUpdate,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingPolicyUpdateJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.AutoScalingPolicyUpdate;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingPolicyUpdateJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingSettingsDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingSettingsDescriptionJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingSettingsDescriptionJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingSettingsDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingSettingsDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingSettingsDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingSettingsUpdateJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingSettingsUpdateJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingSettingsUpdateJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingSettingsUpdateJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingSettingsUpdateJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.AutoScalingSettingsUpdate;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingSettingsUpdateJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingTargetTrackingScalingPolicyConfigurationDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingTargetTrackingScalingPolicyConfigurationDescriptionJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingTargetTrackingScalingPolicyConfigurationDescriptionJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingTargetTrackingScalingPolicyConfigurationDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingTargetTrackingScalingPolicyConfigurationDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingTargetTrackingScalingPolicyConfigurationDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingTargetTrackingScalingPolicyConfigurationUpdateJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingTargetTrackingScalingPolicyConfigurationUpdateJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingTargetTrackingScalingPolicyConfigurationUpdateJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class AutoScalingTargetTrackingScalingPolicyConfigurationUpdateJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.AutoScalingTargetTrackingScalingPolicyConfigurationUpdateJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.AutoScalingTargetTrackingScalingPolicyConfigurationUpdateJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BackupDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BackupDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.BackupDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.BackupDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BackupDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.BackupDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BackupDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.BackupDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.BackupDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BackupDetailsJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BackupDetailsJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.BackupDetailsJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.BackupDetails, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BackupDetailsJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.BackupDetails,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BackupDetailsJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.BackupDetailsJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.BackupDetails;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BackupInUseExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BackupInUseExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BackupNotFoundExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BackupNotFoundExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BackupSummaryJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BackupSummaryJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.BackupSummary, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.BackupSummaryJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BackupSummaryJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.BackupSummary,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BackupSummaryJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.BackupSummaryJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.BackupSummary;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BatchGetItemRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest>,com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BatchGetItemRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.BatchGetItemRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BatchGetItemResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.BatchGetItemResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BatchGetItemResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.BatchGetItemResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.BatchGetItemResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BatchWriteItemRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest>,com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BatchWriteItemRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.BatchWriteItemRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class BatchWriteItemResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.BatchWriteItemResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.BatchWriteItemResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.BatchWriteItemResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CapacityJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CapacityJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.CapacityJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.Capacity, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CapacityJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.Capacity,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CapacityJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.CapacityJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.Capacity;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ConditionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ConditionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ConditionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.Condition, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ConditionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.Condition,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ConditionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.Condition;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ConditionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ConditionalCheckFailedExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ConditionalCheckFailedExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ConsumedCapacityJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ConsumedCapacityJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ConsumedCapacityJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ConsumedCapacity, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ConsumedCapacityJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ConsumedCapacity,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ConsumedCapacityJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ConsumedCapacity;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ConsumedCapacityJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ContinuousBackupsDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ContinuousBackupsDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ContinuousBackupsDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ContinuousBackupsDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ContinuousBackupsDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ContinuousBackupsDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ContinuousBackupsDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ContinuousBackupsUnavailableExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ContinuousBackupsUnavailableExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CreateBackupRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.CreateBackupRequest>,com.amazonaws.services.dynamodbv2.model.CreateBackupRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CreateBackupRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.CreateBackupRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.CreateBackupRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CreateBackupResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.CreateBackupResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CreateBackupResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.CreateBackupResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.CreateBackupResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CreateGlobalSecondaryIndexActionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CreateGlobalSecondaryIndexActionJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.CreateGlobalSecondaryIndexActionJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CreateGlobalSecondaryIndexActionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CreateGlobalSecondaryIndexActionJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.CreateGlobalSecondaryIndexActionJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.CreateGlobalSecondaryIndexAction;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CreateGlobalTableRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest>,com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CreateGlobalTableRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CreateGlobalTableResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CreateGlobalTableResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.CreateGlobalTableResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.CreateGlobalTableResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CreateReplicaActionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CreateReplicaActionJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.CreateReplicaAction, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.CreateReplicaActionJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CreateReplicaActionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.CreateReplicaAction,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CreateReplicaActionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.CreateReplicaAction;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.CreateReplicaActionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CreateTableRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.CreateTableRequest>,com.amazonaws.services.dynamodbv2.model.CreateTableRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CreateTableRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.CreateTableRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.CreateTableRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class CreateTableResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.CreateTableResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.CreateTableResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.CreateTableResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.CreateTableResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteBackupRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest>,com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteBackupRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DeleteBackupRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteBackupResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DeleteBackupResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteBackupResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DeleteBackupResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DeleteBackupResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteGlobalSecondaryIndexActionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteGlobalSecondaryIndexActionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DeleteGlobalSecondaryIndexActionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DeleteGlobalSecondaryIndexAction, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteGlobalSecondaryIndexActionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DeleteGlobalSecondaryIndexAction,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteGlobalSecondaryIndexActionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DeleteGlobalSecondaryIndexAction;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DeleteGlobalSecondaryIndexActionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteItemRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DeleteItemRequest>,com.amazonaws.services.dynamodbv2.model.DeleteItemRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteItemRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DeleteItemRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DeleteItemRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteItemResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DeleteItemResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteItemResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DeleteItemResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DeleteItemResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteReplicaActionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteReplicaActionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DeleteReplicaActionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DeleteReplicaAction, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteReplicaActionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DeleteReplicaAction,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteReplicaActionJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DeleteReplicaActionJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DeleteReplicaAction;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteRequestJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteRequestJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DeleteRequest, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DeleteRequestJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteRequestJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DeleteRequest,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteRequestJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DeleteRequestJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DeleteRequest;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteTableRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DeleteTableRequest>,com.amazonaws.services.dynamodbv2.model.DeleteTableRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteTableRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DeleteTableRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DeleteTableRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DeleteTableResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DeleteTableResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DeleteTableResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DeleteTableResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DeleteTableResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeBackupRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest>,com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeBackupRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeBackupRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeBackupResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DescribeBackupResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeBackupResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DescribeBackupResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DescribeBackupResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeContinuousBackupsRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest>,com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeContinuousBackupsRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeContinuousBackupsResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeContinuousBackupsResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DescribeContinuousBackupsResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DescribeContinuousBackupsResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeEndpointsRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest>,com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeEndpointsRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeEndpointsResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeEndpointsResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DescribeEndpointsResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DescribeEndpointsResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeGlobalTableRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest>,com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeGlobalTableRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeGlobalTableResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeGlobalTableResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DescribeGlobalTableResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeGlobalTableSettingsRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest>,com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeGlobalTableSettingsRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeGlobalTableSettingsResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeGlobalTableSettingsResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DescribeGlobalTableSettingsResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DescribeGlobalTableSettingsResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeLimitsRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest>,com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeLimitsRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeLimitsRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeLimitsResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeLimitsResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DescribeLimitsResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DescribeLimitsResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeTableRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeTableRequest>,com.amazonaws.services.dynamodbv2.model.DescribeTableRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeTableRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DescribeTableRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeTableRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeTableResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DescribeTableResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeTableResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DescribeTableResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DescribeTableResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeTimeToLiveRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest>,com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeTimeToLiveRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class DescribeTimeToLiveResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.DescribeTimeToLiveResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.DescribeTimeToLiveResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.DescribeTimeToLiveResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class EndpointJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.EndpointJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.EndpointJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.Endpoint, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class EndpointJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.Endpoint,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.EndpointJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.EndpointJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.Endpoint;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ExpectedAttributeValueJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ExpectedAttributeValueJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ExpectedAttributeValueJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ExpectedAttributeValueJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ExpectedAttributeValueJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ExpectedAttributeValueJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GetItemRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.GetItemRequest>,com.amazonaws.services.dynamodbv2.model.GetItemRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GetItemRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.GetItemRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.GetItemRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GetItemResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.GetItemResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GetItemResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GetItemResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.GetItemResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalSecondaryIndexDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalSecondaryIndexDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalSecondaryIndexInfoJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexInfoJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexInfoJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalSecondaryIndexInfoJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexInfoJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexInfoJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexInfo;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalSecondaryIndexJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalSecondaryIndexJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndex;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalSecondaryIndexUpdateJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexUpdateJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexUpdateJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalSecondaryIndexUpdateJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexUpdateJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalSecondaryIndexUpdateJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.GlobalSecondaryIndexUpdate;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalTableAlreadyExistsExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalTableAlreadyExistsExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalTableDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalTableDescriptionJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.GlobalTableDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalTableDescriptionJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalTableDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.GlobalTableDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalTableDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.GlobalTableDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalTableDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalTableGlobalSecondaryIndexSettingsUpdateJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalTableGlobalSecondaryIndexSettingsUpdateJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalTableGlobalSecondaryIndexSettingsUpdateJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalTableGlobalSecondaryIndexSettingsUpdateJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalTableGlobalSecondaryIndexSettingsUpdateJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalTableGlobalSecondaryIndexSettingsUpdateJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.GlobalTableGlobalSecondaryIndexSettingsUpdate;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalTableJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalTableJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalTableJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.GlobalTable, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalTableJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.GlobalTable,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalTableJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.GlobalTableJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.GlobalTable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class GlobalTableNotFoundExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.GlobalTableNotFoundExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class IndexNotFoundExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.IndexNotFoundExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class InternalServerErrorExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.InternalServerErrorExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class InvalidRestoreTimeExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.InvalidRestoreTimeExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ItemCollectionMetricsJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ItemCollectionMetricsJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ItemCollectionMetricsJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ItemCollectionMetricsJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ItemCollectionMetricsJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ItemCollectionMetricsJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ItemCollectionMetrics;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ItemCollectionSizeLimitExceededExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ItemCollectionSizeLimitExceededExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class KeySchemaElementJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.KeySchemaElementJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.KeySchemaElement, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.KeySchemaElementJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class KeySchemaElementJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.KeySchemaElement,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.KeySchemaElementJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.KeySchemaElementJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.KeySchemaElement;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class KeysAndAttributesJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.KeysAndAttributesJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.KeysAndAttributesJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.KeysAndAttributes, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class KeysAndAttributesJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.KeysAndAttributes,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.KeysAndAttributesJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.KeysAndAttributesJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.KeysAndAttributes;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class LimitExceededExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.LimitExceededExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ListBackupsRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.ListBackupsRequest>,com.amazonaws.services.dynamodbv2.model.ListBackupsRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ListBackupsRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ListBackupsRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.ListBackupsRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ListBackupsResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ListBackupsResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ListBackupsResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ListBackupsResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ListBackupsResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ListGlobalTablesRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest>,com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ListGlobalTablesRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ListGlobalTablesResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ListGlobalTablesResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ListGlobalTablesResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ListGlobalTablesResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ListTablesRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.ListTablesRequest>,com.amazonaws.services.dynamodbv2.model.ListTablesRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ListTablesRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ListTablesRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.ListTablesRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ListTablesResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ListTablesResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ListTablesResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ListTablesResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ListTablesResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ListTagsOfResourceRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest>,com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ListTagsOfResourceRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ListTagsOfResourceResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ListTagsOfResourceResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ListTagsOfResourceResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ListTagsOfResourceResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class LocalSecondaryIndexDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class LocalSecondaryIndexDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexDescriptionJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexDescriptionJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexDescription;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class LocalSecondaryIndexInfoJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexInfoJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexInfoJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class LocalSecondaryIndexInfoJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexInfoJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndexInfo;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexInfoJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class LocalSecondaryIndexJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class LocalSecondaryIndexJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.LocalSecondaryIndexJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.LocalSecondaryIndex;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class PointInTimeRecoveryDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.PointInTimeRecoveryDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.PointInTimeRecoveryDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class PointInTimeRecoveryDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.PointInTimeRecoveryDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoveryDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.PointInTimeRecoveryDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class PointInTimeRecoverySpecificationJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.PointInTimeRecoverySpecificationJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.PointInTimeRecoverySpecification, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.PointInTimeRecoverySpecificationJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class PointInTimeRecoverySpecificationJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.PointInTimeRecoverySpecification,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.PointInTimeRecoverySpecificationJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.PointInTimeRecoverySpecificationJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.PointInTimeRecoverySpecification;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class PointInTimeRecoveryUnavailableExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.PointInTimeRecoveryUnavailableExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ProjectionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ProjectionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ProjectionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.Projection, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ProjectionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.Projection,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ProjectionJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ProjectionJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.Projection;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ProvisionedThroughputDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ProvisionedThroughputDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ProvisionedThroughputDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ProvisionedThroughputDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ProvisionedThroughputDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughputDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ProvisionedThroughputDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ProvisionedThroughputExceededExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ProvisionedThroughputExceededExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ProvisionedThroughputJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ProvisionedThroughputJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ProvisionedThroughputJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ProvisionedThroughputJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ProvisionedThroughputJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ProvisionedThroughputJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class PutItemRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.PutItemRequest>,com.amazonaws.services.dynamodbv2.model.PutItemRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.PutItemRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.PutItemRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.PutItemRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class PutItemResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.PutItemResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.PutItemResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.PutItemResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.PutItemResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class PutRequestJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.PutRequestJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.PutRequest, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.PutRequestJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class PutRequestJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.PutRequest,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.PutRequestJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.PutRequest;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.PutRequestJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class QueryRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.QueryRequest>,com.amazonaws.services.dynamodbv2.model.QueryRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.QueryRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.QueryRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.QueryRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class QueryResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.QueryResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.QueryResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.QueryResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.QueryResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaAlreadyExistsExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaAlreadyExistsExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ReplicaDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ReplicaDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaDescriptionJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaDescriptionJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ReplicaDescription;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaGlobalSecondaryIndexSettingsDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaGlobalSecondaryIndexSettingsDescriptionJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaGlobalSecondaryIndexSettingsDescriptionJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaGlobalSecondaryIndexSettingsDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaGlobalSecondaryIndexSettingsDescriptionJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaGlobalSecondaryIndexSettingsDescriptionJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsDescription;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaGlobalSecondaryIndexSettingsUpdateJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaGlobalSecondaryIndexSettingsUpdateJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaGlobalSecondaryIndexSettingsUpdateJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaGlobalSecondaryIndexSettingsUpdateJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaGlobalSecondaryIndexSettingsUpdateJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaGlobalSecondaryIndexSettingsUpdateJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ReplicaGlobalSecondaryIndexSettingsUpdate;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.Replica, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.Replica,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.Replica;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaNotFoundExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaNotFoundExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaSettingsDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaSettingsDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaSettingsDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaSettingsDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaSettingsDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaSettingsDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaSettingsUpdateJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaSettingsUpdateJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaSettingsUpdateJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaSettingsUpdateJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaSettingsUpdateJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ReplicaSettingsUpdate;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaSettingsUpdateJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaUpdateJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaUpdateJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ReplicaUpdate, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaUpdateJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ReplicaUpdateJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ReplicaUpdate,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ReplicaUpdateJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ReplicaUpdateJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ReplicaUpdate;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ResourceInUseExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ResourceInUseExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ResourceNotFoundExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ResourceNotFoundExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class RestoreSummaryJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.RestoreSummaryJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.RestoreSummaryJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.RestoreSummary, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class RestoreSummaryJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.RestoreSummary,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.RestoreSummaryJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.RestoreSummary;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.RestoreSummaryJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class RestoreTableFromBackupRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest>,com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.RestoreTableFromBackupRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class RestoreTableFromBackupResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.RestoreTableFromBackupResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.RestoreTableFromBackupResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.RestoreTableFromBackupResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class RestoreTableToPointInTimeRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest>,com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.RestoreTableToPointInTimeRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class RestoreTableToPointInTimeResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.RestoreTableToPointInTimeResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.RestoreTableToPointInTimeResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.RestoreTableToPointInTimeResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class SSEDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.SSEDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.SSEDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.SSEDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class SSEDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.SSEDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.SSEDescriptionJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.SSEDescriptionJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.SSEDescription;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class SSESpecificationJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.SSESpecificationJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.SSESpecification, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.SSESpecificationJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class SSESpecificationJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.SSESpecification,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.SSESpecificationJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.SSESpecification;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.SSESpecificationJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ScanRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.ScanRequest>,com.amazonaws.services.dynamodbv2.model.ScanRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ScanRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.ScanRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.ScanRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class ScanResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.ScanResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.ScanResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.ScanResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.ScanResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class SourceTableDetailsJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.SourceTableDetailsJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.SourceTableDetailsJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.SourceTableDetails, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class SourceTableDetailsJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.SourceTableDetails,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.SourceTableDetailsJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.SourceTableDetails;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.SourceTableDetailsJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class SourceTableFeatureDetailsJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.SourceTableFeatureDetailsJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.SourceTableFeatureDetailsJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class SourceTableFeatureDetailsJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.SourceTableFeatureDetailsJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.SourceTableFeatureDetails;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.SourceTableFeatureDetailsJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class StreamSpecificationJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.StreamSpecificationJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.StreamSpecification, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.StreamSpecificationJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class StreamSpecificationJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.StreamSpecification,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.StreamSpecificationJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.StreamSpecification;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.StreamSpecificationJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TableAlreadyExistsExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TableAlreadyExistsExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TableDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TableDescriptionJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.TableDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.TableDescriptionJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TableDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.TableDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TableDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.TableDescription;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.TableDescriptionJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TableInUseExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TableInUseExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TableNotFoundExceptionUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TableNotFoundExceptionUnmarshaller>;
							public constructor();
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TagJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TagJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.TagJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.Tag, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TagJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.Tag,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TagJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.Tag;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.TagJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TagResourceRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.TagResourceRequest>,com.amazonaws.services.dynamodbv2.model.TagResourceRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TagResourceRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.TagResourceRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.TagResourceRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TimeToLiveDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TimeToLiveDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.TimeToLiveDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TimeToLiveDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TimeToLiveDescriptionJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.TimeToLiveDescriptionJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.TimeToLiveDescription;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TimeToLiveSpecificationJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TimeToLiveSpecificationJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.TimeToLiveSpecificationJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class TimeToLiveSpecificationJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.TimeToLiveSpecificationJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.TimeToLiveSpecificationJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.TimeToLiveSpecification;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UntagResourceRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UntagResourceRequest>,com.amazonaws.services.dynamodbv2.model.UntagResourceRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UntagResourceRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.UntagResourceRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UntagResourceRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateContinuousBackupsRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest>,com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateContinuousBackupsRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateContinuousBackupsResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateContinuousBackupsResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.UpdateContinuousBackupsResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.UpdateContinuousBackupsResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateGlobalSecondaryIndexActionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateGlobalSecondaryIndexActionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.UpdateGlobalSecondaryIndexActionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalSecondaryIndexAction, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateGlobalSecondaryIndexActionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.UpdateGlobalSecondaryIndexAction,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateGlobalSecondaryIndexActionJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.UpdateGlobalSecondaryIndexActionJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.UpdateGlobalSecondaryIndexAction;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateGlobalTableRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest>,com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateGlobalTableRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateGlobalTableResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateGlobalTableResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.UpdateGlobalTableResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateGlobalTableSettingsRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest>,com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateGlobalTableSettingsRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateGlobalTableSettingsResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateGlobalTableSettingsResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.UpdateGlobalTableSettingsResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.UpdateGlobalTableSettingsResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateItemRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateItemRequest>,com.amazonaws.services.dynamodbv2.model.UpdateItemRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateItemRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.UpdateItemRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateItemRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateItemResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.UpdateItemResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateItemResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.UpdateItemResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateTableRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateTableRequest>,com.amazonaws.services.dynamodbv2.model.UpdateTableRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateTableRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.UpdateTableRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateTableRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateTableResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.UpdateTableResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateTableResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.UpdateTableResult;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.UpdateTableResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateTimeToLiveRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest>,com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateTimeToLiveRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest): com.amazonaws.Request<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class UpdateTimeToLiveResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.UpdateTimeToLiveResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.UpdateTimeToLiveResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.UpdateTimeToLiveResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class WriteRequestJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.WriteRequestJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.dynamodbv2.model.WriteRequest, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.WriteRequestJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module model {
					export module transform {
						export class WriteRequestJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.dynamodbv2.model.WriteRequest,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.model.transform.WriteRequestJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.dynamodbv2.model.transform.WriteRequestJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.dynamodbv2.model.WriteRequest;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module dynamodbv2 {
				export module util {
					export class Tables {
						public static class: java.lang.Class<com.amazonaws.services.dynamodbv2.util.Tables>;
						public constructor();
						public static waitForTableToBecomeActive(param0: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param1: string, param2: number, param3: number): void;
						public static doesTableExist(param0: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param1: string): boolean;
						public static waitForTableToBecomeActive(param0: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param1: string): void;
					}
				}
			}
		}
	}
}

//Generics information:


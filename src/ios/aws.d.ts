declare enum AWSRegionType{
    AWSRegionUnknown = 0,
    AWSRegionUSEast1 = 1,
    AWSRegionUSEast2 =2,
    AWSRegionUSWest1=3,
    AWSRegionUSWest2=4,
    AWSRegionEUWest1=5,
    AWSRegionEUWest2=6,
    AWSRegionEUCentral1=7,
    AWSRegionAPSoutheast1=8,
    AWSRegionAPNortheast1=9,
    AWSRegionAPNortheast2=10,
    AWSRegionAPSoutheast2=11,
    AWSRegionAPSouth1=12,
    AWSRegionSAEast1=13,
    AWSRegionCNNorth1=14,
    AWSRegionCACentral1=15,
    AWSRegionUSGovWest1=16
}

declare enum AWSDynamoDBAttributeAction{
    AWSDynamoDBAttributeActionUnknown = 0,
    AWSDynamoDBAttributeActionAdd = 1,
    AWSDynamoDBAttributeActionPut = 2,
    AWSDynamoDBAttributeActionDelete = 3
}
declare class AWSDynamoDB{
    static registerDynamoDBWithConfigurationForKey(configuration:AWSServiceConfiguration, key:String);
    putItem(input:AWSDynamoDBPutItemInput):AWSTask<AWSDynamoDBPutItemOutput>;
    getItem(input:AWSDynamoDBGetItemInput):AWSTask<AWSDynamoDBGetItemOutput>;
    deleteItem(input:AWSDynamoDBDeleteItemInput):AWSTask<AWSDynamoDBDeleteItemOutput>;
    updateItem(input:AWSDynamoDBUpdateItemInput):AWSTask<AWSDynamoDBUpdateItemOutput>;
    static DynamoDBForKey(key:String):AWSDynamoDB;
}

declare class AWSDynamoDBAttributeValue{
    static alloc():AWSDynamoDBAttributeValue;
    B:NSData;
    BOOLEAN:NSNumber;
    BS: any; 
    L:any;
    M:NSDictionary<NSString, AWSDynamoDBAttributeValue>;
    N:NSString;
    NS:any;
    NIL:NSNumber;
    S:NSString;
    SS:any;
}

declare class AWSDynamoDBExpectedAttributeValue{
    value:AWSDynamoDBAttributeValue;
}

declare class AWSDynamoDBAttributeValueUpdate{
    action:String;
    value:AWSDynamoDBAttributeValue;
}


declare class AWSCognitoCredentialsProvider{
    static alloc():AWSCognitoCredentialsProvider;
    initWithRegionTypeIdentityPoolId(region:AWSRegionType, identityPoolId:String);
}

declare class AWSServiceConfiguration{
    static alloc():AWSServiceConfiguration;
    public initWithRegionCredentialsProvider(awsRegionType:AWSRegionType, awsCredentialProvider:AWSCredentialProvider )
}

declare class AWSCredentialProvider{
    
}

declare class AWSDynamoDBGetItemOutput{
    item:any;
}

declare class AWSDynamoDBPutItemOutput{

}

declare class AWSDynamoDBDeleteItemOutput{

}

declare class AWSDynamoDBUpdateItemOutput{

}

declare class AWSDynamoDBPutItemInput{
    tableName:String;
    item:any;
}
declare class AWSDynamoDBGetItemInput{
    tableName:String;
    key:any;
}

declare class AWSDynamoDBDeleteItemInput{
    tableName:String;
    key:any;
}

declare class AWSDynamoDBUpdateItemInput{
    tableName:String;
    key:any;
    attributeUpdates:any;
}


declare interface AWSTask <T>{
    <T> (arg:T):T;
    error:NSError;
    result:any;
    continueWithBlock(block:any):AWSTask <T>;
}
import { Common } from './cognito.common';
export declare class AwsDcCognito extends Common {
    userPool: any;
    constructor(userPoolId: any, clientId: any, secret?: any, region?: Region);
    getCurrentUser(): any;
    private attributesFactory;
    signUp(userId: any, password: any, attributes: any): Promise<any>;
    confirmRegistration(userId: any, confirmationCode: any, forcedAliasCreation?: boolean): Promise<any>;
    resendCode(userId: any): Promise<any>;
    authenticate(userId: any, password: any): Promise<any>;
    forgotPassword(userId: any): Promise<any>;
    confirmForgotPassword(userId: string, code: string, newPassword: string): Promise<any>;
    changePassword(userId: any, oldPassword: any, newPassword: any): Promise<any>;
    getCurrentUserSession(): Promise<any>;
    deleteUser(userId: any): Promise<any>;
    getUserDetails(): Promise<any>;
    logout(): void;
    private static getSessionObject;
    private static getErrorObject;
    private static invokeOnRunLoop;
}
export declare enum Region {
    UNKNOWN = "Unknown",
    US_GOV_EAST_1 = "USGovWest1",
    US_EAST_1 = "USEast1",
    US_EAST_2 = "USEast2",
    US_WEST_1 = "USWest1",
    US_WEST_2 = "USWest2",
    EU_WEST_1 = "EUWest1",
    EU_WEST_2 = "EUWest2",
    EU_WEST_3 = "EUWest3",
    EU_CENTRAL_1 = "EUCentral1",
    EU_NORTH_1 = "EUNorth1",
    AP_SOUTH_1 = "APSouth1",
    AP_SOUTHEAST_1 = "APSoutheast1",
    AP_SOUTHEAST_2 = "APSoutheast2",
    AP_NORTHEAST_1 = "APNortheast1",
    AP_NORTHEAST_2 = "APNortheast2",
    SA_EAST_1 = "SAEast1",
    CA_CENTRAL_1 = "CACentral1",
    CN_NORTH_1 = "CNNorth1",
    CN_NORTHWEST_1 = "CNNorthWest1",
    DEFAULT_REGION = "DEFAULT_REGION"
}

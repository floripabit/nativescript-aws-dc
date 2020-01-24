import { Common } from './cognito.common';

export declare class AwsDcCognito extends Common {
    userPool: any;
    session: UserSession;
    forgotContinue: any;
    forgotSuccess: () => any;
    forgotFailure: (e: any) => any;
    constructor(userPoolId: any, clientId: any, secret?: any, region?: Region);
    getCurrentUser(): any;
    private attributesFactory;
    signUp(userId: any, password: any, attributes: any): Promise<any>;
    confirmRegistration(userId: any, confirmationCode: any, forcedAliasCreation?: boolean): Promise<any>;
    resendCode(userId: any): Promise<any>;
    authenticate(userId: any, password: any): Promise<any>;
    forgotPassword(userId: any): Promise<any>;
    confirmForgotPassword(userId: any, code: any, newPassword: any): Promise<any>;
    changePassword(userId: any, oldPassword: any, newPassword: any): Promise<any>;
    getCurrentUserSession(): Promise<any>;
    deleteUser(userId: any): Promise<any>;
    getUserDetails(): Promise<any>;
    logout(): void;
    private static getSessionObject;
    private static getErrorObject;
}
export declare enum Region {
    UNKNOWN = "Unknown",
    US_GOV_EAST_1 = "US_GOV_EAST_1",
    US_EAST_1 = "US_EAST_1",
    US_EAST_2 = "US_EAST_2",
    US_WEST_1 = "US_WEST_1",
    US_WEST_2 = "US_WEST_2",
    EU_WEST_1 = "EU_WEST_1",
    EU_WEST_2 = "EU_WEST_2",
    EU_WEST_3 = "EU_WEST_3",
    EU_CENTRAL_1 = "EU_CENTRAL_1",
    EU_NORTH_1 = "EU_NORTH_1",
    AP_SOUTH_1 = "AP_SOUTH_1",
    AP_SOUTHEAST_1 = "AP_SOUTHEAST_1",
    AP_SOUTHEAST_2 = "AP_SOUTHEAST_2",
    AP_NORTHEAST_1 = "AP_NORTHEAST_1",
    AP_NORTHEAST_2 = "AP_NORTHEAST_2",
    SA_EAST_1 = "SA_EAST_1",
    CA_CENTRAL_1 = "CA_CENTRAL_1",
    CN_NORTH_1 = "CN_NORTH_1",
    CN_NORTHWEST_1 = "CN_NORTHWEST_1",
    DEFAULT_REGION = "DEFAULT_REGION"
}

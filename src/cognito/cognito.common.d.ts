import { Observable } from 'tns-core-modules/data/observable';
export declare class Common extends Observable {
    constructor();
}
export declare class AccessToken {
    expiration: Date;
    token: string;
    username: string;
}
export declare class IdToken {
    expiration: Date;
    issuedAt: Date;
    token: string;
}
export declare class RefreshToken {
    token: string;
}
export declare class UserSession {
    accessToken: AccessToken;
    idToken: IdToken;
    refreshToken: RefreshToken;
    username: string;
    isValid: boolean;
    isValidForThreshold: boolean;
}
export declare class ErrorObject {
    code: string;
    message: string;
}
export declare class DetailAttributes {
    sub: any;
    email_verified: any;
    phone_number_verified: any;
    phone_number: any;
    given_name: any;
    family_name: any;
    nickname: any;
    email: any;
}
export declare class UserDetails {
    attributes: DetailAttributes;
    settings: any;
}

import { Observable } from 'tns-core-modules/data/observable';

export class Common extends Observable {
    constructor() {
        super();
    }
}

export class AccessToken {
    expiration: Date;
    token: string;
    username: string;
}
export class IdToken {
    expiration: Date;
    issuedAt: Date;
    token: string;
}
export class RefreshToken {
    token: string;
}
export class UserSession {
    accessToken: AccessToken;
    idToken: IdToken;
    refreshToken: RefreshToken;
    username: string;
    isValid: boolean;
    isValidForThreshold: boolean;
}
export class ErrorObject {
    code: string;
    message: string;
}
export class DetailAttributes {
    sub: any;
    email_verified: any;
    phone_number_verified: any;
    phone_number: any;
    given_name: any;
    family_name: any;
    nickname: any;
    email: any;
}
export class UserDetails {
    attributes: DetailAttributes;
    settings: any;
}

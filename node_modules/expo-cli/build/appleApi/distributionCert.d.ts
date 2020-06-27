import { AppleCtx } from './authenticate';
export declare type DistCertInfo = {
    id: string;
    name: string;
    status: string;
    created: number;
    expires: number;
    ownerType: string;
    ownerName: string;
    ownerId: string;
    serialNumber: string;
};
export declare type DistCert = {
    certId?: string;
    certP12: string;
    certPassword: string;
    certPrivateSigningKey?: string;
    distCertSerialNumber?: string;
    teamId: string;
    teamName?: string;
};
export declare function isDistCert(obj: {
    [key: string]: any;
}): obj is DistCert;
export declare class DistCertManager {
    ctx: AppleCtx;
    constructor(appleCtx: AppleCtx);
    list(): Promise<DistCertInfo[]>;
    create(): Promise<DistCert>;
    revoke(ids: string[]): Promise<void>;
    format({ name, id, status, expires, created, ownerName }: DistCertInfo): string;
}

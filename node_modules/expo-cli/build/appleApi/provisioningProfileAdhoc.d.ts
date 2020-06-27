import { AppleCtx } from './authenticate';
import { ProvisioningProfile } from './provisioningProfile';
export declare class ProvisioningProfileAdhocManager {
    ctx: AppleCtx;
    constructor(appleCtx: AppleCtx);
    createOrReuse(udids: string[], bundleIdentifier: string, distCertSerialNumber: string): Promise<ProvisioningProfile>;
}

import { ExpoConfig, Platform } from '@expo/config';
export declare type PlatformOptions = {
    id?: string;
    path?: string;
    url?: string;
};
export default class BaseUploader {
    platform: Platform;
    projectDir: string;
    options: PlatformOptions;
    _exp?: ExpoConfig;
    fastlane: {
        [key: string]: string;
    };
    constructor(platform: Platform, projectDir: string, options: PlatformOptions);
    upload(): Promise<void>;
    _getProjectConfig(): Promise<void>;
    _getBinaryFilePath(): Promise<string>;
    _downloadBuildById(id: string): Promise<string>;
    _getSlug(): string;
    _getOwner(): string | undefined;
    _downloadLastestBuild(): Promise<string>;
    _downloadBuild(urlOrPath: string): Promise<string>;
    _removeBuildFileIfDownloaded(buildPath: string): Promise<void>;
    _ensureExperienceIsValid(exp: ExpoConfig): void;
    _getPlatformSpecificOptions(): Promise<{
        [key: string]: any;
    }>;
    _uploadToTheStore(platformData: PlatformOptions, buildPath: string): Promise<void>;
}

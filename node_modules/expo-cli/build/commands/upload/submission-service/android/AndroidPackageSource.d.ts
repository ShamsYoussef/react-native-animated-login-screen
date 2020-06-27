declare enum AndroidPackageSourceType {
    userDefined = 0,
    prompt = 1
}
interface AndroidPackageSourceBase {
    sourceType: AndroidPackageSourceType;
}
interface AndroidPackageUserDefinedSource extends AndroidPackageSourceBase {
    sourceType: AndroidPackageSourceType.userDefined;
    androidPackage: string;
}
interface AndroidPackagePromptSource extends AndroidPackageSourceBase {
    sourceType: AndroidPackageSourceType.prompt;
}
export declare type AndroidPackageSource = AndroidPackageUserDefinedSource | AndroidPackagePromptSource;
declare function getAndroidPackageAsync(source: AndroidPackageSource): Promise<any>;
export { AndroidPackageSourceType, getAndroidPackageAsync };

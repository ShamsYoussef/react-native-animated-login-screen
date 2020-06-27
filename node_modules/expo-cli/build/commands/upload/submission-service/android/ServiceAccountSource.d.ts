declare enum ServiceAccountSourceType {
    path = 0,
    prompt = 1
}
interface ServiceAccountSourceBase {
    sourceType: ServiceAccountSourceType;
}
interface ServiceAccountPathSource extends ServiceAccountSourceBase {
    sourceType: ServiceAccountSourceType.path;
    path: string;
}
interface ServiceAccountPromptSource extends ServiceAccountSourceBase {
    sourceType: ServiceAccountSourceType.prompt;
}
export declare type ServiceAccountSource = ServiceAccountPathSource | ServiceAccountPromptSource;
declare function getServiceAccountAsync(source: ServiceAccountSource): Promise<string>;
export { ServiceAccountSourceType, getServiceAccountAsync };

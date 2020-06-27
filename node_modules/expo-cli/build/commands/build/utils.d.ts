export declare function checkIfSdkIsSupported(sdkVersion: string, platform: 'android' | 'ios'): Promise<void>;
export declare function askBuildType<T extends string>(typeFromFlag: T, availableTypes: Record<T, string>): Promise<T>;

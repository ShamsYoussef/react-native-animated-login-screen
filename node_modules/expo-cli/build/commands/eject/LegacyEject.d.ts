export declare type EjectAsyncOptions = {
    ejectMethod: 'bare' | 'expokit' | 'cancel';
    verbose?: boolean;
    force?: boolean;
    packageManager?: 'npm' | 'yarn';
};
export declare function ejectAsync(projectRoot: string, options: EjectAsyncOptions): Promise<void>;
export declare function stripDashes(s: string): string;

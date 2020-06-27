export declare function findProjectRootAsync(base: string): Promise<{
    projectRoot: string;
    workflow: 'managed' | 'bare';
}>;
export declare function usesOldExpoUpdatesAsync(projectRoot: string): Promise<boolean>;
export declare function validateGitStatusAsync(): Promise<boolean>;

export interface SubmissionContext<T extends SubmitCommandOptions> {
    projectDir: string;
    commandOptions: T;
    mode: SubmissionMode;
}
export interface SubmitCommandOptions {
    latest?: boolean;
    id?: string;
    path?: string;
    url?: string;
    verbose?: boolean;
    useSubmissionService?: boolean;
}
declare enum SubmissionMode {
    online = "online",
    offline = "offline"
}
export { SubmissionMode };

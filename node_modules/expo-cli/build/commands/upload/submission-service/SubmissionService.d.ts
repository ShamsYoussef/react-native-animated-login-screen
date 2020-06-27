import { Platform, StartSubmissionResult, Submission, SubmissionConfig } from './SubmissionService.types';
declare const SubmissionService: {
    startSubmissionAsync: typeof startSubmissionAsync;
    getSubmissionAsync: typeof getSubmissionAsync;
};
declare const DEFAULT_CHECK_INTERVAL_MS: number;
declare function startSubmissionAsync(platform: Platform, projectId: string, config: SubmissionConfig): Promise<StartSubmissionResult>;
declare function getSubmissionAsync(projectId: string, submissionId: string): Promise<Submission>;
export default SubmissionService;
export { DEFAULT_CHECK_INTERVAL_MS };

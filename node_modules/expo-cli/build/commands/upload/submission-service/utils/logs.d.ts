import { Submission, SubmissionStatus } from '../SubmissionService.types';
declare function displayLogs(submission: Submission | null, status: SubmissionStatus | null, verbose: boolean): Promise<void>;
export { displayLogs };

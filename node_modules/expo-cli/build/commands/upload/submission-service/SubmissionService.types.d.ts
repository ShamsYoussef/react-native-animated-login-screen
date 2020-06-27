import { AndroidSubmissionConfig } from './android/AndroidSubmissionConfig';
export interface Submission {
    id: string;
    accountId: string;
    userId: string;
    platform: Platform;
    status: SubmissionStatus;
    submissionInfo?: SubmissionInfo;
    createdAt: Date;
    updatedAt: Date;
}
declare enum Platform {
    IOS = "ios",
    ANDROID = "android"
}
declare enum SubmissionStatus {
    IN_QUEUE = "in-queue",
    IN_PROGRESS = "in-progress",
    FINISHED = "finished",
    ERRORED = "errored"
}
interface SubmissionInfo {
    logsUrl?: string;
    error?: SubmissionError;
}
export interface SubmissionError {
    errorCode: string;
    message: string;
}
export declare type SubmissionConfig = AndroidSubmissionConfig;
export declare type StartSubmissionResult = string;
export { Platform, SubmissionStatus };

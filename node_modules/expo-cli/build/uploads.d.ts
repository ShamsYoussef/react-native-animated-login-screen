import { Progress } from 'got';
declare enum UploadType {
    TURTLE_PROJECT_SOURCES = "turtle-project-sources",
    SUBMISSION_APP_ARCHIVE = "submission-app-archive"
}
declare type ProgressHandler = (progress: Progress) => void;
declare function uploadAsync(uploadType: UploadType, path: string, handleProgressEvent?: ProgressHandler): Promise<string>;
export { uploadAsync, UploadType };

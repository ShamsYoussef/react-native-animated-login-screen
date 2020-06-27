import { Platform } from '@expo/config';
import { SubmissionMode } from '../types';
declare enum ArchiveFileSourceType {
    url = 0,
    latest = 1,
    path = 2,
    buildId = 3,
    prompt = 4
}
interface ArchiveFileSourceBase {
    sourceType: ArchiveFileSourceType;
    projectDir: string;
    platform: Platform;
}
interface ArchiveFileUrlSource extends ArchiveFileSourceBase {
    sourceType: ArchiveFileSourceType.url;
    url: string;
}
interface ArchiveFileLatestSource extends ArchiveFileSourceBase {
    sourceType: ArchiveFileSourceType.latest;
}
interface ArchiveFilePathSource extends ArchiveFileSourceBase {
    sourceType: ArchiveFileSourceType.path;
    path: string;
}
interface ArchiveFileBuildIdSource extends ArchiveFileSourceBase {
    sourceType: ArchiveFileSourceType.buildId;
    id: string;
}
interface ArchiveFilePromptSource extends ArchiveFileSourceBase {
    sourceType: ArchiveFileSourceType.prompt;
    projectDir: string;
}
export declare type ArchiveFileSource = ArchiveFileUrlSource | ArchiveFileLatestSource | ArchiveFilePathSource | ArchiveFileBuildIdSource | ArchiveFilePromptSource;
declare function getArchiveFileLocationAsync(mode: SubmissionMode, source: ArchiveFileSource): Promise<string>;
export { ArchiveFileSourceType, getArchiveFileLocationAsync };

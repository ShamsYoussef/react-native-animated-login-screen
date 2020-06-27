import { ArchiveType } from '../android/AndroidSubmissionConfig';
declare enum ArchiveTypeSourceType {
    infer = 0,
    parameter = 1,
    prompt = 2
}
interface ArchiveTypeSourceBase {
    sourceType: ArchiveTypeSourceType;
}
interface ArchiveTypeInferSource extends ArchiveTypeSourceBase {
    sourceType: ArchiveTypeSourceType.infer;
}
interface ArchiveTypeParameterSource extends ArchiveTypeSourceBase {
    sourceType: ArchiveTypeSourceType.parameter;
    archiveType: ArchiveType;
}
interface ArchiveTypePromptSource extends ArchiveTypeSourceBase {
    sourceType: ArchiveTypeSourceType.prompt;
}
export declare type ArchiveTypeSource = ArchiveTypeInferSource | ArchiveTypeParameterSource | ArchiveTypePromptSource;
declare function getArchiveTypeAsync(source: ArchiveTypeSource, location: string): Promise<ArchiveType>;
export { ArchiveTypeSourceType, getArchiveTypeAsync };

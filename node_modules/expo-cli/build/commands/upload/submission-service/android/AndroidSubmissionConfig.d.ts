export interface AndroidSubmissionConfig {
    archiveUrl: string;
    archiveType: ArchiveType;
    androidPackage: string;
    track: ReleaseTrack;
    serviceAccount: string;
    releaseStatus?: ReleaseStatus;
}
declare enum ArchiveType {
    apk = "apk",
    aab = "aab"
}
declare enum ReleaseStatus {
    completed = "completed",
    draft = "draft",
    halted = "halted",
    inProgress = "inProgress"
}
declare enum ReleaseTrack {
    production = "production",
    beta = "beta",
    alpha = "alpha",
    internal = "internal"
}
export { ArchiveType, ReleaseStatus, ReleaseTrack };

declare const travelingFastlane: any;
declare const WSL_BASH_PATH = "C:\\Windows\\system32\\bash.exe";
declare type Options = {
    pipeStdout?: boolean;
};
declare function runAction(fastlaneAction: string, args: string[], options?: Options): Promise<any>;
export { travelingFastlane, runAction, WSL_BASH_PATH };

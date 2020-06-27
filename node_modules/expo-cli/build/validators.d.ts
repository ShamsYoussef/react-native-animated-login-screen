declare function nonEmptyInput(val: string): boolean;
declare const existingFile: (filePath: string, verbose?: boolean) => Promise<boolean>;
declare const promptsNonEmptyInput: typeof nonEmptyInput;
declare const promptsExistingFile: (filePath: string) => Promise<true | "Input is not a file." | "File does not exist.">;
export { nonEmptyInput, existingFile, promptsNonEmptyInput, promptsExistingFile };

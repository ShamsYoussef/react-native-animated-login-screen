import editors from 'env-editor';
export declare function guessEditor(): editors.Editor;
export declare function startProjectInEditorAsync(path: string, options?: {
    editor?: string;
}): Promise<import("@expo/spawn-async").SpawnResult | undefined>;

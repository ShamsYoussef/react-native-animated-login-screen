import { Command } from 'commander';
declare type Options = {
    force: boolean;
};
export declare function action(projectDir?: string, options?: Options): Promise<void>;
export default function (program: Command): void;
export {};

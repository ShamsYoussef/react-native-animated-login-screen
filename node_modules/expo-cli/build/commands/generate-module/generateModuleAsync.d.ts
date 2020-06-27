import { CommandOptions } from 'commander';
export default function generateModuleAsync(newModuleProjectDir: string, options: CommandOptions & {
    template?: string;
}): Promise<void>;

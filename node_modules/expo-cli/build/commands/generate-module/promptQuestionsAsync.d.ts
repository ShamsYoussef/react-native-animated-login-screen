import { ModuleConfiguration } from './ModuleConfiguration';
/**
 * Prompt user about new module namings.
 * @param suggestedModuleName - suggested module name that would be used to generate all suggestions for each question
 */
export default function promptQuestionsAsync(suggestedModuleName: string): Promise<ModuleConfiguration>;

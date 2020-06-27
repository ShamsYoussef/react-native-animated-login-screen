import { ModuleConfiguration } from './ModuleConfiguration';
/**
 * Configures TS, Android and iOS parts of generated module mostly by applying provided renamings.
 * @param modulePath - module directory
 * @param configuration - naming configuration
 */
export default function configureModule(newModulePath: string, configuration: ModuleConfiguration): Promise<void>;

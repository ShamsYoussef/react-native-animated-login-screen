import { ExpoConfig } from '@expo/config';
interface AppConfig {
    owner?: string;
    slug: string;
}
declare function getAppConfig(projecDir: string): AppConfig;
declare function getExpoConfig(projectDir: string): ExpoConfig;
export { getAppConfig, getExpoConfig };

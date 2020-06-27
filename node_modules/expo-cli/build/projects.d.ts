import { ProjectPrivacy } from '@expo/config';
import { User } from '@expo/xdl';
interface ProjectData {
    accountName: string;
    projectName: string;
    privacy?: ProjectPrivacy;
}
declare function ensureProjectExistsAsync(user: User, { accountName, projectName, privacy }: ProjectData): Promise<string>;
export { ensureProjectExistsAsync };

/**
 * Fetches directory from npm or given templateDirectory into destinationPath
 * @param destinationPath - destination for fetched template
 * @param template - optional template provided as npm package or local directory
 */
export default function fetchTemplate(destinationPath: string, template?: string): Promise<void>;

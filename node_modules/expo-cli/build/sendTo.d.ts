declare function getRecipient(sendTo?: string | boolean): Promise<string>;
declare function sendUrlAsync(url: string, recipient: string): Promise<any>;
declare const _default: {
    getRecipient: typeof getRecipient;
    sendUrlAsync: typeof sendUrlAsync;
};
export default _default;

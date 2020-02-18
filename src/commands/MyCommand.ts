/**
 * This is the interface of the minimum properties a command module needs to export for it to be registered.
 */
export interface MyCommand {
    commandCliInterface: string;
    commandDescription: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    commandAction: (...args: any[]) => void | Promise<void>;
}

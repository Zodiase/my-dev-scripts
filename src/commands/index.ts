import { CommanderStatic } from 'commander';

import { MyCommand } from './MyCommand';
import * as hello from './hello';
import * as clear from './clear';

export function registerSingleCommand(
    program: CommanderStatic,
    cmdDef: MyCommand,
): void {
    program
        .command(cmdDef.commandCliInterface)
        .description(cmdDef.commandDescription)
        .action(cmdDef.commandAction);
}

export function registerCommands(program: CommanderStatic): void {
    registerSingleCommand(program, hello);
    registerSingleCommand(program, clear);
}

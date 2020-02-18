#!/usr/bin/env node

import program from 'commander';

import { registerCommands } from './commands';

registerCommands(program);

program.parse(process.argv);

if (process.argv.length <= 2) {
    program.outputHelp();
}

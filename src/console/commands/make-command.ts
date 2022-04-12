import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { EOL } from 'os';
import { paramCase } from 'change-case';

export const command = 'make-command [command]';

export const describe = 'generates a command';

export const builder = {};

const templateJs = (newCommand: string) => `
exports.command = '${newCommand} <value>'

exports.describe = 'what does this command do?'

exports.builder = {}

exports.handler = function (argv) {
  throw Error("Not Implemented Yet!!!");
}
`;

export const handler = function MakeCommand(argv: Record<string, any>) {
  const projectDirectory = process.env.NODE_JET__PROJECT_DIRECTORY as string;
  const cmdDirectory = join(projectDirectory, 'src', 'console', 'commands');
  const extension = 'js';
  mkdirSync(cmdDirectory, { recursive: true });
  if (argv.command === undefined) {
    process.stderr.write(`Error: Please specify command name. ${EOL}`);
    process.exit(1);
  }

  const cmdPath = join(cmdDirectory, `${paramCase(argv.command)}.${extension}`);
  writeFileSync(cmdPath, templateJs(paramCase(argv.command)));

  console.log(`created ${cmdPath}`);
};

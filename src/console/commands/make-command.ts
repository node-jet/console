import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { paramCase } from "change-case";

exports.command = 'make-command [command]'

exports.describe = 'generates a command'

exports.builder = {}

exports.handler = function (argv: Record<string, any>) {
  const projectDirectory = process.env.NODE_JET__PROJECT_DIRECTORY as string;
  const cmdDirectory = join(projectDirectory, 'src', 'console', 'commands');
  const extension = 'js';
  mkdirSync(cmdDirectory, { recursive: true });
  const cmdPath = join(cmdDirectory, `${paramCase(argv.command)}.${extension}`);
  writeFileSync(cmdPath, templateJs(paramCase(argv.command)));

  console.log(`created ${cmdPath}`);
}

const templateJs = (command: string) => `
exports.command = '${command} <value>'

exports.describe = 'what does this command do?'

exports.builder = {}

exports.handler = function (argv) {
  throw Error("Not Implemented Yet!!!");
}
`
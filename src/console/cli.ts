import ConsoleKernelContract from 'src/contracts/console-kernel';
import yargs from 'yargs';

export default function JetCli(projectDirectory: string, kernels: Array<ConsoleKernelContract>) {
  process.env.NODE_JET__PROJECT_DIRECTORY = projectDirectory;
  const cli = yargs
    .scriptName('jet')
    .usage('$0 <cmd> [args]');

  // eslint-disable-next-line no-restricted-syntax
  for (const kernel of kernels) {
    // eslint-disable-next-line no-restricted-syntax
    for (const directory of kernel.directories) {
      cli.commandDir(directory, {});
    }
  }

  // eslint-disable-next-line no-unused-expressions
  cli.help()
    .completion()
    .recommendCommands()
    .demandCommand()
    .argv;
}

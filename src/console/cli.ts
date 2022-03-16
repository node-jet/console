import { dir } from 'console';
import ConsoleKernelContract from 'src/contracts/console-kernel';
import yargs from 'yargs';

/**
 * @param projectDirectory
 * @param kernel
 */
export default function JetCli(projectDirectory: string, kernels: Array<ConsoleKernelContract>) {
  process.env.NODE_JET__PROJECT_DIRECTORY = projectDirectory;
  let cli = yargs
    .scriptName('jet')
    .usage('$0 <cmd> [args]');

  for (let kernel of kernels) {
    for (let directory of kernel.directories) {
      cli.commandDir(directory, {})
    }
  }

  cli.help()
    .completion()
    .recommendCommands()
    .demandCommand()
    .argv;
}

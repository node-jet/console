import { join } from 'path';
import ConsoleKernelContract from 'src/contracts/console-kernel';

const kernel: ConsoleKernelContract = {
  directories: [join(__dirname, 'commands')],
};

export default kernel;

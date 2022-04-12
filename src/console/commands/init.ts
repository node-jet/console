import { writeFileSync } from 'fs';
import { join } from 'path';

export const command = 'init';

export const describe = 'sets up node jet project';

export const builder = {};

export const handler = function init() {
  // do something with argv.
  const projectDirectory = process.env.NODE_JET__PROJECT_DIRECTORY as string;
  writeFileSync(join(projectDirectory, 'jet.json'), JSON.stringify({
    language: 'javascript',
  }, null, 2));

  console.log('created jet.json');
};

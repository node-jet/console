#!/usr/bin/env node

import consoleKernel from 'src/console/kernel';

const { cli } = require('src/index');

cli(__dirname, [consoleKernel]);

#!/usr/bin/env node

import { JetCli, JetConsoleKernel } from './index';
import AppCliKernel from './console/kernel';

JetCli(__dirname, [JetConsoleKernel, AppCliKernel]);

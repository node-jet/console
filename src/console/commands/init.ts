import { writeFileSync } from "fs";
import { join } from "path";

exports.command = 'init'

exports.describe = 'sets up node jet project'

exports.builder = {}

exports.handler = function (argv: Record<string, any>) {
  // do something with argv.
  const projectDirectory = process.env.NODE_JET__PROJECT_DIRECTORY as string;
  writeFileSync(join(projectDirectory, ".nodejet.json"), JSON.stringify({
    language: "javascript"
  }, null, 2));

  console.log("created .nodejet.json");
}

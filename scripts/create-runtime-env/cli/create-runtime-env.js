#!/usr/bin/env node
const { Command } = require("commander");
const chalk = require("chalk");

const { parseJSON } = require("../utils");
const createRuntimeEnvironment = require("../createRuntimeEnv");

const program = new Command();
let stdin = "";

function padLeft(lines) {
  return lines
    .split("\n")
    .map((line) => `    ${line}`)
    .join("\n");
}

program
  .arguments("[name]")
  .option(
    "-f, --from",
    "Type of environment. Possible values: stdin (default) and safelist. Stdin attempts to read the environment as a JSON object from stdin and safelist uses the items provided with the --safelist option to find environment variables."
  )
  .option(
    "-sl, --safelist <items...>",
    'List of environment variables to be used with type "safelist"',
    (value) => value.split(","),
    []
  )
  .option(
    "-o, --output-dir <path>",
    "The directory into which the environment resolver file should be saved"
  )
  .option("-e, --env-key <key>", "The key under which the env should be stored")
  .option("--unsafe", "Log potentially secret environment", false)
  .action(async (name, { from, outputDir, safelist, unsafe, envKey }) => {
    try {
      let env;

      if (!from || from === "stdin") {
        env = parseJSON(stdin);
      }

      await createRuntimeEnvironment({
        name,
        outputDir,
        env,
        safelist,
        envKey,
      });

      process.stdout.write(chalk.green("Updated runtime environment\n"));
      process.stdout.write(`  to ${outputFile}\n`);
      process.stdout.write(`  with env\n`);

      if (unsafe) {
        process.stdout.write(`${padLeft(JSON.stringify(env, null, 2))}`);
      } else {
        process.stdout.write(`${padLeft(Object.keys(env).toString())}`);
      }
    } catch (e) {
      if (e.stack) {
        process.stderr.write(`${e.stack}\n`);
      } else {
        process.stderr.write(`${e}\n`);
      }
      process.exit(1);
    }
  });

if (process.stdin.isTTY) {
  program.parseAsync(process.argv);
} else {
  process.stdin.on("readable", function () {
    var chunk = this.read();
    if (chunk !== null) {
      stdin += chunk;
    }
  });

  process.stdin.on("end", function () {
    program.parseAsync(process.argv);
  });
}

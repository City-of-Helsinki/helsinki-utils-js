#!/usr/bin/env node
const { Command } = require("commander");

const fetchTranslations = require("./index");

function commaSeparatedList(value) {
  return value.split(",");
}

const program = new Command();

program
  .arguments("<sheetId>")
  .option("-d, --debug", "Output extra debugging")
  .requiredOption(
    "-l, --languages <items>",
    "Comma separated list of languages to extract",
    commaSeparatedList
  )
  .requiredOption("-o, --output <value>")
  .action(async (sheetId, { languages, output, debug }) => {
    try {
      await fetchTranslations(sheetId, languages, output, debug);

      process.stdout.write(
        `Translations for languages ${languages.join(
          ", "
        )} were successfully fetched and written into ${output} \n`
      );
    } catch (e) {
      if (e.stack) {
        process.stderr.write(`${e.stack}\n`);
      } else {
        process.stderr.write(`${e}\n`);
      }
      process.exit(1);
    }
  });

program.parse(process.argv);

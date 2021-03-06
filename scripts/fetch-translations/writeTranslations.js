const fs = require("fs");
const { promisify } = require("util");

// Promises are more fun than callbacks
const writeFile = promisify(fs.writeFile);

function getPathToLocales(output, language) {
  return `${output}/${language}.json`;
}

function writeJSONFile(filePath, data) {
  return writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

async function writeTranslations(output, translationData, debug) {
  Object.entries(translationData).map(async ([language, data]) => {
    const filePath = getPathToLocales(output, language);

    if (debug) {
      process.stdout.write(`Writing file ${filePath}`);
    }

    try {
      await writeJSONFile(filePath, data);

      if (debug) {
        process.stdout.write(`Wrote file ${filePath}`);
      }
    } catch (e) {
      process.stdout.write(`${e}\n`);
    }
  });
}

module.exports = writeTranslations;

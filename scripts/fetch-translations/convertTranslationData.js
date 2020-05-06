const i18nextConverter = require("i18next-json-csv-converter");

function convertTranslationData(translationData, debug) {
  const convertedTranslationData = {};
  Object.keys(translationData).forEach((key) => {
    if (debug) {
      process.stdout.write(`Converting ${key}\n`);
    }

    const data = translationData[key];
    const convertedData = i18nextConverter.csv2Json(data);

    if (debug) {
      process.stdout.write(`Converted ${key}\n`);
    }

    convertedTranslationData[key] = convertedData;
  });

  return convertedTranslationData;
}

module.exports = convertTranslationData;

const getTranslationSources = require("./getTranslationSources");
const getTranslationDataFromSources = require("./getTranslationDataFromSources");
const convertTranslationData = require("./convertTranslationData");
const writeTranslations = require("./writeTranslations");

async function fetchTranslations(sheetId, languages, output, debug) {
  const translationSources = getTranslationSources(sheetId, languages);
  const translationData = await getTranslationDataFromSources(
    translationSources,
    debug
  );
  const convertedTranslationData = await convertTranslationData(
    translationData,
    debug
  );
  return writeTranslations(output, convertedTranslationData, debug);
}

module.exports = fetchTranslations;

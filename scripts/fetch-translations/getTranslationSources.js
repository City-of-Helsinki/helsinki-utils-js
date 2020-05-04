function getTranslationSources(sheetId, languages) {
  return languages.map((language) => ({
    source: `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${language}`,
    meta: { language },
  }));
}

module.exports = getTranslationSources;

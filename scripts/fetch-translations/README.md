# fetch-translations

This script can be used to fetch translations from a Google sheet that conforms to the data model that is expected by `i18next-json-csv-converter`.

This script can be consumed by importing it:

```js
import fetchTranslations from 'helsinki-utils-js/scripts/fetch-translations
```

Or by using it through the command line:  

```bash
fetch-translations <google_sheet_id> -l fi,en,sv -o ./tt
```
[See more details](../../README.md#bin-scripts)

## API

`fetchTranslations(sheetId, languages, output[, debug]): Promise`

| Name | Type | Example | Description |
| :- | :- | :- | :- |
|  sheetId | `string` |  | An UUID that represent a google sheet that contains the translations |
| languages | `string[]` | `["en", "fi"]` | Languages that are to be extracted from the sheet |
| output | `string` | `"./src/translations"` | Path to folder where translations should be saved |
| debug | `boolean` |  | When on, the script will log additional details of its progress |
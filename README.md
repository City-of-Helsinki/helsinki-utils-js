# helsinki-utils-js
Common code used by various City of Helsinki frontends.  Please note that components should go to helsinki-design-system instead!

## Commands

| Name | Description |
| :- | :- |
| `npm test` | Run tests | 
| `npm test -- -watch` | Run tests in watch mode | 

## Packages

### Scripts

**fetch-translations**  

Fetch translations from a Google sheets.  
[Go to docs](./scripts/fetch-translations/README.md)

## Bin Scripts

These scripts are configured for use when this package is installed

**fetch-translations**  
```bash
Usage: fetch-translation [options] <sheetId>

Options:
  -d, --debug              Output extra debugging
  -l, --languages <items>  Comma separated list of languages to extract
  -o, --output <value>     
  -h, --help               display help for command
```

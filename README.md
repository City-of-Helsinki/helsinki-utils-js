# helsinki-utils-js
Common code used by various City of Helsinki frontends.  Please note that components should go to helsinki-design-system instead!

## Setup

### Prerequisites

- Node >= 10
- npm

### Installation

This package is currently available through GitHub:
```
npm install City-of-Helsinki/helsinki-utils-js#<version_tag>
```
_Please remember to target a version tag when installing_

## Commands

| Name | Description |
| :- | :- |
| `npm test` | Run tests | 
| `npm test -- -watch` | Run tests in watch mode | 

## For Developers of the Library

This repo was initially set up based on a quick discussion on Slack. The goal was to get a first usable version out with minimal effort. This is why we haven't published this package in `npm` (yet) or set up a more robust build for it.

As of now the repo is still in flux and unfortunately there have been no decisions on how its architecture should look like now or in the future. We kindly ask you to use your best judgement when fixing or adding to this library. Attempt to maintain a strong separation of concerns to make it easier to refactor the implementation once a direction is adopted.

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

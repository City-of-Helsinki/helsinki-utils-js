const mock = require("mock-fs");
const fs = require("fs");
const getTranslations = require("../index");
const mockTranslationCsv = require("./mockTranslations");

jest.mock("node-fetch", () => async () => ({
  status: 200,
  text: async () => mockTranslationCsv,
}));

const fakeOutputDir = "./fake/dir";

beforeEach(() => {
  mock({
    [fakeOutputDir]: {},
  });
});

afterEach(() => {
  mock.restore();
});

describe("getTranslations", () => {
  it("should write found translations as json files", async () => {
    const languages = ["fi", "en"];

    await getTranslations("random-sheet-id", ["fi", "en"], fakeOutputDir);

    languages.forEach((language) => {
      expect(fs.existsSync(`${fakeOutputDir}/${language}.json`)).toBeDefined();
    });
  });
});

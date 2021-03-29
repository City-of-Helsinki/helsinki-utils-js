const fs = require("fs");
const util = require("util");
const path = require("path");

const { get, set } = require("./utils");

function getSafeListedEnv(safeVariables) {
  let env = {};

  for (const safeVariable of safeVariables) {
    set(env, safeVariable, get(process.env, safeVariable));
  }

  return env;
}

const writeFile = util.promisify(fs.writeFile);

function renderEnvInjectorToString(env) {
  const envAsString = util.inspect(env, false, 2, false);

  return `window._env_ = ${envAsString}`;
}

async function updateRuntimeEnv({
  name = "env-config",
  outputDir = "public",
  env: userEnv,
  safelist,
}) {
  if (!userEnv && !safelist) {
    throw Error(
      "Provide either the environment or a safelist for resolving one"
    );
  }

  const env = userEnv || getSafeListedEnv(safelist);
  const envInjectorString = renderEnvInjectorToString(env);
  const filePath = path.join(
    process.cwd(),
    outputDir,
    `env-config${name ? `-${name}` : ""}.js`
  );

  try {
    return writeFile(filePath, envInjectorString);
  } catch (e) {
    throw e;
  }
}

module.exports = updateRuntimeEnv;

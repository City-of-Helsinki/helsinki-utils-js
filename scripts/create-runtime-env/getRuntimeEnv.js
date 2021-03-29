const { ENV_KEY_STORE_LOCATION } = require("./config");

function getEnvironment() {
  const environment = window;
  const envKey = environment[ENV_KEY_STORE_LOCATION];

  return env[envKey];
}

module.exports = getEnvironment;

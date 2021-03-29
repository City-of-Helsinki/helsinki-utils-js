function parseJSON(stdin) {
  try {
    return JSON.parse(stdin);
  } catch (e) {
    console.error(e);
    throw Error(`The value of stdin is not valid JSON
      ${stdin}`);
  }
}

function get(obj, path) {
  return path.split(".").reduce((currentLevel, key) => currentLevel[key], obj);
}

function set(obj, keys, value) {
  keys = typeof keys === "string" ? keys.split(".") : keys;
  const key = keys.shift();

  if (keys.length === 0) {
    obj[key] = value;
    return;
  } else if (!obj.hasOwnProperty(key)) {
    obj[key] = {};
  }

  setValue(obj[key], keys, value);
}

module.exports = {
  parseJSON,
  get,
  set,
};

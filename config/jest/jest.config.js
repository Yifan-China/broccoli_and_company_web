const { defaults } = require("jest-config");
const config1 = require("./babelTransform");
const config2 = require("./cssTransform");
const config3 = require("./fileTransform");
console.log("The config is loaded");
console.log({
    ...config1,
  ...config2,
  ...config3,
})
module.export = {
  ...config1,
  ...config2,
  ...config3,
  moduleNameMapper: {
    ...defaults.moduleNameMapper,
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
  },
};

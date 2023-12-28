import { config as sharedConfig } from "../wdio.conf.js";

export const config = {
  ...sharedConfig,
  runner: "local",

  specs: ["../test/specs/**/*.js"],

  maxInstances: 10,

  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--no-sandbox",
          "--disable-dev-shm-usage",
          "--headless",
          "--disable-infobars",
          "--disable-gpu"
        ],
      },
    },
  ],

  logLevel: "error",

  bail: 0,

  baseUrl: "http://localhost:3000/",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};

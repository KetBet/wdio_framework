# WDIO_framework
This repository contains simple automation test framework written with WebdriverIO and implements Page Object Model Pattern.

This project requires [Node.js](https://nodejs.org/en/), `npm`, `yarn` to be installed on your machine. 

## Steps 

1. Clone this repository to your local machine
2. Install the dependencies: `npm install`
3. Clone the repository for testing: `git clone https://github.com/cypress-io/cypress-realworld-app.git`
4. Install: `npm install yarn@latest -g`, `yarn`
5. Run the application: `yarn dev`

### Run All Tests

`npm run test`

### Run Tests in Chrome

`npm run test:chrome`

### Run Tests in Firefox

`npm run test:firefox`

## Report

Allure report: `npm run report:generate`
Open the report: `npm run report:open`
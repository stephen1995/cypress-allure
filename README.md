# Allute Project

## Description

This project is a test automation suite for web applications using Cypress.io. It includes configurations and scripts to run tests locally and on different environments.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Make sure you have JAVA 8 installed on your system since is neccesary for Allure reporting

## Usage

### Local Debugging

To debug tests locally in Chrome browser:
npm run local:debug

### Local Headless Testing

To run tests locally in headless mode using Chrome browser:
npm run local:chrome

### Testing in QA environment

To run tests in headless mode for QA environment using Chrome browser:
npm run qa:chrome

### QA Testing

To run tests locally in headless mode using Chrome browser:

## Using Grep Plugin

### Running Tests with Specific Names

To run tests with specific names, use the `grep` command followed by the test name pattern. For example, to run tests containing the word "login": npx cypress run --env grep=login

### Running Tests with Specific Tags

You can also run tests based on specific tags. For instance, to run tests tagged as "smoke": npx cypress run --env grepTags=@smoke

### Run all tests excepted tagged with

You can also run tests except based on specific tags: npx cypress run --env grepTags=-@smoke

### In order to open allure report

Execute these commands:
1st: npm run testing
2nd: npm run openReport

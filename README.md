<a href="http://fswebsitesolutions.com/"><img src="https://raw.githubusercontent.com/fsereno/portfolio/master/docs/images/FSLogo.jpeg" width="100px" title="FS Website Solutions" alt="FS Website Solutions" target="_blank"></a>

# **Fabio Sereno** - Software Developer
Highly Experienced Full Stack Web Developer. Highly self-motivated, enthusiastic, professional and a team player. Possesses strong analytical and problem solving skills, code proficiency, and an ability to follow through with projects from initiation to completion with innovation and creativity.

Very keen on learning and using the latest technologies, with a real passion for software development in general. Personal interests include exciting technologies such as Artificial Intelligence, Machine Learning, Virtual Reality and Blockchain development.

## My Portfolio Repository
The purpose of this repository is to demonstrate skills in various technologies, coding principles and design patterns.

This project is both built and managed with Azure DevOps for continuous integration and deployment (CI/CD).

- Azure Functions (https://azure.microsoft.com/en-gb/services/functions/)
- AWS Lambda (https://aws.amazon.com/lambda/)
- Nodejs (https://nodejs.org/en/)
- Gulp (https://gulpjs.com)
- WebPack (https://webpack.js.org/)
- Pug (https://pugjs.org/api/getting-started.html)
- TypeScript (https://www.typescriptlang.org)
- Sass (https://sass-lang.com/)
- Mocha (https://mochajs.org/)
- Chai (https://www.chaijs.com/)
- Nightmare (https://github.com/segmentio/nightmare)
- Knockout (https://knockoutjs.com/)
- A-Frame (https://aframe.io/)
- Dotnet Core (https://dotnet.microsoft.com)
- NUnit (https://nunit.org/)
- ML Dotnet (https://dotnet.microsoft.com/apps/machinelearning-ai/ml-dotnet)
- ThreeJS (https://threejs.org/)
- React (https://reactjs.org/)
- Vue (https://vuejs.org/)
- SOLID (SOLID Design principles in mind, throughout)
---

## Contents

- [Prerequisites](#prerequisites)
- [Installation + Usage](#installation)
- [CodeExamples](#codeexamples)
- [License](#license)
---

## Prerequisites

- Nodejs v ^12.14.0 (https://nodejs.org/en/)
- Npm (https://www.npmjs.com/)
- Gulp CLI (https://gulpjs.com/)
- .NetCore (https://dotnet.microsoft.com)
---

## Installation

- Follow these steps to install this repo locally. Feel free to checkout the build process and view uncompiled code.
---

## Clone

- Clone this repo to your local machine using `https://github.com/fsereno/portfolio`
---

## Setup For Node JS Driven Applications
- Please ensure you have the Gulp command line tools installed before running any Gulp tasks.

- Open your prefered command line:

> install npm packages

```shell
$ npm install
$ npm install --global gulp-cli
```
---

### Tasks

#### Run the initial Gulp build task (Run this first)

```shell
$ gulp build
```
##### This will:
- Build the initial development resources (pug, sass, ts).
- Run Mocha Unit tests on TS Service code only
---

#### Run the default Gulp task

```shell
$ gulp
```
##### This will:
- Rebuild development resources (pug, sass, ts).
- Start the development server.
- Run Mocha Unit tests, both frontend and backend.
- Watch for any changes on development resources.
- Live Reload any changes straight to the browser.
- Open your browser and navigate to http://localhost:8080
---

#### Run the Gulp Publish task

```shell
$ gulp publish
```
##### This will:
- Build the production directory.
- Bundle the necessary resources into “app” and “vendor” files (js, css).
- Replace resource urls with production urls.
- Run all Unit Tests from the ./app/tests directory using Mocha and Chai.
---

#### Run the Gulp Test task

```shell
$ gulp test
```
##### This will:
- Run all TypeScript Service unit tests from the ./app/tests/services directory using Mocha and Chai.
---

#### Run the Gulp Frontend Functional tests (headless browser) task

```shell
$ gulp test-func
```
##### This will:
- Start the development server
- Run all Nightmare Unit Tests from the ./app/tests/applications directory using Mocha, Chai and Nightmare.
- Stop the development server once all tests are complete.
---

#### Run the Gulp Create task

```shell
$ gulp create
```
##### This will allow you to:
- Update the config.json file with additional applications.
- Then run this command to build applications based on the config.json file.
- New applications are built based on the app_master template application.
- If all applications already exist, nothing will be overwritten.
---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://fswebsitesolutions.com/porfolio/app_licence/index.html)**
- Copyright 2018 © <a href="http://fswebsitesolutions.com/" target="_blank">FS Website Solutions</a>.
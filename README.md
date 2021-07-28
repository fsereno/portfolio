<a href="http://fswebsitesolutions.com/"><img src="https://raw.githubusercontent.com/fsereno/portfolio/master/docs/images/FSLogo.jpeg" width="100px" title="FS Website Solutions" alt="FS Website Solutions" target="_blank"></a>

# **Fabio Sereno** - Software Developer
Highly Experienced Full Stack Web Developer. Highly self-motivated, enthusiastic, professional and a team player. Possesses strong analytical and problem solving skills, code proficiency, and an ability to follow through with projects from initiation to completion with innovation and creativity.

Very keen on learning and using the latest technologies, with a real passion for software development in general. Personal interests include exciting technologies such as Artificial Intelligence, Machine Learning, Virtual Reality and Blockchain development.

## My Portfolio Repository
The purpose of this repository is to demonstrate skills in various technologies, coding principles and design patterns.

This project is both built and managed with Azure DevOps for continuous integration and deployment (CI/CD).

- Azure Functions (https://azure.microsoft.com/en-gb/services/functions/)
- AWS Lambda (https://aws.amazon.com/lambda/)
- Docker (https://www.docker.com/)
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
- Docker (https://www.docker.com/)
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

### CLI Commands

#### Run the initial build (Run this first)

```shell
$ npm run build
```
#### Build a specific application

```shell
$ npm run build dir=<application>
```

##### This will:
- Build all initial development resources (pug, sass, ts, js).
---

#### Run the development server

```shell
$ npm run dev
```
#### Serve a specific application

```shell
$ npm run dev dir=<application>
```
##### This will:
- Start the development server.
- Watch for any changes on development resources.
- Live Reload any changes straight to the browser.
- Open your browser and navigate to http://localhost:8080
---

#### Build for release

```shell
$ npm run release
```
##### This will:
- Build the production directory.
---

#### Run all unit tests

```shell
$ npm test
```
##### This will:
- Run all application specific and global unit tests.
---

#### Run all functional tests (using a headless browser)

```shell
$ npm run test-func
```
##### This will:
- Please ensure the development server is running
- Run all Nightmare Unit Tests from the ./app/tests/functional directory
---

#### Create a new application

```shell
$ npm run create
```
##### This will:
- Update the config.json file with additional applications.
- Then run this command to build applications based on the config.json file.
- New applications are built based on the 'masterTemplateDir' template application, as indicated in the config.json file.
- If all applications already exist, nothing will be overwritten.
---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://fswebsitesolutions.com/porfolio/app_licence/index.html)**
- Copyright 2018 © <a href="http://fswebsitesolutions.com/" target="_blank">FS Website Solutions</a>.
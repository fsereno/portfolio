<a href="http://fswebsitesolutions.com/"><img src="https://raw.githubusercontent.com/fsereno/portfolio/master/docs/images/FSLogo.jpeg" width="100px" title="FS Website Solutions" alt="FS Website Solutions" target="_blank"></a>

# **Fabio Sereno** - Software Developer
Highly Experienced Full Stack Web Developer of 10+ years (6+ in the FinTech sector). Highly self-motivated, enthusiastic, professional and a team player. Possesses strong analytical and problem solving skills, code proficiency, and an ability to follow through with projects from initiation to completion with innovation and creativity. 

Very keen on learning and using the latest technologies, with a real passion for software development. Areas of keen interest: Fin Tech, Health Tech, Commerce, ML/AI, Blockchain, XR(VR/AR), IoT.

## My Portfolio Repository
The purpose of this repository is to demonstrate skills in various technologies, coding proficiency and knowledge.

To see a fully deployed version of this project go to:
https://fsereno.github.io/portfolio/

This project is both built and deployed with continuous integration and deployment (CI/CD).

Some of the technology used in this project and related projects:
- Azure Functions (https://azure.microsoft.com/en-gb/services/functions/)
- AWS Lambda (https://aws.amazon.com/lambda/)
- Docker (https://www.docker.com/)
- Node JS (https://nodejs.org/en/)
- Gulp (https://gulpjs.com)
- Webpack (https://webpack.js.org/)
- Pug (https://pugjs.org/api/getting-started.html)
- TypeScript (https://www.typescriptlang.org)
- Sass (https://sass-lang.com/)
- Mocha (https://mochajs.org/)
- Chai (https://www.chaijs.com/)
- A-Frame (https://aframe.io/)
- .NET (https://dotnet.microsoft.com)
- NUnit (https://nunit.org/)
- ThreeJS (https://threejs.org/)
- React (https://reactjs.org/)
- Vue (https://vuejs.org/)
- SOLID principles
- TDD - Test driven development
- DDD - Domain driven development
---

## Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#licence)
---

## Prerequisites
- Docker (https://www.docker.com/)
- Node JS v ^14.17.5 (https://nodejs.org/en/)
- NPM (https://www.npmjs.com/)
> Tip - Node and NPM are not needed locally if running within a container.
---

## Installation

- Follow these steps to install this repo locally.
---

### Clone

- Clone this repo to your local machine using `https://github.com/fsereno/portfolio`
---

### Run inside a Container using Docker
- Please ensure you have Docker installed and running.
- Open your preferred command line:

> Launch the container

```shell
$ docker compose up
```

>Attach a Bash command line interface.
From here you will be able to run all subsequent NPM commands

```shell
$ docker exec -it node bash
```
> You should now have a bash cmd connected to the container
---

### Run outside a Container
- Please ensure you have Node JS and NPM installed.
- Open your preferred command line:

> install NPM packages

```shell
$ npm install
$ npm install --global gulp-cli
```
---

## Usage

#### Run the initial build
> Run this first to ensure all resources build successfully

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
- Open your browser and navigate to http://localhost:8080.
---

#### Run analysis on a specific application

```shell
$ npm run analysis dir=<application>
```
##### This will:
- Start the analysis server.
- Perform a dependency analysis of the application.
- Open your browser and navigate to http://localhost:8080.
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
- Run all functional tests from the ./app/tests/functional directory
---

#### Create a new application

```shell
$ npm run create
```
##### This will:
- Build applications based on the config.json file.
- New applications are built based on the 'masterTemplateDir' property.
- If an application already exists, nothing will be overwritten.
---

## Licence

- **[MIT licence](https://fsereno.github.io/portfolio/app_licence/index.html)**
- Copyright 2021 © Fabio Sereno.
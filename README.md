<a href="http://fswebsitesolutions.com/"><img src="https://raw.githubusercontent.com/fsereno/portfolio/master/dist/images/FSLogo.jpeg" title="FS Website Solutions" alt="FS Website Solutions" target="_blank"></a>

# **Fabio Sereno** - Software Developer
Highly Experienced Full Stack Web Developer. Highly self-motivated, enthusiastic, professional and a team player. Possesses strong analytical and problem solving skills, code proficiency, and an ability to follow through with projects from initiation to completion with innovation and creativity.

Very keen on learning and using the latest technologies, with a real passion for software development in general. Personal interests include exciting technologies such as Artificial Intelligence, Machine Learning, Virtual Reality and Blockchain development.

### My Portfolio Repository
The purpose of this repository is to demonstrate skills in various technologies, coding principles and patterns:

- Gulp (https://gulpjs.com)
- Pug (https://pugjs.org/api/getting-started.html)
- TypeScript (https://www.typescriptlang.org)
- Sass (https://sass-lang.com/)
- Mocha (https://mochajs.org/)
- Chai (https://www.chaijs.com/)
- Nightmare (https://github.com/segmentio/nightmare)
- SOLID (SOLID Design principles throughout)
---

## Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Tasks](#tasks)
- [License](#license)
---

## Prerequisites

- Nodejs v ^11.8.3 (https://nodejs.org/en/)
- Npm (https://www.npmjs.com/)
- Gulp (https://gulpjs.com/)
---

## Installation

- Follow these steps to install this repo locally. Feel free to checkout the build process and view uncompiled code.
---

### Clone

- Clone this repo to your local machine using `https://github.com/fsereno/portfolio`
---

### Setup

- open your prefered command line:

> install npm packages

```shell
$ npm install
```
---

## Tasks

#### Run the initial Gulp build task (Run this first)

```shell
$ gulp build
```
##### This will:
- Build the initial development resources (pug, sass, ts).
- Run Mocha Unti tests on backend Service code only

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

#### Run the Gulp Publish task

```shell
$ gulp publish
```
##### This will:
- Build the production directory.
- Bundle the necessary resources into “app” and “vendor” files (js, css).
- Replace resource urls with production urls.
- Run all Unit Tests from the ./app/tests directory using Mocha and Chai.

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
<a href="http://fswebsitesolutions.com/"><img src="https://raw.githubusercontent.com/fsereno/portfolio/master/dist/images/FSLogo.jpeg" title="FS Website Solutions" alt="FS Website Solutions" target="_blank"></a>

# **Fabio Sereno** - Software Developer
### A Portfolio Repository
The purpose of this repository is to demonstrate skills in various technologies, coding principles and patterns:

- Gulp (As the task runner)
- Pug (Compiled to: HTML)
- TypeScript (Compiled to: JavaScript)
- Sass (Compiled to: CSS)
- Mocha (For TS/JS unit testing)
- Chai (For TS/JS unit test assertion)
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
- Bower (https://bower.io/search/)
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

#### Run the default Gulp build task

```shell
$ gulp
```
##### This will:
- Build the initial development resources (pug, sass, ts).
- Start the development server.
- Watch for any changes on development resources.
- Live Reload any changes straight to the browser.
- Open your browser and navigate to http://localhost:8080

#### Run the Publish Gulp task

```shell
$ gulp publish
```
##### This will:
- Build the production directory.
- Bundle the necessary resources into “app” and “vendor” files (js, css).
- Replace resource urls with production urls.
- Run all Unit Tests from the ./app/tests directory using Mocha and Chai.

#### Run the Create Gulp task

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
<a href="http://fswebsitesolutions.com/"><img src="https://raw.githubusercontent.com/fsereno/portfolio/master/dist/images/FSLogo.jpeg" width="100px" title="FS Website Solutions" alt="FS Website Solutions" target="_blank"></a>

# **Fabio Sereno** - Software Developer
Highly Experienced Full Stack Web Developer. Highly self-motivated, enthusiastic, professional and a team player. Possesses strong analytical and problem solving skills, code proficiency, and an ability to follow through with projects from initiation to completion with innovation and creativity.

Very keen on learning and using the latest technologies, with a real passion for software development in general. Personal interests include exciting technologies such as Artificial Intelligence, Machine Learning, Virtual Reality and Blockchain development.

## My Portfolio Repository
The purpose of this repository is to demonstrate skills in various technologies, coding principles and patterns:

- Gulp (https://gulpjs.com)
- Pug (https://pugjs.org/api/getting-started.html)
- TypeScript (https://www.typescriptlang.org)
- Sass (https://sass-lang.com/)
- Mocha (https://mochajs.org/)
- Chai (https://www.chaijs.com/)
- Nightmare (https://github.com/segmentio/nightmare)
- DotnetCore (https://dotnet.github.io/)
- SOLID (SOLID Design principles in mind, throughout)
---

## Contents

- [Prerequisites](#prerequisites)
- [Installation + Usage](#installation)
- [CodeExamples](#codeexamples)
- [License](#license)
---

## Prerequisites

- Nodejs v ^11.8.3 (https://nodejs.org/en/)
- Npm (https://www.npmjs.com/)
- Gulp (https://gulpjs.com/)
- .NetCore (https://www.microsoft.com/net/learn/dotnet/hello-world-tutorial)
---

## Installation

- Follow these steps to install this repo locally. Feel free to checkout the build process and view uncompiled code.
---

## Clone

- Clone this repo to your local machine using `https://github.com/fsereno/portfolio`
---

## Setup For Node JS Driven Applications

- open your prefered command line:

> install npm packages

```shell
$ npm install
```
---

### Tasks

#### Run the initial Gulp build task (Run this first)

```shell
$ gulp build
```
##### This will:
- Build the initial development resources (pug, sass, ts).
- Run Mocha Unit tests on backend Service code only
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

## Setup for .NetCore driven Applications

- open your prefered command line:

> install dotnet packages

```shell
$ cd app/app_dotnetCore
$ dotnet restore
```
---

### Tasks

#### Go into /PrimeService.Tests and run the unit tests

```shell
$ dotnet test
```
##### This will:
- Build the solution.
- Run the NUnit unit tests.
---

## CodeExamples

### C# Events and Delegates

#### app/codeExamples/C#/eventsAndDelegates.cs

##### Example of Events and Delegates in C#
- Shows how to define an Event.
- Show how to define an Event Handler.
- Shows how to define a Delegate.
- Show how to define a Publisher.
- Show how to Subscribe to an Event.
- Also shows understanding of Event Driven Services and understanding of loosely coupled SOA (Service Oriented Architecture)
---

### C# Generics

#### app/codeExamples/C#/generics.cs

##### Example of Generics in C#
- Shows how to define a Generic Type.
- Shows how to pass varying types to the same signature/method using Generic Types.
---

### C# Abstracts

#### app/codeExamples/C#/abstracts.cs

##### Example of Abstracts in C#
- Shows how to define an Abstract Class and Abstract Methods.
- Shows how to inherit the Abstract Class and override methods.
- Shows evidence of a basic understanding of the Liskov Substitution Principle.
---

### .NetCore + NUnit

#### app/app_dotnetCore/

##### Example of a .NetCore Porject with NUnit in place
- Shows understanding of how to create a .NetCore Solution/Project from scratch.
- Shows knowledge of the dotnet CLI tools.
- Show undertanding of how to create and write unit tests using NUnit.
---

### JS Closures

#### app/codeExamples/JS/closures.js

##### Example of Closures in JS
- Shows how to create a “private” variable in JavaScript using a Closure.
- Shows how increment that variable externally, using a confined method.
- Only the method can increment out private variable.
---

### JS Prototypes

#### app/codeExamples/JS/prototypes.js

##### Example of Prototype Inheritance in JS
- Shows how a JS object inherits from the Prototype.
- Shows how to extend a JS object without needing to break the Open Closed Principle.
- A more traditional OO approach is now possible as of EcmaScript 2015 (ES6).
---

### JS Promises

#### app/codeExamples/JS/promises.js

##### Example of Promises in JS
- Shows an alternative, much cleaner approach to the Asynchronous JavsScript Callback problem. (Callback Hell!)
- Demonstrates the 3 states of a Promise, Pending, Fulfilled and Rejected.
- Shows how to define a Promise, how to call it and how to evaluate the result.
---

### JS Recursion

#### app/codeExamples/JS/recursion.js

##### Example of Recursion in JS
- Shows understanding of Recursive Methods in general.
- Recursion occurs only if: 1) The Fail Safe is not triggered, 2) the Target is not met.
- Recursion results in nested method calls. Once the Target is met, the result from each call is returned as the call stack unwinds.
---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://fswebsitesolutions.com/porfolio/app_licence/index.html)**
- Copyright 2018 © <a href="http://fswebsitesolutions.com/" target="_blank">FS Website Solutions</a>.


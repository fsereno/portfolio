<a href="http://fswebsitesolutions.com/"><img src="https://raw.githubusercontent.com/fsereno/portfolio/master/docs/images/FSLogo.jpeg" width="100px" title="FS Website Solutions" alt="FS Website Solutions" target="_blank"></a>

# **Fabio Sereno** - Software Developer
Highly Experienced Full Stack Web Developer of 10+ years (6+ in the FinTech sector). Highly self-motivated, enthusiastic, professional and a team player. Possesses strong analytical and problem solving skills, code proficiency, and an ability to follow through with projects from initiation to completion with innovation and creativity.

Very keen on learning and using the latest technologies, with a real passion for software and programming. Areas of keen interest: Fin Tech, Health Tech, Commerce, ML/AI, Blockchain, XR(VR/AR), IoT.

## My Portfolio Repository
The purpose of this repository is to demonstrate skills in various technologies, coding proficiency and knowledge.

To see a static version of this project go to:
https://fsereno.github.io/portfolio/

To see a fully containerised version of this project deployed to AWS (Amazon Web Services) EC2, please either raise an issue on this GitHub repository or contact me via LinkedIn.

- Raise an issue on Github (https://github.com/fsereno/portfolio/issues)
- Contact me on LinkedIn (https://www.linkedin.com/in/fabio-sereno-6a97b986/)

This project is both built and deployed with continuous integration and deployment (CI/CD).

Some of the technology used in this project and related projects:
- .NET (https://dotnet.microsoft.com)
- Docker (https://www.docker.com/)
- Docker Hub (https://hub.docker.com/)
- NodeJS (https://nodejs.org/en/)
- Webpack (https://webpack.js.org/)
- Pug (https://pugjs.org/api/getting-started.html)
- TypeScript (https://www.typescriptlang.org)
- A-Frame (https://aframe.io/)
- Sass (https://sass-lang.com/)
- Three.js (https://threejs.org/)
- React (https://reactjs.org/)
- Vue (https://vuejs.org/)
- Taiko (https://www.npmjs.com/package/taiko)
- Mocha (https://mochajs.org/)
- Chai (https://www.chaijs.com/)
- Enzyme (https://enzymejs.github.io/enzyme/)
- NUnit (https://nunit.org/)
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

Launch the production environment

```shell
$ docker compose up
```
##### This will:
- Pull all images from Docker Hub.
- Spin up all services in containers.
- The application will be available at: http://localhost/

To run one of the following specific Docker tasks
- analysis
- create
- dev
- rel
- test
- test-e2e

```shell
$ sh start <task>
```
To stop one of the above tasks, excluding those which destroy themselves (create, test)

```shell
$ sh stop <task>
```
---

### Tasks

#### Serve a specific application via the development server

```shell
$ sh start dev <application>
```
##### This will:
- Start the development server.
- Watch for any changes on development resources.
- Hot-reload any changes straight to the browser.
- The default application is the root application - home
- Open your browser and navigate to http://localhost:8080.
---

#### Run analysis on a specific application

```shell
$ sh start analysis <application>
```
##### This will:
- Start the analysis server.
- Perform a dependency analysis of the application.
- Open your browser and navigate to http://localhost:8080.
---

#### Build for release

```shell
$ sh start rel
```
##### This will:
- Build the production static assets directory.
---

#### Run all unit tests

```shell
$ sh start test
```
##### This will:
- Run all application specific and global unit tests.
---

#### Run all functional end-to-end tests

```shell
$ sh start test-e2e
```
##### This will:
- Run all functional tests from the ./app/tests/functional directory
- Currently this feature is a work in progress (WIP) and will not work on ARM architecture
---

#### Create a new application

```shell
$ sh create
```
##### This will:
- Build applications based on the config.json file.
- New applications are built based on the 'masterTemplateDir' property.
- If an application already exists, nothing will be overwritten.
---

## Licence

- **[MIT licence](https://fsereno.github.io/portfolio/app_licence/index.html)**
- Copyright 2021 © Fabio Sereno.
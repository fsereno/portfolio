<a href="http://fswebsitesolutions.com/"><img src="https://raw.githubusercontent.com/fsereno/portfolio/master/docs/images/FSLogo.jpeg" width="100px" title="FS Website Solutions" alt="FS Website Solutions" target="_blank"></a>

# **Fabio Sereno** - Software Engineer
Highly experienced Full Stack Software Engineer with over 15 years of experience (6+ years in the FinTech sector). Self-motivated, enthusiastic, and professional team player with strong analytical and problem-solving skills. Demonstrates proficiency in coding and a proven ability to successfully complete projects with innovation and creativity.

Passionate about software development and constantly eager to learn and adopt the latest technologies. Keen interest in FinTech, HealthTech, Commerce, ML/AI, Blockchain, XR (VR/AR), and IoT.

## My Portfolio Repository
The purpose of this repository is to demonstrate skills in various technologies, coding proficiency and knowledge.

To view a static version of this project with limited functionality, please visit:
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

## Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#licence)

## Prerequisites

- Docker (https://www.docker.com/)
- NodeJS (https://nodejs.org/en/)

## Installation

- Follow these steps to install this repo locally.

### Clone

- Clone this repo to your local machine using `https://github.com/fsereno/portfolio`

### Compose

- Please ensure you have Docker installed and running.
- Open your preferred command line:

Docker compose files are dynamically built, depending on command line arguments.

```shell
$ npm run compose -- <options>
```
Passing no arguments will result in adding all available services to the production compose file.

Alternatively, passing --mode dev, will build the development compose file.

```shell
$ npm run compose -- --mode dev
```
However, once again, this will include all available services in the compose file.

To include only specific services in the compose file, use the --include argument:

```shell
$ npm run compose -- --include dataStructures --mode dev
```
##### This will:
- Compose the development version of the file.
- Simply exclude --mode dev if building for production.
- Include only the dataStructures service.
- The necessary Nginx service will also be included.

### Start/Stop

- Please ensure you have Docker installed and running.
- Open your preferred command line:

```shell
$ npm run start -- <options>
```
Passing no arguments will result in the production environment being started.

##### This will:
- Pull all images from Docker Hub.
- Spin up all services in containers.
- The application will be available at: http://localhost

To stop one of the above tasks, excluding those which destroy themselves:

```shell
$ npm run stop -- <options>
```

Passing --name will start a particular container.

```shell
$ npm run start -- --name <application_name>
```

##### This will:
- Start only the container for the given application.
- The application will be available at: http://localhost

To stop a particular container:

```shell
$ npm run stop -- --name <application_name>
```

To start the development environment:

```shell
$ npm run start  -- --mode dev --context dataStructures
```
##### This will:
- Start the webpack development server.
- Start the necessary backend services.
- Watch for any changes on dataStructures development resources.
- Hot-reload any changes straight to the browser for the dataStructures application.
- The default application is the root application - home.
- Open your browser and navigate to http://localhost

#### Run dependency analysis on a specific application

```shell
$ npm run analysis dir=dataStructures
```
##### This will:
- Start the webpack analysis server.
- Perform a dependency analysis of the dataStructures application frontend.
- The default application is the root application - home.
- Open your browser and navigate to http://localhost:8080

### Tasks

- Please ensure you have Docker installed and running.
- Open your preferred command line:

Tasks create ephemeral containers. Containers which are destroyed after a task has completed.

#### Build for release

```shell
$ npm run task -- --name build
```
##### This will:
- Create an ephemeral container to run the task.
- Build the production static assets directory (dist or docs, depending on the configuration).
- The container is automatically destroyed after use.

#### Run all frontend unit tests

```shell
$ npm run task --  --name test
```
##### This will:
- Create an ephemeral container to run the task.
- Run all application specific and global unit tests.

#### Run all functional end-to-end tests

Ensure the application is already running first.

```shell
$ npm run test-apps-e2e
```
##### This will:
- Run all functional tests from the ./app/tests/functional directory
- Currently this feature is a work in progress (WIP) and will not work on ARM architecture

#### Create a new application

```shell
$ npm run task --  --name create
```
##### This will:
- Create an ephemeral container to run the task.
- Build applications based on the config.json file.
- New applications are built based on the 'masterTemplateDir' property.
- If an application already exists, nothing will be overwritten.

## Licence

- **[MIT licence](https://fsereno.github.io/portfolio/app_licence/index.html)**
- Copyright 2024 © Fabio Sereno.
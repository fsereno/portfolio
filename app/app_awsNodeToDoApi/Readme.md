# AWS driven, B2C API, To-Do List SPA

With this application I have extended previous To-Do concepts. This application is driven by AWS with Node.js and is authenticated by Cognito. Data is persisted with Dynamo DB and an AWS HTTP API Gateway serves all client requests, protected by an "authorizor".

I have used the Serverless Framework architecture to build this application. This has allowed for a great, zero friction, workflow.

The frontend is using React with React Router, state is manage by a combination of React Context and the Context Provider Pattern.

- AWS Repository (https://github.com/fsereno/app_awsNodeToDoApi)
- Serverless (https://www.serverless.com/)
- AWS Cognito (https://aws.amazon.com/cognito/)
- AWS Dynamo (https://aws.amazon.com/dynamodb)
- AWS API Gateway (https://aws.amazon.com/api-gateway/)
- Node.js (https://nodejs.org/en/)
- React Hooks (https://reactjs.org/docs/hooks-reference.html)
- React Router (https://reactrouter.com/web/guides/quick-start)
- React Context (https://reactjs.org/docs/context.html)

### Explanation ###

The interest in this application has come from a great deal of research and the need to demonstrate a full, end to end application, covering frontend, authentication, backend business logic and data store.
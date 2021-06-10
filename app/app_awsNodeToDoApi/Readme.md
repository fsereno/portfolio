# AWS driven, B2C API, To-Do List SPA

With this application I have extended previous To-Do concepts. This application is now driven by a Node JS, AWS backend, authenticated by Cognito and data is persisted with Dynamo DB.

The frontend is using React with React Router, state is manage by a combination of React Context and the Context Provider Pattern.

- AWS Repository (https://github.com/fsereno/app_awsNodeToDoApi)
- React Hooks (https://reactjs.org/docs/hooks-reference.html)
- React Router (https://reactrouter.com/web/guides/quick-start)
- React Context (https://reactjs.org/docs/context.html)

### Explanation ###

The interest in this application has come from a great deal of research and the need to demonstrate a full, end to end application, covering frontend, authentication, backend business logic and data store.

### Project comands ###

Build JavaScript by running the default Gulp task from witin this directory
```
    gulp
```
Run project specific tests with
```
    gulp test
```

Run the application from within the route directory, using the master Gulp file and the default Gulp task.
```
    cd ../../
    gulp
```
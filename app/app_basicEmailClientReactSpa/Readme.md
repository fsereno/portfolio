# Basic React Email Client SPA

With this application I have built a basic email client using React, React Router and handling state via a Context and the useReducer hook.

### Explanation ###

The interest in this application was predominately around a buiding a single page application and handling routing with React.

I progressed the SPA into an email client to give me a slightly more complex problem to solve. The state management for this application meant I had to look into using a React Context to broadcast the state across many components and also use a more manageable state hook - useReducer, as an alternative to useState.

Performance was a key driver. Multiple contexts have been used to isolate state updates and minimise on re-renders. I have also used useMemo, useCallback and React.Memo where necessary to help with performance.

- React Hooks (https://reactjs.org/docs/hooks-reference.html)
- React Router (https://reactrouter.com/web/guides/quick-start)
- React Context (https://reactjs.org/docs/context.html)

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
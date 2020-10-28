# AWS .NET Core Asynchronous Coffee Maker. A Serverless Application with React Interface

This application demonstrates knowledge of multithreading with use of the async / await / Task and the State Machine. The process of making a cup of coffee can be either run synchronously or asynchronously. The order in which the steps are carried out depends on available threads. Synchronously, with only a single thread, every task must finish before the next. Asynchronously, we are able to run background tasks, such as boiling the kettle while we get cups out of a cupboard.

Each step is entered into a Log, which is updated by reference during the process. I have also implemented IEnumerable and IEnumorator to demonstrate the iterator pattern. Keeping the Log structure hidden and allowing indirect, readonly iteration of the Log collection.

- IEnumerable (https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable?view=netcore-3.1)

- IEnumorator (https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerator?view=netcore-3.1)

The AWS Gateway API is called when attempting to sort the Employee table via the sort icons located in the column headers. This in turn calls an AWS Lambda function, which implements both ICompareable for default sorting and IComparer for multi directional sorting.

### Explanation ###

This project shows how to run an ASP.NET Core Web API project as an AWS Lambda exposed through Amazon API Gateway. The NuGet package [Amazon.Lambda.AspNetCoreServer](https://www.nuget.org/packages/Amazon.Lambda.AspNetCoreServer) contains a Lambda function that is used to translate requests from API Gateway into the ASP.NET Core framework and then the responses from ASP.NET Core back to API Gateway.

### Project commands ###

Build JavaScript by running the default Gulp task
```
    gulp
```

Run the application from within the route directory, using the master Gulp file and the default Gulp task.
```
    cd ../../
    gulp
```

Execute unit tests
```
    cd "aws/test/aws.Tests"
    dotnet test
```

Publish application
```
    cd "aws/src/aws"
    dotnet publish -c release
```
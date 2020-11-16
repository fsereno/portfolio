# ASP.NET Core Entity Sorting API. A Serverless Application with React Interface

With this application I have built a complex type sorting interface, using .NET Core served via an AWS Serverless Application (SAM). A basic React user interface handles user input and application state.

Whilst this functionality could be achieved with JavaScript alone, I wanted to demonstrate knowledge of two key .NET Core interfaces: ICompareable and IComparer.

- AWS Lambda Repository (https://github.com/fsereno/app_awsDotNetCoreEntitySortApi)

- ICompareable (https://docs.microsoft.com/en-us/dotnet/api/system.icomparable?view=netcore-3.1)

- IComparer (https://docs.microsoft.com/en-us/dotnet/api/system.collections.icomparer?view=netcore-3.1)

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
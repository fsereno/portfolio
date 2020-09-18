# ASP.NET Core Web API Serverless Application with React Interface

With this application I have built a complex type sorting interface, using .Net Core served via an AWS Serverless Application (SAM). A basic React user interface handles user input and application state.

Whilst this functionality could be achieved with JavaScript alone, I wanted to demonstrate knowledge of two key .Net Core interfaces: ICompareable and IComparer.

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
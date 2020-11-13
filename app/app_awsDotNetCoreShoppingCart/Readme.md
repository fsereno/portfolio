# ASP.NET Core Shopping Cart API. A Serverless Application with React Interface

With this application I have built a simple shopping basket, each item consisting only of a primitive string value.

The basket can be modified using the individual request inputs. The user interface and application state are React driven with data modification being processed via .Net Core running on AWS Lambda.

-AWS Lambda Function Repository (https://github.com/fsereno/app_awsDotNetCoreShoppingCart)

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
# ASP.NET Core Natural String Sorting API. A Serverless Application with React Interface

With this application I have built a natural string sorting algorithm, using .Net Core served via an AWS Serverless Application (SAM). A basic React user interface handles user input and application state.

With this application I have implemented IComparer to handle the sorting logic, comparing chunks of alpha and numeric values in order to achieve a natural sort order.

A lot of research was undertaken for this application, with many permutations in order to overcome this simple, yet complex task. Made for a very enjoyable project!

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
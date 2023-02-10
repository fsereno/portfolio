# ASP.NET Core Natural String Sorting API. A Serverless Application with React Interface

With this application I have built a natural string sorting algorithm, using .NET Core served via an AWS Serverless Application (SAM). A basic React user interface handles user input and application state.

With this application I have implemented IComparer to handle the sorting logic, comparing chunks of alpha and numeric values in order to achieve a natural sort order.

Whilst this functionality could be achieved with JavaScript alone, I wanted to demonstrate knowledge of IComparer and the .NET Core framework along with AWS Lambda.

A lot of research was undertaken for this application, with many permutations in order to overcome this simple, yet complex task. Made for a very enjoyable project!

- AWS Lambda Repository (https://github.com/fsereno/app_awsDotNetCoreStringSortApi)

- IComparer (https://docs.microsoft.com/en-us/dotnet/api/system.collections.icomparer?view=netcore-3.1)

### Explanation ###

This project shows how to run an ASP.NET Core Web API project as an AWS Lambda exposed through Amazon API Gateway. The NuGet package [Amazon.Lambda.AspNetCoreServer](https://www.nuget.org/packages/Amazon.Lambda.AspNetCoreServer) contains a Lambda function that is used to translate requests from API Gateway into the ASP.NET Core framework and then the responses from ASP.NET Core back to API Gateway.
# ASP.NET Core Shopping Basket API. A Serverless Application with React Interface

With this application I have built a simple shopping basket, each item consisting only of a primitive string value.

The basket can be modified using the individual request inputs. The user interface and application state are React driven with data modification being processed via .NET Core running on AWS Lambda.

Whilst this functionality could be achieved with JavaScript alone, I wanted to explore AWS Lambda and .NET Core and the use of List collections. So the decision was made to go serverless compute.

- AWS Lambda Repository (https://github.com/fsereno/app_awsDotNetCoreShoppingCart)

### Explanation ###

This project shows how to run an ASP.NET Core Web API project as an AWS Lambda exposed through Amazon API Gateway. The NuGet package [Amazon.Lambda.AspNetCoreServer](https://www.nuget.org/packages/Amazon.Lambda.AspNetCoreServer) contains a Lambda function that is used to translate requests from API Gateway into the ASP.NET Core framework and then the responses from ASP.NET Core back to API Gateway.
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Amazon.Lambda.Core;
using Amazon.Lambda.TestUtilities;
using Amazon.Lambda.APIGatewayEvents;
using Newtonsoft.Json;
using aws;

namespace aws.Tests
{
    public class BasketControllerTests
    {
        [Fact]
        public async Task Test_Get_IndexZero_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Get-IndexZero-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Apple\"},{\"name\":\"Banana\"}]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_GetItem_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-GetItem-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Banana\"}]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_GetItem_Default_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-GetItem-Default-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Banana\"}]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_GetItem_OutOfRange_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-GetItem-OutOfRange-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Apple\"},{\"name\":\"Banana\"}]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_GetItem_NullReference_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-GetItem-NullRequest-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_Add_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Add-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Pear\"},{\"name\":\"Orange\"}]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_Add_NullRequest_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Add-NullRequest-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_Delete_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Delete-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Banana\"}]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_Delete_OutOfRange_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Delete-OutOfRange-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Apple\"},{\"name\":\"Banana\"}]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_Delete_NullRequest_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Delete-NullRequest-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_Update_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Update-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Apple\"},{\"name\":\"Orange\"}]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_Update_OutOfRange_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Update-OutOfRange-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Apple\"},{\"name\":\"Banana\"}]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_Update_NullRequest_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Update-NullRequest-Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }
    }
}
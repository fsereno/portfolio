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
        public async Task TestGet()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Get.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[\"Item 1\",\"Item 2\"]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task TestGetItem()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-GetItem.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("Item 2", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("text/plain; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task TestGetOutOfRange()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-GetOutOfRange.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("The item you are looking for does not exist", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("text/plain; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task TestAdd()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Add.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[\"Item 1\",\"Item 2\",\"Item 3\"]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task TestDelete()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Delete.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[\"Item 1\"]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task TestDeleteOutOfRange()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-DeleteOutOfRange.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[\"Item 1\",\"Item 2\"]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task TestUpdate()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-Update.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[\"Item 1\",\"Item 2a\"]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task TestUpdateOutOfRange()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-UpdateOutOfRange.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[\"Item 1\",\"Item 2\"]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task TestAddPost()
        {
            var lambdaFunction = new LambdaEntryPoint();
            var requestStr = File.ReadAllText("./SampleRequests/BasketController-AddPost.json");
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
    }
}

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
    public class EmployeeControllerTests
    {
        [Fact]
        public async Task Test_Sort_Salary_Desc_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();

            var requestStr = File.ReadAllText("./SampleRequests/EmployeeController-Test_Sort_Salary_Desc_Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Joe Bloggs\",\"salary\":10000,\"displaySalary\":\"£10,000.00\"},{\"name\":\"John Doe\",\"salary\":5000,\"displaySalary\":\"£5,000.00\"}]", response.Body);
            Assert.True(response.MultiValueHeaders.ContainsKey("Content-Type"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Headers"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Origin"));
            Assert.True(response.MultiValueHeaders.ContainsKey("Access-Control-Allow-Methods"));
            Assert.Equal("Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", response.MultiValueHeaders["Access-Control-Allow-Headers"][0]);
            Assert.Equal("*", response.MultiValueHeaders["Access-Control-Allow-Origin"][0]);
            Assert.Equal("application/json; charset=utf-8", response.MultiValueHeaders["Content-Type"][0]);
        }

        [Fact]
        public async Task Test_Sort_Salary_Asc_Post()
        {
            var lambdaFunction = new LambdaEntryPoint();

            var requestStr = File.ReadAllText("./SampleRequests/EmployeeController-Test_Sort_Salary_Asc_Post.json");
            var request = JsonConvert.DeserializeObject<APIGatewayProxyRequest>(requestStr);
            var context = new TestLambdaContext();
            var response = await lambdaFunction.FunctionHandlerAsync(request, context);

            Assert.Equal(200, response.StatusCode);
            Assert.Equal("[{\"name\":\"Joe Bloggs\",\"salary\":5000,\"displaySalary\":\"£5,000.00\"},{\"name\":\"John Doe\",\"salary\":10000,\"displaySalary\":\"£10,000.00\"}]", response.Body);
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

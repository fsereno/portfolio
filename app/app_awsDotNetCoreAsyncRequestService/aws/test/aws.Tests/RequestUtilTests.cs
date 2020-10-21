using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Amazon.Lambda.Core;
using Amazon.Lambda.TestUtilities;
using Amazon.Lambda.APIGatewayEvents;
using Newtonsoft.Json;
using aws;
using Utils;

namespace aws.Tests
{
    public class RequestUtilTests
    {
        private readonly RequestUtil _sut;
        public RequestUtilTests()
        {
            this._sut = new RequestUtil();
        }

        [Fact]
        public async Task Test_DoProcessesAsync()
        {
            var log = await this._sut.DoProcessesAsync();
            var result = this._sut.Join(log);
            Assert.Equal("Test", result);
        }
 
        [Fact]
        public void Test_DoProcesses()
        {
            var log = this._sut.DoProcesses();
            var result = this._sut.Join(log);
            Assert.Equal("Test", result);
        }
    }
}

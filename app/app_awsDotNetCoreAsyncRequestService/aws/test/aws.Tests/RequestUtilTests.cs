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
        public void Test_Processes_Async()
        {
            var log = new StringBuilder();
            var a = Task.Run(() => this._sut.DoProcessA(log));
            var b = Task.Run(() => this._sut.DoProcessB(log));
            var c = Task.Run(() => this._sut.DoProcessC(log));
            Task.WaitAll(new Task[]{ a, b, c });

            Assert.Equal("Test", log.ToString());
        }

        [Fact]
        public void Test_Processes()
        {
            var log = new StringBuilder();
            this._sut.DoProcessA(log);
            this._sut.DoProcessB(log);
            this._sut.DoProcessC(log);

            Assert.Equal("Test", log.ToString());
        }
    }
}

using System;
using Microsoft.AspNetCore.Mvc;
using Interfaces;
using Models;

namespace aws.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly IStringSortUtil _stringSortUtil;
        public ValuesController(IStringSortUtil stringSortUtil)
        {
            this._stringSortUtil = stringSortUtil;
        }
        [HttpPost("sort")]
        public SortResult Sort([FromBody] SortRequest request)
        {
            this.SetResponseHeaders();
            var result = request?.CommaSeperatedString ?? string.Empty;
            try
            {
                result = this._stringSortUtil.Sort(request.CommaSeperatedString);
            }
            catch(Exception exception)
            {
                throw new Exception($"Unable to sort request: {exception.Message}");
            }
            return new SortResult(){ Result = result };
        }

        private void SetResponseHeaders() {
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");
            Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}
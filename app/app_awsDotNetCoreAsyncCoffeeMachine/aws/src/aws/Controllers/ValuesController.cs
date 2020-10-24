﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Interfaces;
using Models;

namespace aws.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private ITaskRunner _coffeeMakerUtil;
        public ValuesController(ITaskRunner coffeeMakerUtil)
        {
            _coffeeMakerUtil = coffeeMakerUtil;
        }

        [HttpGet("RunAsync")]
        public async Task<List<LogItem>> RunAsync()
        {
            SetResponseHeaders();
            Log log;

            try
            {
                log = await _coffeeMakerUtil.RunAsync();
            }
            catch (Exception exception)
            {
                throw new Exception("Unable to run process: " + exception.Message);
            }
            return log?.Get();
        }

        [HttpGet("Run")]
        public List<LogItem> Run()
        {
            SetResponseHeaders();
            Log log;

            try
            {
                log = _coffeeMakerUtil.Run();
            }
            catch (Exception exception)
            {
                throw new Exception("Unable to run process: " + exception.Message);
            }
            return log?.Get();
        }

        private void SetResponseHeaders() {
            Response.Headers.Add("Access-Control-Allow-Methods", "GET");
            Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token");
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}

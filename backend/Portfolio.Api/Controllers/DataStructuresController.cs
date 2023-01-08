using System;
using System.IO;
using System.Collections;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Core.Types;
using Portfolio.Core.Services;
using Portfolio.DataStructures.Interfaces;
using Portfolio.DataStructures.Utils;
using Portfolio.DataStructures.Models;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class DataStructuresController : ControllerBase
{
    private readonly ILogger<DataStructuresController> _logger;
    private readonly ICollectionUtil<Queue> _queueUtil;
    private readonly ICollectionUtil<Stack> _stackUtil;

    public DataStructuresController(ILogger<DataStructuresController> logger, ICollectionUtil<Queue> queueUtil, ICollectionUtil<Stack> stackUtil)
    {
        _logger = logger;
        _queueUtil = queueUtil;
        _stackUtil = stackUtil;
    }

    [HttpGet("AddQueueItemAsync")]
    public IActionResult AddQueueItemAsync([FromBody] AddRequestBody data)
    {
        _logger.LogInformation("AddQueueItemAsync endpoint hit");

        string result = string.Empty;

        _logger.LogInformation("Adding item to the queue");

        var queue = _queueUtil.Create(data.Collection);
        _queueUtil.Add(queue, data.Item);

        _logger.LogInformation("Added item to the queue");

        return Ok(queue);
    }

    [HttpGet("RemoveQueueItemAsync")]
    public IActionResult RemoveQueueItemAsync([FromBody] RemoveRequestBody data)
    {
        _logger.LogInformation("RemoveQueueItemAsync endpoint hit");

        string result = string.Empty;

        _logger.LogInformation("Removing item to the queue");

        var queue = _queueUtil.Create(data.Collection);
        _queueUtil.Remove(queue);

        _logger.LogInformation("Removed item to the queue");

        return Ok(queue);
    }

    [HttpGet("AddStackItemAsync")]
    public IActionResult AddStackItemAsync([FromBody] AddRequestBody data)
    {
        _logger.LogInformation("AddStackItemAsync endpoint hit");

        string result = string.Empty;

        _logger.LogInformation("Adding item to the stack");

        var stack = _stackUtil.Create(data.Collection);
        _stackUtil.Add(stack, data.Item);

        _logger.LogInformation("Added item to the stack");

        return Ok(stack);
    }

    [HttpGet("RemoveStackItemAsync")]
    public IActionResult RemoveStackItemAsync([FromBody] RemoveRequestBody data)
    {
        _logger.LogInformation("RemoveStackItemAsync endpoint hit");

        string result = string.Empty;

        _logger.LogInformation("Removing item to the stack");

        var stack = _stackUtil.Create(data.Collection);
        _stackUtil.Remove(stack);

        _logger.LogInformation("Removed item to the stack");

        return Ok(stack);
    }
}

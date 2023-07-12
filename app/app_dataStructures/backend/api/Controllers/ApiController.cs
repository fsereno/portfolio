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

namespace Portfolio.DataStructures.Controllers;

/// <summary>
/// API controller for data structure operations.
/// </summary>
[ApiController]
[Route("[controller]")]
public class ApiController : ControllerBase
{
    private readonly ILogger<ApiController> _logger;
    private readonly ICollectionUtil<Queue<string>> _queueUtil;
    private readonly ICollectionUtil<Stack<string>> _stackUtil;

    /// <summary>
    /// Initializes a new instance of the ApiController class with the specified logger, queue utility, and stack utility.
    /// </summary>
    /// <param name="logger">The logger to use for logging messages.</param>
    /// <param name="queueUtil">The utility for operating on queues.</param>
    /// <param name="stackUtil">The utility for operating on stacks.</param>
    public ApiController(ILogger<ApiController> logger, ICollectionUtil<Queue<string>> queueUtil, ICollectionUtil<Stack<string>> stackUtil)
    {
        _logger = logger;
        _queueUtil = queueUtil;
        _stackUtil = stackUtil;
    }

    /// <summary>
    /// Adds an item to the queue asynchronously.
    /// </summary>
    /// <param name="data">The request body containing the collection name and item to add.</param>
    /// <returns>An IActionResult representing the result of the operation.</returns>
    [HttpPost("AddQueueItemAsync")]
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

    /// <summary>
    /// Removes an item from the queue asynchronously.
    /// </summary>
    /// <param name="data">The request body containing the collection name.</param>
    /// <returns>An IActionResult representing the result of the operation.</returns>
    [HttpPost("RemoveQueueItemAsync")]
    public IActionResult RemoveQueueItemAsync([FromBody] RemoveRequestBody data)
    {
        _logger.LogInformation("RemoveQueueItemAsync endpoint hit");

        string result = string.Empty;

        _logger.LogInformation("Removing item from the queue");

        var queue = _queueUtil.Create(data.Collection);
        _queueUtil.Remove(queue);

        _logger.LogInformation("Removed item from the queue");

        return Ok(queue);
    }

    /// <summary>
    /// Adds an item to the stack asynchronously.
    /// </summary>
    /// <param name="data">The request body containing the collection name and item to add.</param>
    /// <returns>An IActionResult representing the result of the operation.</returns>
    [HttpPost("AddStackItemAsync")]
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

    /// <summary>
    /// Removes an item from the stack asynchronously.
    /// </summary>
    /// <param name="data">The request body containing the collection name.</param>
    /// <returns>An IActionResult representing the result of the operation.</returns>
    [HttpPost("RemoveStackItemAsync")]
    public IActionResult RemoveStackItemAsync([FromBody] RemoveRequestBody data)
    {
        _logger.LogInformation("RemoveStackItemAsync endpoint hit");

        string result = string.Empty;

        _logger.LogInformation("Removing item from the stack");

        var stack = _stackUtil.Create(data.Collection);
        _stackUtil.Remove(stack);

        _logger.LogInformation("Removed item from the stack");

        return Ok(stack);
    }
}

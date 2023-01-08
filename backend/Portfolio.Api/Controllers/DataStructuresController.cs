using Microsoft.AspNetCore.Mvc;
using Portfolio.Core.Types;
using Portfolio.Core.Services;
using Portfolio.CoffeeMachine.Interfaces;
using Portfolio.CoffeeMachine.Utils;
using Portfolio.CoffeeMachine.Models;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class DataStructuresController : ControllerBase
{
    private readonly ILogger<TestController> _logger;
    private readonly TestService _testService;
    private readonly ITaskRunner _coffeeMakerUtil;

    public DataStructuresController(
        ILogger<TestController> logger,
        TestService testService,
        ITaskRunner coffeeMakerUtil)
    {
        _logger = logger;
        _testService = testService;
        _coffeeMakerUtil = coffeeMakerUtil;
    }

    [HttpGet("AddQueueItemAsync")]
    public async Task<IActionResult> AddQueueItemAsync()
    {
        log.LogInformation("AddQueueItemAsync endpoint hit");

        AddRequestBody data;
        string result = string.Empty;

        using (StreamReader streamReader = new StreamReader(req.Body))
        {
            var request = await streamReader.ReadToEndAsync();
            data = JsonConvert.DeserializeObject<AddRequestBody>(request);
        }

        if (data != null) {

            log.LogInformation("Adding item to the queue");

            var queue = _queueUtil.Create(data.Collection);
            _queueUtil.Add(queue, data.Item);

            result = JsonConvert.SerializeObject(queue);

            log.LogInformation("Added item to the queue");
        }

        return new OkObjectResult(result);
    }

    [HttpGet("RemoveQueueItemAsync")]
    public Task<IActionResult> RemoveQueueItemAsync()
    {
        log.LogInformation("RemoveQueueItemAsync endpoint hit");

        AddRequestBody data;
        string result = string.Empty;

        using (StreamReader streamReader = new StreamReader(req.Body))
        {
            var request = await streamReader.ReadToEndAsync();
            data = JsonConvert.DeserializeObject<AddRequestBody>(request);
        }

        if (data != null) {

            log.LogInformation("Removing item to the queue");

            var queue = _queueUtil.Create(data.Collection);
            _queueUtil.Remove(queue);

            result = JsonConvert.SerializeObject(queue);

            log.LogInformation("Removed item to the queue");
        }

        return new OkObjectResult(result);
    }

    [HttpGet("AddStackItemAsync")]
    public async Task<IActionResult> AddStackItemAsync()
    {
        log.LogInformation("AddStackItemAsync endpoint hit");

        AddRequestBody data;
        string result = string.Empty;

        using (StreamReader streamReader = new StreamReader(req.Body))
        {
            var request = await streamReader.ReadToEndAsync();
            data = JsonConvert.DeserializeObject<AddRequestBody>(request);
        }

        if (data != null) {

            log.LogInformation("Adding item to the stack");

            var stack = _stackUtil.Create(data.Collection);
            _stackUtil.Add(stack, data.Item);

            result = JsonConvert.SerializeObject(stack);

            log.LogInformation("Added item to the stack");
        }

        return new OkObjectResult(result);
    }

    [HttpGet("RemoveStackItemAsync")]
    public Task<IActionResult> RemoveStackItemAsync()
    {
        log.LogInformation("RemoveStackItemAsync endpoint hit");

        AddRequestBody data;
        string result = string.Empty;

        using (StreamReader streamReader = new StreamReader(req.Body))
        {
            var request = await streamReader.ReadToEndAsync();
            data = JsonConvert.DeserializeObject<AddRequestBody>(request);
        }

        if (data != null) {

            log.LogInformation("Removing item to the stack");

            var stack = _stackUtil.Create(data.Collection);
            _stackUtil.Remove(stack);

            result = JsonConvert.SerializeObject(stack);

            log.LogInformation("Removed item to the stack");
        }

        return new OkObjectResult(result);
        }
    }
}

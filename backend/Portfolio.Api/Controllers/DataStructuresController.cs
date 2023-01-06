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

    [HttpGet("RunAsync")]
    public async Task<List<LogItem>> RunAsync()
    {
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
}

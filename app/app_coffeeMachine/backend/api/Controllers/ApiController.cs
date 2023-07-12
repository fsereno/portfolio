using Microsoft.AspNetCore.Mvc;
using Portfolio.Core.Types;
using Portfolio.Core.Services;
using Portfolio.CoffeeMachine.Interfaces;
using Portfolio.CoffeeMachine.Utils;
using Portfolio.CoffeeMachine.Models;

namespace Portfolio.CoffeeMachine.Controllers;

/// <summary>
/// API controller for Coffee Machine operations.
/// </summary>
[ApiController]
[Route("[controller]")]
public class ApiController : ControllerBase
{
    private readonly ILogger<ApiController> _logger;
    private readonly TestService _testService;
    private readonly ITaskRunner _coffeeMakerUtil;

    public ApiController(
        ILogger<ApiController> logger,
        TestService testService,
        ITaskRunner coffeeMakerUtil)
    {
        _logger = logger;
        _testService = testService;
        _coffeeMakerUtil = coffeeMakerUtil;
    }

    /// <summary>
    /// Executes the Coffee Maker process asynchronously and returns the log items.
    /// </summary>
    /// <returns>A list of log items generated during the process.</returns>
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

    /// <summary>
    /// Executes the Coffee Maker process synchronously and returns the log items.
    /// </summary>
    /// <returns>A list of log items generated during the process.</returns>
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

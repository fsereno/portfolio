using System;
using System.IO;
using System.Collections;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Core.Types;
using Portfolio.Core.Services;
using Portfolio.UniqueDataEntry.Interfaces;
using Portfolio.UniqueDataEntry.Utils;
using Portfolio.UniqueDataEntry.Models;

namespace Portfolio.UniqueDataEntry.Controllers;

[ApiController]
[Route("[controller]")]
public class ApiController : ControllerBase
{
    private readonly ILogger<ApiController> _logger;
    private IUniqueDataEntryUtil _uniqueDataEntryUtil;

    public ApiController(ILogger<ApiController> logger, IUniqueDataEntryUtil uniqueDataEntryUtil)
    {
        _logger = logger;
        _uniqueDataEntryUtil = uniqueDataEntryUtil;
    }

    [HttpPost("CanItemBeAddedAsync")]
    public IActionResult CanItemBeAddedAsync([FromBody] RequestBody data)
    {
         _logger.LogInformation("CanItemBeAddedAsync endpoint hit.");

        var equalityComparer = new Item.ItemEqualityComparer();

        var dictionary = data.Items.ToDictionary(x => x, x => x.FirstName, equalityComparer);
        var result = _uniqueDataEntryUtil.CanItemBeAdded(dictionary, data.Item);

        _logger.LogInformation($"Result is: {result}");

        return Ok(result);
    }
}

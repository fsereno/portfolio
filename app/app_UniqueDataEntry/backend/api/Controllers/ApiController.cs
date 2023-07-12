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

/// <summary>
/// API controller for unique data entry operations.
/// </summary>
[ApiController]
[Route("[controller]")]
public class ApiController : ControllerBase
{
    private readonly ILogger<ApiController> _logger;
    private IUniqueDataEntryUtil _uniqueDataEntryUtil;

    /// <summary>
    /// Initializes a new instance of the ApiController class with the specified logger and unique data entry utility.
    /// </summary>
    /// <param name="logger">The logger to use for logging messages.</param>
    /// <param name="uniqueDataEntryUtil">The utility for unique data entry operations.</param>
    public ApiController(ILogger<ApiController> logger, IUniqueDataEntryUtil uniqueDataEntryUtil)
    {
        _logger = logger;
        _uniqueDataEntryUtil = uniqueDataEntryUtil;
    }

    /// <summary>
    /// Checks if an item can be added based on uniqueness criteria.
    /// </summary>
    /// <param name="data">The request body containing the items and the item to be added.</param>
    /// <returns>A boolean indicating whether the item can be added.</returns>
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

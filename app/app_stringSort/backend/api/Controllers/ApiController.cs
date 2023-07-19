using Microsoft.AspNetCore.Mvc;
using Portfolio.Core.Types;
using Portfolio.Core.Services;
using Portfolio.StringSort.Models;
using Portfolio.StringSort.Interfaces;
using Portfolio.StringSort.Utils;

namespace Portfolio.StringSort.Controllers;

/// <summary>
/// API controller for string sorting operations.
/// </summary>
[ApiController]
[Route("[controller]")]
public class ApiController : ControllerBase
{
    private readonly ILogger<ApiController> _logger;
    private readonly IStringSortUtil _stringSortUtil;

    /// <summary>
    /// Initializes a new instance of the ApiController class with the specified logger and string sort utility.
    /// </summary>
    /// <param name="logger">The logger to use for logging messages.</param>
    /// <param name="stringSortUtil">The utility for sorting strings.</param>
    public ApiController(
        ILogger<ApiController> logger, IStringSortUtil stringSortUtil)
    {
        _logger = logger;
        _stringSortUtil = stringSortUtil;
    }

    /// <summary>
    /// Sorts the comma-separated string.
    /// </summary>
    /// <param name="request">The request containing the comma-separated string to sort.</param>
    /// <returns>A SortResult object containing the sorted result.</returns>
    [HttpPost("sort")]
    public SortResult Sort([FromBody] SortRequest request)
    {
        var result = _stringSortUtil.Sort(request.CommaSeperatedString);
        return new SortResult(){ Result = result };
    }
}

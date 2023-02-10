using Microsoft.AspNetCore.Mvc;
using Portfolio.Core.Types;
using Portfolio.Core.Services;
using Portfolio.StringSort.Models;
using Portfolio.StringSort.Interfaces;
using Portfolio.StringSort.Utils;

namespace Portfolio.StringSort.Controllers;

[ApiController]
[Route("[controller]")]
public class ApiController : ControllerBase
{
    private readonly ILogger<ApiController> _logger;
    private readonly IStringSortUtil _stringSortUtil;

    public ApiController(
        ILogger<ApiController> logger, IStringSortUtil stringSortUtil)
    {
        _logger = logger;
        _stringSortUtil = stringSortUtil;
    }

    [HttpPost("sort")]
    public SortResult Sort([FromBody] SortRequest request)
    {
        var result = _stringSortUtil.Sort(request.CommaSeperatedString);
        return new SortResult(){ Result = result };
    }
}

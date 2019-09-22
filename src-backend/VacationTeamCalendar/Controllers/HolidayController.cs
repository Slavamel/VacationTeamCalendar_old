using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using VacationTeamCalendar.BLL.Services.HolidaysRetriever;

namespace VacationTeamCalendar.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class HolidayController : Controller
    {
        private readonly IHolidaysRetriever _holidaysRetriever;

        public HolidayController(IHolidaysRetriever holidaysRetriever)
        {
            _holidaysRetriever = holidaysRetriever;
        }

        [HttpGet("get-country-holidays/{year}")]
        public IActionResult Index(int year)
        {
            var holidays = _holidaysRetriever.GetCountryHolidays(year);
            return Ok(holidays);
        }
    }
}
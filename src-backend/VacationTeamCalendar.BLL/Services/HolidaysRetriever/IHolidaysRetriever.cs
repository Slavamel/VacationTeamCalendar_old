using VacationTeamCalendar.Core.Models;

namespace VacationTeamCalendar.BLL.Services.HolidaysRetriever
{
    public interface IHolidaysRetriever
    {
        HolidayView[] GetCountryHolidays(int year);

        UserView[] GetAllUsersHolidays(int year);
    }
}
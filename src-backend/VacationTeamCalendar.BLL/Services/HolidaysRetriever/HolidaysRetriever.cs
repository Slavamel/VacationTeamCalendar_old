using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using VacationTeamCalendar.Core.Enums;
using VacationTeamCalendar.Core.Models;
using VacationTeamCalendar.DAL.Contexts;
using VacationTeamCalendar.DAL.Models;

namespace VacationTeamCalendar.BLL.Services.HolidaysRetriever
{
    public class HolidaysRetriever : IHolidaysRetriever
    {
        private readonly MainDbContext _mainDb;

        public HolidaysRetriever(MainDbContext mainDb)
        {
            _mainDb = mainDb;
        }

        public HolidayView[] GetCountryHolidays(int year)
        {
            var holidays = _mainDb.Holidays.Where(h => h.Year == year && h.IsCountryHoliday);
            var holidaysView = GetHolidayViews(holidays).ToArray();

            return holidaysView;
        }

        public UserView[] GetAllUsersHolidays(int year)
        {
            var users = _mainDb.Users.Include(u => u.Holidays).ToArray();

            var usersView = users.Select(u => new UserView
            {
                Id = u.Id,
                Name = u.Name,
                Color = u.HexColor,
                Holidays = GetHolidayViews(u.Holidays).ToArray()
            }).ToArray();

            return usersView;
        }

        private IList<HolidayView> GetHolidayViews(IEnumerable<HolidayDbModel> holidaysDb)
        {
            var holidaysView = new List<HolidayView>();

            foreach (var holiday in holidaysDb)
            {
                var startDate = holiday.From;
                while (startDate <= holiday.To)
                {
                    var holidayView = holidaysView.FirstOrDefault(hv => (int)hv.Month == startDate.Month);
                    if (holidayView == null)
                    {
                        holidaysView.Add(new HolidayView
                        {
                            Month = (Month)startDate.Month,
                            Days = new List<int>()
                        });
                    }

                    holidaysView.First(hv => (int)hv.Month == startDate.Month).Days.Add(startDate.Day);
                    startDate = startDate.AddDays(1);
                }
            }

            return holidaysView;
        }
    }
}
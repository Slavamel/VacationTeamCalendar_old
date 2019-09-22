using System.Collections.Generic;
using System.Linq;
using VacationTeamCalendar.Core.Enums;
using VacationTeamCalendar.Core.Models;
using VacationTeamCalendar.DAL.Contexts;

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
            var holidaysView = new List<HolidayView>();

            foreach (var holiday in holidays)
            {
                var startDate = holiday.From;
                var holidayView = holidaysView.FirstOrDefault(hv => (int) hv.Month == startDate.Month);

                if (holidayView == null)
                {
                    holidaysView.Add(new HolidayView()
                    {
                        Month = (Month)holiday.From.Month,
                        Days = new List<int>()
                    });
                }

                while (startDate <= holiday.To)
                {
                    holidaysView.First(hv => (int) hv.Month == startDate.Month).Days.Add(startDate.Day);
                    startDate = startDate.AddDays(1);
                }
            }

            return holidaysView.ToArray();
        }
    }
}
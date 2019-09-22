using System.Collections.Generic;
using VacationTeamCalendar.Core.Enums;

namespace VacationTeamCalendar.Core.Models
{
    public class HolidayView
    {
        public Month Month { get; set; }

        public List<int> Days { get; set; }
    }
}
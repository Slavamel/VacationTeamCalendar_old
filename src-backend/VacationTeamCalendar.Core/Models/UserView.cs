namespace VacationTeamCalendar.Core.Models
{
    public class UserView
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Color { get; set; }

        public HolidayView[] Holidays { get; set; }
    }
}
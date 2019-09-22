using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VacationTeamCalendar.DAL.Models
{
    [Table("Holidays")]
    public class HolidayDbModel
    {
        public int Id { get; set; }

        [Range(2019, 2100)]
        public int Year { get; set; }

        public DateTime From { get; set; }

        public DateTime To { get; set; }

        public bool IsCountryHoliday { get; set; }

        public int? UserId { get; set; }
        public UserDbModel User { get; set; }
    }
}
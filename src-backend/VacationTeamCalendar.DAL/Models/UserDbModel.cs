using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VacationTeamCalendar.DAL.Models
{
    [Table("Users")]
    public class UserDbModel
    {
        public int Id { get; set; }

        [MaxLength(50), Required]
        public string Login { get; set; }

        [MaxLength(50), Required]
        public string Name { get; set; }

        [MaxLength(20), Required]
        public string HexColor { get; set; }

        public IEnumerable<HolidayDbModel> Holidays { get; set; }
    }
}

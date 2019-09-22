using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VacationTeamCalendar.DAL.Models
{
    [Table("Users")]
    public class UserDbModel
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string Login { get; set; }

        [MaxLength(50), Required]
        public string Name { get; set; }
    }
}

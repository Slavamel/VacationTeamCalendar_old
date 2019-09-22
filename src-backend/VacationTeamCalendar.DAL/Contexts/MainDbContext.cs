using Microsoft.EntityFrameworkCore;
using VacationTeamCalendar.DAL.Models;

namespace VacationTeamCalendar.DAL.Contexts
{
    public class MainDbContext : DbContext
    {
        public MainDbContext(DbContextOptions<MainDbContext> options)
            : base(options)
        {
        }

//        public DbSet<UserDbModel> Users { get; set; }
        public DbSet<HolidayDbModel> Holidays { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MemberTool.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace MemberTool.Models
{
    public class MemberToolContext : DbContext
    {
        public MemberToolContext(DbContextOptions<MemberToolContext> options) : base(options)
        {
        }
        
        public DbSet<Person> Persons { get; set; }
        public DbSet<PGRole> Roles { get; set; }
        public DbSet<CurrentProject> CurrentProjects { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>().ToTable("Person");
            modelBuilder.Entity<PGRole>().ToTable("Role");
            modelBuilder.Entity<CurrentProject>().ToTable("Project");
        }

        public override int SaveChanges()
        {
            UpdateTimestamps();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            UpdateTimestamps();
            return base.SaveChangesAsync(cancellationToken);
        }


        private void UpdateTimestamps()
        {
            var entries = ChangeTracker.Entries<BaseEntity>();
            foreach (var entry in entries)
            {
                var entity = entry.Entity;

                var now = DateTime.UtcNow;
                switch (entry.State)
                {
                    case EntityState.Modified:
                        entity.UpdatedAt = now;
                        break;

                    case EntityState.Added:
                        entity.CreatedAt = now;
                        entity.UpdatedAt = now;
                        break;
                    case EntityState.Detached:
                    case EntityState.Unchanged:
                    case EntityState.Deleted:
                    default:
                        //Ignore timestamps
                        break;
                }
            }
        }
    }
}

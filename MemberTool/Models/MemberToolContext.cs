using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JetBrains.Annotations;
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
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionAnswer> Answers { get; set; }
    }
}

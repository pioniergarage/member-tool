using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemberTool.Models
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<MemberToolContext>
    {
        public MemberToolContext CreateDbContext(string[] args)
        {
            // Build config
            IConfiguration config = new ConfigurationBuilder()
                .Build();

            var optionsBuilder = new DbContextOptionsBuilder<MemberToolContext>();

            // Get connection string
            var dbConnectionString = Environment.GetEnvironmentVariable("MYSQLCONNSTR_localdb");
            if (string.IsNullOrEmpty(dbConnectionString))
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=member-tool;Trusted_Connection=True;MultipleActiveResultSets=true");
            else
                optionsBuilder.UseMySql(AzureMySqlHelper.ToMySQLStandard(dbConnectionString), mySqlOptions =>
                {
                    mySqlOptions.ServerVersion(new Version(5, 7, 9), ServerType.MySql);
                });
            var connectionString = config.GetConnectionString(nameof(MemberToolContext));

            return new MemberToolContext(optionsBuilder.Options);
        }
    }
}

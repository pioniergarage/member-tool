using System.Linq;
using MemberTool.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace MemberTool.Models
{
    public static class EntityExtensions
    {
        public static IQueryable<Person> IncludeAll(this IQueryable<Person> query)
        {
            return query
                .Include(p => p.CurrentPGRole)
                .Include(p => p.PGRoles)
                .Include(p => p.Answers)
                .ThenInclude(a => a.Question);
        }
    }
}

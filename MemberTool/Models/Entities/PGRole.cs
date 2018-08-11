using System.ComponentModel.DataAnnotations;

namespace MemberTool.Models.Entities
{
    public class PGRole : BaseEntity
    {
        [Required]
        public string Name { get; set; }
    }
}

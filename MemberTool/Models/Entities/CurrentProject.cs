using System.ComponentModel.DataAnnotations;

namespace MemberTool.Models.Entities
{
    public class CurrentProject : BaseEntity
    {
        [Required]
        public string Name { get; set; }

        [Url]
        public string Url { get; set; }
    }
}

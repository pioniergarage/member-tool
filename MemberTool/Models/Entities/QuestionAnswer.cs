using System.ComponentModel.DataAnnotations;

namespace MemberTool.Models.Entities
{
    public class QuestionAnswer : BaseEntity
    {
        [Required]
        public virtual Question Question { get; set; }
        
        [Required]
        public string Answer { get; set; }
    }
}

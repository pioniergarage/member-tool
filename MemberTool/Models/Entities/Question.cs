using System.ComponentModel.DataAnnotations;

namespace MemberTool.Models.Entities
{
    public class Question : BaseEntity
    {
        [Required]
        public string QuestionString { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Mobile.Server;

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

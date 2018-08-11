using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MemberTool.Models.Entities
{
    public class Person : BaseEntity
    {
        [Required]
        public string Name { get; set; }
        
        public virtual PGRole CurrentPGRole { get; set; }
        
        public virtual ICollection<PGRole> PGRoles { get; set; }

        public DateTime MemberSince { get; set; }

        [Url]
        public string UserImgPath { get; set; }

        [Url]
        public string BackgroundImgPath { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public string Description { get; set; }

        public string LinkedIn { get; set; }

        public virtual ICollection<QuestionAnswer> Answers { get; set; }
    }
}

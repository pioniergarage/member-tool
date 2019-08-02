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

        public DateTime MemberSince { get; set; }

        [Url]
        public string UserImgPath { get; set; }

        public virtual ICollection<CurrentProject> CurrentProjects { get; set; }

        public virtual ICollection<PGRole> PGRoles { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public string LinkedIn { get; set; }

        public string Location { get; set; }
    }
}

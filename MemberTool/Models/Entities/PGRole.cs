using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Mobile.Server;

namespace MemberTool.Models.Entities
{
    public class PGRole : BaseEntity
    {
        [Required]
        public string Name { get; set; }
    }
}

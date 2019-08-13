using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace MemberTool.Models.Entities
{
    public class BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }
        
        [JsonIgnore]
        public DateTimeOffset? CreatedAt { get; set; }
        
        [JsonIgnore]
        public DateTimeOffset? UpdatedAt { get; set; }
        
        [JsonIgnore]
        public bool Deleted { get; set; }
    }
}

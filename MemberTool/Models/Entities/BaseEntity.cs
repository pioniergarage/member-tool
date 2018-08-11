using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Mobile.Server.Tables;
using Newtonsoft.Json;

namespace MemberTool.Models.Entities
{
    public class BaseEntity
    {
        [Key]
        [TableColumn(TableColumnType.Id)]
        public string Id { get; set; }

        [Timestamp]
        [TableColumn(TableColumnType.Version)]
        [JsonIgnore]
        public byte[] Version { get; set; }

        [Index(IsClustered = true)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [TableColumn(TableColumnType.CreatedAt)]
        [JsonIgnore]
        public DateTimeOffset? CreatedAt { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        [TableColumn(TableColumnType.UpdatedAt)]
        [JsonIgnore]
        public DateTimeOffset? UpdatedAt { get; set; }

        [TableColumn(TableColumnType.Deleted)]
        [JsonIgnore]
        public bool Deleted { get; set; }
    }
}

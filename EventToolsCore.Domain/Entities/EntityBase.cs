using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace EventToolsCore.Domain
{
    public abstract class EntityBase
    {
        protected EntityBase(IEnumerable<string> entityType)
        {
            EntityType = entityType.ToArray();
        }
        protected EntityBase(string entityType) : this(new string[] { entityType }) { }

        public Identifier Id { get; set; }

        public string DisplayName { get; set; }

        [JsonProperty("Type")]
        public string[] EntityType { get; set; }
    }
}

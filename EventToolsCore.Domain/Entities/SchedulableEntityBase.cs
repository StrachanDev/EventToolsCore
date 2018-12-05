using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EventToolsCore.Domain
{
    public abstract class SchedulableEntityBase : EntityBase
    {
        private static string[] SchedulableEntityType = new string[] { "Scheduleable" };

        protected SchedulableEntityBase(IEnumerable<string> entityType) : base(SchedulableEntityType.Concat(entityType)) { }
        protected SchedulableEntityBase(string entityType) : base(SchedulableEntityType.Concat(new string[] { entityType })) { }

        public DateTimeOffset StartTime { get; set; }
        public DateTimeOffset? EndTime { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Domain
{
    public abstract class SchedulableEntityBase : EntityBase
    {
        public DateTimeOffset StartTime { get; set; }
        public DateTimeOffset? EndTime { get; set; }
    }
}

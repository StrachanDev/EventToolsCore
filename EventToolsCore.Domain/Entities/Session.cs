using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Domain
{
    public class Session : SchedulableEntityBase
    {
        public Session() : base(nameof(Session)) { }

        public string Code { get; set; }
        public string Description { get; set; }

        public Person[] Speakers { get; set; }
    }
}

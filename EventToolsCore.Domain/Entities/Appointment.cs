using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Domain
{
    public class Appointment : SchedulableEntityBase
    {
        public Appointment() : base(nameof(Appointment)) { }

        public Person Owner { get; set; }

        public Location Location { get; set; } 
    }
}

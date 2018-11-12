using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Domain
{
    public class Appointment : SchedulableEntityBase
    {
        public Person Owner { get; set; }

        public Location Location { get; set; } 
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Domain
{
    public class Location : EntityBase
    {
        public Location() : base(nameof(Location)) { }

        public string PositionId { get; set; }
    }
}

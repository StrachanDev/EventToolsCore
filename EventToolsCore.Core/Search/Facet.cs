using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Core.Search
{
    public class Facet
    {
        public string Id { get; set; }

        public string DisplayName { get; set; }

        public ulong Count { get; set; }
    }
}

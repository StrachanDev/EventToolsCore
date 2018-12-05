using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Domain.ClientDtos
{
    public class SearchCriteria
    {
        public string Text;

        public SearchFacet[] Facets; 

        public int Page;
    }
}

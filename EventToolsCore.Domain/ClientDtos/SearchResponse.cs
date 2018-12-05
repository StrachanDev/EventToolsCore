using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Domain.ClientDtos
{
    public class SearchResponse
    {
        public EntityBase[] Entities;

        public FacetCount[] Facets;

        public int TotalCount;

        public int CurrentPage;

        public string PreviousPageToken;

        public string NextPageToken;
    }
}

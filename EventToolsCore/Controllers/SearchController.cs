using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventToolsCore.Core.Search;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EventToolsCore.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public SearchParameters Get()
        {
            // Get's the search parameters for global searches
            return new SearchParameters{ Facets = new Facet[0] };
        }

        // GET api/<controller>/EntityType
        [HttpGet("{entityType}")]
        public SearchParameters Get(string entityType)
        {
            // Get's the search parameters for the specified entity type
            return new SearchParameters { Facets = new Facet[0] };
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
            // Perform a global search
        }

        // POST api/<controller>/EntityType
        [HttpPost("{entityType}")]
        public void Post(string entityType, [FromBody]string searchParameters)
        {
            // Perform a search of the specified entity type
        }
    }
}

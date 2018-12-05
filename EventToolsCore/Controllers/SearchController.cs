using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventToolsCore.Core.Search;
using EventToolsCore.Domain;
using EventToolsCore.Domain.ClientDtos;
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

        // POST api/search
        [HttpPost]
        public JsonResult Post([FromBody]SearchCriteria criteria)
        {
            // Perform a global search
            return Json(new SearchResponse
            {
                CurrentPage = 1,
                TotalCount = 10,
                NextPageToken = string.Empty,
                PreviousPageToken = string.Empty,
                Facets = new FacetCount[]
                {
                    new FacetCount{ Category = "People", Value = "Happy", Count = 17 },
                    new FacetCount{ Category = "People", Value = "Sad", Count = 3 }
                },
                Entities = new EntityBase[]
                {
                    new Person
                    {
                        Id = Guid.NewGuid().ToString(),
                        DisplayName = "Bob Measure"
                    },
                    new Person
                    {
                        Id = Guid.NewGuid().ToString(),
                        DisplayName = "Plumb Jones"
                    },
                    new Session
                    {
                        Id = Guid.NewGuid().ToString(),
                        DisplayName = "Admin updates in Microsoft 365 - New ways to save you time",
                        Description = @"Get a first look at the unified admin experience for Microsoft 365 which gives you a common entry point for Windows, Office 365 and Enterprise Management + Security. We’ll show you updates to the Admin Center, where you can customize your view with tasks, insights, and usage reporting, a more streamlined user-centric management experiences with your most common tasks and most user controls available per user in one consolidated view. See intelligent recommendations to guide you through first-time setup and ongoing configuration of Microsoft 365 and related services. 
Be part of our Microsoft Mechanics studio audience during filming and also earn a chance to be part of our exclusive prize draw.  www.microsoft.com/mechanics ",
                        Code = "THR2318",
                        Speakers = new Person[] { new Person { Id = Guid.NewGuid().ToString(), DisplayName = "Brian Besand" } }
                    },
                    new Session
                    {
                        Id = Guid.NewGuid().ToString(),
                        DisplayName = "Better teamwork, together: SharePoint and OneDrive integration with Microsoft Teams",
                        Description = @"SharePoint connects the workplace and powers content collaboration. OneDrive connects you with all your files in Office 365. Together, SharePoint, OneDrive and Teams are greater than the sum of their parts. Join us for an overview of how these products interact with each other and learn about latest integrations we are working on to bring the richness of SharePoint directly into Teams experiences and vice versa. We will also look at teamwork use cases beyond file sharing, including shared news, lists, and apps. And we’ll explore how to structure teams and projects with hub sites.",
                        Code = "BRK2102",
                        Speakers = new Person[] 
                        {
                            new Person { Id = Guid.NewGuid().ToString(), DisplayName = "Dan Holme" },
                            new Person { Id = Guid.NewGuid().ToString(), DisplayName = "Tejas Mehta" },
                            new Person { Id = Guid.NewGuid().ToString(), DisplayName = "Mark Kashman" },
                            new Person { Id = Guid.NewGuid().ToString(), DisplayName = "Jeremy Mazner" }
                        }
                    },
                    new Meeting
                    {
                        Id = Guid.NewGuid().ToString(),
                        DisplayName = "Playing in Traffic on my own",
                        StartTime = DateTimeOffset.UtcNow.AddDays(3),
                        EndTime = DateTimeOffset.UtcNow.AddDays(3).AddHours(1),
                        Owner = new Person { Id = Guid.NewGuid().ToString(), DisplayName = "Dan Holme" },
                        Location = new Location{ Id = Guid.NewGuid().ToString(), DisplayName = "Central Perk" }
                    },
                    new Meeting
                    {
                        Id = Guid.NewGuid().ToString(),
                        DisplayName = "Playing in Traffic with friends",
                        StartTime = DateTimeOffset.UtcNow.AddDays(3),
                        EndTime = DateTimeOffset.UtcNow.AddDays(3).AddHours(1),
                        Owner = new Person { Id = Guid.NewGuid().ToString(), DisplayName = "Dan Holme" },
                        Location = new Location{ Id = Guid.NewGuid().ToString(), DisplayName = "Central Perk" },
                        Invitees = new MeetingInvitee[]
                        {
                            new MeetingInvitee{ Invitee = new Person { Id = Guid.NewGuid().ToString(), DisplayName = "Mark Kashman" }, Response = Meeting.Response.Accepted },
                            new MeetingInvitee{ Invitee = new Person { Id = Guid.NewGuid().ToString(), DisplayName = "Jeremy Mazner" }, Response = Meeting.Response.Tentative }
                        }
                    }
                }
            });
        }

        // POST api/<controller>/EntityType
        [HttpPost("{entityType}")]
        public void Post(string entityType, [FromBody]string searchParameters)
        {
            // Perform a search of the specified entity type
        }
    }
}

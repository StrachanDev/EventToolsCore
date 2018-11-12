using System;
using System.Collections.Generic;
using EventToolsCore.Domain;
using EventToolsCore.Workload.Meetings.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace EventToolsCore.Workload.Meetings
{
    [Route("api/[controller]")]
    public class MeetingController : Controller
    {
        private IMeetingCoordinator m_meetingCoordinator;

        public MeetingController(IMeetingCoordinator meetingCoordinator)
        {
            m_meetingCoordinator = meetingCoordinator ?? throw new ArgumentNullException(nameof(meetingCoordinator));
        }

        // GET: api/meeting/{id}
        [HttpGet("{id}")]
        public string Get(Identifier id)
        {
            return "meeting data";
        }

        [HttpPost]
        public Meeting AddMeeting([FromBody] Identifier ownerId, string name, string description, DateTimeOffset startTime, TimeSpan length, Identifier locationId, IEnumerable<Identifier> invitees)
        {
            return null;
        }

        // DELETE: api/meeting/{id}
        // Cancels the meeting.  Only valid if the owner of the meeting is calling this method.
        [HttpDelete("id")]
        public void CancelMeeting(Identifier id)
        {

        }
    }
}

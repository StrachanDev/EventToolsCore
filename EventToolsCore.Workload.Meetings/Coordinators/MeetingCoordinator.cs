using EventToolsCore.Domain;
using EventToolsCore.Workload.Meetings.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Workload.Meetings.Coordinators
{
    public class MeetingCoordinator : IMeetingCoordinator
    {
        public Meeting AddMeeting(Person owner, IList<Person> invitees, Location location, DateTimeOffset startTime, TimeSpan length)
        {
            // Add a new instance of a meeting
            return null;
        }

        public void CancelMeeting(Identifier id)
        {
            // Find the meeting and cancel it
        }

        public void ProcessMeetingResponse(Identifier id, Person invitee, Meeting.Response response)
        {

        }
    }
}

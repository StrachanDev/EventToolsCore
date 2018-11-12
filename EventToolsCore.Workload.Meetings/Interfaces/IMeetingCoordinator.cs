using System;
using System.Collections.Generic;
using EventToolsCore.Domain;

namespace EventToolsCore.Workload.Meetings.Interfaces
{
    public interface IMeetingCoordinator
    {
        Meeting AddMeeting(Person owner, IList<Person> invitees, Location location, DateTimeOffset startTime, TimeSpan length);

        void CancelMeeting(Identifier id);

        void ProcessMeetingResponse(Identifier id, Person invitee, Meeting.Response response);
    }
}

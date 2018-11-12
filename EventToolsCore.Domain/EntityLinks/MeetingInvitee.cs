using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Domain
{
    public class MeetingInvitee
    {
        public Person Invitee { get; set; }

        public Meeting.Response Response { get; set; }

        public DateTimeOffset LastChanged { get; set; }
    }
}

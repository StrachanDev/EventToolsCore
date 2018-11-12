using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Domain
{
    public class Meeting : Appointment
    {
        public enum Response
        {
            Invalid,
            Pending,
            Accepted,
            Declined,
            Cancelled,
            Tentative
        }

        public IEnumerable<MeetingInvitee> Invitees { get; set; }
    }
}

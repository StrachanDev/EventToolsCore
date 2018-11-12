using EventToolsCore.Workload.Meetings.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace EventToolsCore.Workload.Meetings
{
    static class Startup
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IMeetingCoordinator, Meetings.Coordinators.MeetingCoordinator>();
        }
    }
}

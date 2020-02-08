using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace CoreChat
{
    public class Chat : Hub
    {
        public Task ChatHubSend(string message)
        {
            return Clients.All.SendAsync("Send", message);
        }
    }
}


    let connection = new signalR.HubConnectionBuilder()
    .withUrl("/ChatRoom")
    .configureLogging(signalR.LogLevel.Information)
    .build();

        connection.start().then(function () {
        console.log("connected");
    });

    connection.on('send', (data) => {
        DisplayMessagesDiv = document.getElementById("DisplayMessages");
    DisplayMessagesDiv.innerHTML += "<li>" + data + "</li>";
    });

    function sendMessage() {
        var msg = document.getElementById("txtMessage").value;
        connection.invoke('ChatHubSend', msg);
        document.getElementById("txtMessage").value = '';
    }

var input = document.getElementById("txtMessage");
// Enable button click on ENTER KEY
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
        event.preventDefault();
    document.getElementById("btnsendMessage").click();
}
});

var server = io.connect("http://localhost:8000");

server.on('connect', function(data){
   var userName = prompt("Enter your name please!", null);
   server.emit("join", userName);
});

server.on('feedbackByOthers', function(name, feedback){
   appendFeedback(name, feedback);
});
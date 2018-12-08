var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

users = [];
connections = [];


app.get('/', function(req, res){
 	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('someone connected');

	connections.push(socket);
	console.log('Connected: %s sockets connected ', connections.length);
	
    socket.username = "Anonymous";
	
	//send message
    socket.on('chat message', function(message){
        
		console.log(message);
        
        
		io.emit('chat message', socket.username + ':' + message);
	});
});

http.listen(8080, function(){
    
	console.log('listening on port 8080');

});


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('someone connected!');
	socket.on('chat message', function(message) {
		console.log(message);
		io.emit('chat message', message); 
	});
});

http.listen(8003, function(){
	console.log('listening on port 8003');
});
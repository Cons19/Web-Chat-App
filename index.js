var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('someone connected!');
	socket.on('chat message', function(date, name, message) {
		var messageString = '<' + name + '> '+ date + " : " + message;
		console.log(messageString);
		io.emit('chat message', messageString);
	});
});

http.listen(8080, function(){
	console.log('listening on port 8080');
});

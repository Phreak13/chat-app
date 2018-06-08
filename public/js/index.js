let socket = io();

    socket.on('connect', function() {
        console.log('Connected to server');
       
    });

    socket.on('disconnect', function() {
        console.log('Client disconneted');
    });

    socket.on('newMessage', function (message) {
        console.log('New Message', message);
    });
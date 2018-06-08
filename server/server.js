const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');


    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: Date().getTime()
    });


    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: Date().getTime()
        });

        /* socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: Date().getTime()
        }); */
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });
});



server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
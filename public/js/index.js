let socket = io();

    socket.on('connect', function() {
        console.log('Connected to server');
       
    });

    socket.on('disconnect', function() {
        console.log('Client disconneted');
    });

    socket.on('newMessage', function (message) {
        console.log('New Message', message);
        let li = jQuery('<li></li>');
        li.text(`${message.from}: ${message.text}`);

        jQuery('#messages').append(li);

    });

    socket.emit('createMessage', {
        from: 'Frank',
        text: 'Hello user'
    }, function(data) {
        console.log('Got it', data);
    });

    jQuery('#message-form').on('submit', function (e) {
        e.preventDefault();

        socket.emit('createMessage', {
            from: 'User',
            text: jQuery('[name=message]').val()
        }, function () {
            console.log('Everythings ok')
        });
    });
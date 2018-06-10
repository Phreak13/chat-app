const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () =>  {
        let message = generateMessage('Admin', 'This is a test message!')

            expect(message.from).toBe('Admin');
            expect(message.text).toBe('This is a test message!');
            expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('Should generate correct location object', () => {
        let message = generateLocationMessage('Admin', 1, 1);

        expect(message.from).toBe('Admin');
        expect(message.url).toBe('https://www.google.com/maps?q=1,1');
        expect(typeof message.createdAt).toBe('number');
        

    });
});
const expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () =>  {
        let message = generateMessage('Admin', 'This is a test message!')

            expect(message.from).toBe('Admin');
            expect(message.text).toBe('This is a test message!');
            expect(typeof message.createdAt).toBe('number');
    });
});
const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',() =>{
    it('should generate the correct message object', ()=>{
        var msg = generateMessage('Bruno','Ola');
        expect(typeof msg).toBe('object');
        //expect(msg).toContain({from,text});
        expect(msg.from).toBe('Bruno');
        expect(msg.text).toBe('Ola');
        expect(msg.createdAt).toBeTruthy();
        expect(typeof msg.createdAt).toBe('number');
    });
});

describe('generateLocationMessage',()=>{
    it('should generate a location message object',()=>{
        var msg = generateLocationMessage('admin',1,2);
        expect(typeof msg).toBe('object');
        expect(msg.from).toBe('admin');
        expect(msg.url).toBe('https://www.google.com/maps?q=1,2');
        expect(msg.createdAt).toBeTruthy();
        expect(typeof msg.createdAt).toBe('number');
    });
});
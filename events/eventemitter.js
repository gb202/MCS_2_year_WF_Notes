
const EventEmitter = require('events');
const emitter = new EventEmitter();

//register a listner 

emitter.on('message1', function(){
    console.log('listner called');
});


//raise an event 
emitter.emit('message2');

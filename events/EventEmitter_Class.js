
/*
EventEmitter class lies in the events module

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

When an EventEmitter instance faces any error, it emits an 'error' event.
 When a new listener is added, 'newListener' event is fired and 
 when a listener is removed, 'removeListener' event is fired.

EventEmitter provides multiple properties like on and emit. 
on property is used to bind a function with the event and emit is used to fire an event.

addListener(event, listener)
(Methods)
Adds a listener at the end of the listeners array for the specified event.
 No checks are made to see if the listener has already been added.
Multiple calls passing the same combination of event and listener
will result in the listener being added multiple times.
Returns emitter, so calls can be chained.

Class Methods

listenerCount(emitter, event)

Returns the number of listeners for a given event.

Events

newListener

event − String: the event name

listener − Function: the event handler function

This event is emitted any time a listener is added. 
When this event is triggered, the listener may not yet have been 
added to the array of listeners for the event.

*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 ex  ecuted.');
}

// listener #2
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");
//EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。
//当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。

//event.js 文件
//event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 1000); 
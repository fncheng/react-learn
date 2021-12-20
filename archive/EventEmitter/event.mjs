import EventEmitter from './eventemitter.mjs'
const emitter = new EventEmitter()
const fn1 = function (val) {
  console.log('fn1', val)
}
const fn2 = function (val) {
  console.log('fn2', val)
}
emitter.addListener('message', fn1)
emitter.addListener('message', fn2)
emitter.emit('message', 'test1')
// emitter.removeListener('message', fn2)
// emitter.emit('message', 'test2')

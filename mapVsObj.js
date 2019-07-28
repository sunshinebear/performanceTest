var Benchmark = require("benchmark");
var suite = new Benchmark.Suite;
var mapKeyValue = new Map();
var mapStringKeyValue = new Map();
var objectKeyValue = {};
const Count = 1000000;

//ops/sec 每秒操作数
suite
    .add('mapKeyValue#set', function () {
        for (let i = 0; i < Count; i++) {
            mapKeyValue.set(i, i);
        }
    })
    .add('mapStringKeyValue#set', function () {
        for (let i = 0; i < Count; i++) {
            mapStringKeyValue.set(i + "", i);
        }
    })
    .add('objectKeyValue#set', function () {
        for (let i = 0; i < Count; i++) {
            objectKeyValue[i] = i;
        }
    })
    .add('mapKeyValue#get', function () {
        for (let i = 0; i < Count; i++) {
            mapKeyValue.get(i);
        }
    })
    .add('mapStringKeyValue#get', function () {
        for (let i = 0; i < Count; i++) {
            mapStringKeyValue.get(i + "");
        }

    })
    .add('objectKeyValue#get', function () {
        for (let i = 0; i < Count; i++) {
            objectKeyValue[i];
        }
    })
    .add('mapKeyValue#delete', function () {
        for (let i = 0; i < Count; i++) {
            mapKeyValue.delete(i);
        }
    })
    .add('mapStringKeyValue#delete', function () {
        for (let i = 0; i < Count; i++) {
            mapStringKeyValue.delete("" + i);
        }
    })
    .add('objectKeyValue#delete', function () {
        for (let i = 0; i < Count; i++) {
            delete objectKeyValue[i];
        }
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });


var mapKeyValue = new Map();

var objectKeyValue = {};

objectKeyValue.get = function (key) {
    return this[key];
}
objectKeyValue.set = function (key, value) {
    this[key] = value;
}

const Count = 1000000;

// ###set
console.time("mapKeyValue#set");
for (let i = 0; i < Count; i++) {
    mapKeyValue.set(i, i);
}
console.timeEnd("mapKeyValue#set");
console.time("objectKeyValue#set");
for (let i = 0; i < Count; i++) {
    objectKeyValue.set(i, i);
    //objectKeyValue[i] = i;
}
console.timeEnd("objectKeyValue#set");

// ###get
console.time("mapKeyValue#get");
for (let i = 0; i < Count; i++) {
    mapKeyValue.get(i);
}
console.timeEnd("mapKeyValue#get");
console.time("objectKeyValue#get");
for (let i = 0; i < Count; i++) {
    //objectKeyValue[i];
    objectKeyValue.get(i);
}
console.timeEnd("objectKeyValue#get");

// ###delete
console.time("mapKeyValue#delete");
for (let i = 0; i < Count; i++) {
    mapKeyValue.delete(i);
}
console.timeEnd("mapKeyValue#delete");
console.time("objectKeyValue#delete");
for (let i = 0; i < Count; i++) {
    delete objectKeyValue[i];
}
console.timeEnd("objectKeyValue#delete");


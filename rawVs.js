const Count = 1000000;
let o = {};
let m = new Map();

for (let i = 0; i < Count; i++) {
    m.set(i, i);
    o[i] = i;
}
console.time("object");
for (let i = 0; i < Count; i++) {
    let t = o[i];
}
console.timeEnd("object");
console.time("map");
for (let i = 0; i < Count; i++) {
    let t = m.get(i);
}
console.timeEnd("map");
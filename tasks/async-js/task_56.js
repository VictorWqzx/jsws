/*
Реализуйте функцию deepClone(obj), которая создаёт глубокую копию переданного объекта. 
Копия не должна иметь общих ссылок с оригиналом (кроме примитивов)
*/
function deepClone(obj, map = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (map.has(obj)) {
        return map.get(obj);
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags);
    }

    if (obj instanceof Map) {
        const mapCopy = new Map();
        map.set(obj, mapCopy);
        obj.forEach((value, key) => {
            mapCopy.set(deepClone(key, map), deepClone(value, map));
        });
        return mapCopy;
    }

    if (obj instanceof Set) {
        const setCopy = new Set();
        map.set(obj, setCopy);
        obj.forEach(value => {
            setCopy.add(deepClone(value, map));
        });
        return setCopy;
    }

    if (Array.isArray(obj)) {
        const arrCopy = [];
        map.set(obj, arrCopy);
        obj.forEach((item, i) => {
            arrCopy[i] = deepClone(item, map);
        });
        return arrCopy;
    }

    const objCopy = {};
        map.set(obj, objCopy);

    [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].forEach(key => {
        objCopy[key] = deepClone(obj[key], map);
    });

    return objCopy;
}


const complexObject = {
    num: 1,
    str: "string",
    date: new Date(),
    regex: /abc/gi,
    map: new Map([['a', 1], [{key: 'obj'}, {val: 'obj'}]]),
    set: new Set([1, 2, {a: 1}]),
    arr: [1, {b: 2}],
    nested: { c: 3 },
        [Symbol("id")]: "symbolValue"
};
complexObject.circular = complexObject;

const clonedObject = deepClone(complexObject);

console.log('Original === Cloned:', complexObject === clonedObject);
console.log('Original.map === Cloned.map:', complexObject.map === clonedObject.map);
console.log('Original.arr === Cloned.arr:', complexObject.arr === clonedObject.arr);

clonedObject.nested.c = 100;

console.log('Original nested "c":', complexObject.nested.c); 
console.log('Cloned nested "c":', clonedObject.nested.c);    
console.log('Cloned has circular reference:', clonedObject.circular === clonedObject);
console.log('Original regex:', complexObject.regex);
console.log('Cloned regex:', clonedObject.regex);


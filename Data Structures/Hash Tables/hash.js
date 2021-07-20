class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 257;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i);
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    let flag = true;

    this.keyMap[index] = this.keyMap[index] || [];
    this.keyMap[index].forEach(el => {
      if (el[0] === key) {
        flag = false;
        el[1] = value;
      }
    });

    if (flag) this.keyMap[index].push([key, value]);

    return true;
  }

  get(key) {
    const index = this._hash(key);
    const array = this.keyMap[index];
    if (!array) return undefined;

    const value = array.find(element => element[0] === key)[1];
    return value;
  }

  keys() {
    const array = this.keyMap;
    const keys = [];

    array.forEach(el => el.forEach(el => keys.push(el[0])));
    return keys;
  }

  values() {
    const array = this.keyMap;
    const values = [];

    array.forEach(el =>
      el.forEach(el => {
        if (!values.includes(el[1])) values.push(el[1]);
      })
    );
    return values;
  }
}

const table = new HashTable(5);
table.set("bye", 5);
table.set("hello", 6);
table.set("hella", 7);
table.set("hi", 4);
table.set("hi", 5);
table.set("hex", 11);
table.set("fix", 17);
table.set("fix", 19);

console.log(table.values());
console.log(table);

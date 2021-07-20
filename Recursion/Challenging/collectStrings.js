/*
Write a function called collectStrings which accepts an object
and returns an array of all the values in the obejct that have a 
typeof 'string'.
*/

function collectStrings(obj) {
  let keys = Object.keys(obj);

  if (keys.length == 0) return [];

  const prop = obj[keys[0]];
  delete obj[keys[0]];

  const result = collectStrings(obj);

  if (typeof prop == "string") result.push(prop);

  return result;
}

console.log(collectStrings({ hi: "bye", hello: "mellow", ok: 10 }));

/*
Write a funciton called stringifyNumbers which takes in an object
and returns a new object that is identical to the input object, 
but everywhere there was a number on the input object, the output
object will contain a string. You don't need to worry about arrays,
but you do need to take care of nested objects.
*/

function stringifyNumbers(obj) {
  let keys = Object.keys(obj);
  if (
    keys.every(
      key => typeof obj[key] != "object" && typeof obj[key] != "number"
    )
  )
    return obj;

  keys.forEach(key => {
    if (typeof obj[key] == "number") obj[key] = obj[key].toString();
    if (typeof obj[key] == "object") obj[key] = stringifyNumbers(obj[key]);
  });

  return obj;
}

console.log(stringifyNumbers({ 0: 1, 1: { 0: "hi", 1: 2 }, 2: 2 }));

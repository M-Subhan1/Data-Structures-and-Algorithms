/*
Prompt: Implement a function called areThereDuplicates, which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments that are passed in.
*/

function areThereDuplicates(...args) {
  const temp = {};
  let arg;

  for (let i = 0; i < args.length; i++) {
    arg = args[i];
    temp[arg] = ++temp[arg] || 1;
  }

  let keys = Object.keys(temp);

  for (let i = 0; i < keys.length; i++) {
    if (temp[keys[i]] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 1));

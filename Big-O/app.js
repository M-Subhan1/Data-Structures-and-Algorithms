function add(num) {
  if (num == 1) return 1;

  return num + add(num - 1);
}

function add2(num) {
  return (num * (num + 1)) / 2;
}

function add3(num) {
  let total;

  for (let i = 0; i <= num; i++) total += i;
}

let t1 = Date.now();
console.log(add(10000));
console.log(Date.now() - t1);

t1 = Date.now();
console.log(add3(10000));
console.log(Date.now() - t1);

// t1 = Date.now();
// console.log(add2(10000000000000000));
// console.log(Date.now() - t1);

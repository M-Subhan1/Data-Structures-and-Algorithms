function naiveStringSearch(string, subStr) {
  let count = 0;
  let tempStr = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] == subStr[tempStr.length]) {
      tempStr += string[i];
      if (tempStr.valueOf() == subStr.valueOf()) {
        tempStr = "";
        count++;
      }
    } else tempStr = "";
  }

  return count;
}

console.log(naiveStringSearch("hellohelohell", "hell"));

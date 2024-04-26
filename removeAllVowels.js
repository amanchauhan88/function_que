let str = "aman chauhan";
function removeAllVowels(str) {
  let newstr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      str[i] === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      continue;
    }else{
        newstr += str[i];
    }
  }
  return newstr;
}
console.log(removeAllVowels(str));

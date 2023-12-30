// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. without builtin method .repeat()
function repeatString(str, num) {
  let finalStr = "";
  if (num < 1) {
    return (str = "");
  }
  for (let i = 1; i <= num; i++) {
    finalStr += str;
  }
  return finalStr;
}

console.log(repeatString("abc", 3));

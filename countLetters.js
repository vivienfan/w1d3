function countLetters(str) {
  var results = {};
  for(var char of str) {
    if (char.match(/[a-z]/i)) {
      if (results[char] == undefined) {
        results[char] = 0;
      }
      results[char]++;
    }
  }
  return results;
}

console.log(countLetters(process.argv.slice(2).join()));
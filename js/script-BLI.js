function pigLatin(str) {
  str = str.toLowerCase();

  let vowels = ["a", "e", "i", "o", "u"];

  let vowelIndex = 0;

  if (vowels.includes(str[0])) {
    return str + "way";
  } else {
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelIndex = str.indexOf(char);
        break;
      }
    }

    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
}

function pigQu(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    for(var i = 0; i < word.length; i++) {
      if(vowels.indexOf(word[i]) !== -1) break;
      if(word.slice(i, i+2) === 'qu') i += 1;
    };
    return word.slice(i) + word.slice(0, i) + 'ay';
  }

function filterShortStateName(arr) {
  const result = arr.filter((word) => word.length < 7);
  return result;
}
function filterStartVowel(arr) {
  const result = arr.filter((word) => startWithVowel(word));
  return result;
}

function startWithVowel(word1) {
  const vowels = "aeiouAEIOU";
  for (let j = 0; j < vowels.length; j++) {
    if (word1[0] == vowels[j]) {
      return true;
    }
  }
  return false;
}

function filter5Vowels(arr) {
  const result = arr.filter((word) => contain5Vowels(word) >= 5);
  return result;
}

function contain5Vowels(word1) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (word1[i] == vowels[j]) {
        count++;
      }
    }
  }
  //   if (count >= 5) {
  //     return true;
  //   }
  return count;
}

function filter1DistinctVowel(arr) {
  const result = arr.filter((word) => helper1DistinctVowel(word));
  return result;
}

function helper1DistinctVowel(word1) {
  word1 = word1.toLowerCase();
  const vowels = "aeiou";
  let foundVowels = "";

  for (let i = 0; i < word1.length; i++) {
    if (vowels.includes(word1[i]) && !foundVowels.includes(word1[i])) {
      foundVowels += word1[i];
    }
  }

  return foundVowels.length === 1;
}

function multiFilter(arr) {
  const result = arr.filter(
    (word) =>
      word.capital &&
      word.capital.length >= 8 &&
      !startWithVowel(word.name) &&
      containAVowel(word.tag) &&
      word.region != "South"
  );
  return result;
}

function containAVowel(word1) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (word1[i] == vowels[j]) {
        count++;
      }
    }
  }
  if (count >= 1) {
    return true;
  }
  return false;
}

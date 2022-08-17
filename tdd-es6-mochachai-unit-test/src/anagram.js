export const getAnagram = (string1, string2) => {
  const letters1 = string1
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "")
    .split("");
  const letters2 = string2
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "")
    .split("");

  let letterCount = {};
  letters1.forEach((letter) => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  });
  letters2.forEach((letter) => {
    if (letterCount[letter]) {
      letterCount[letter] -= 1;
    }
  });
  return letterCount;
};

// import { isEqual } from 'lodash';
// import { getLetterCount } from './letter-count';

// export const formatString = string =>
//     string.toLowerCase().replace(/\s+/g, '');

// export const isAnagram = (string1, string2) => {
//     const string1LetterCount = getLetterCount(formatString(string1));
//     const string2LetterCount = getLetterCount(formatString(string2));

//     return isEqual(string1LetterCount, string2LetterCount);
// };

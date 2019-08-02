// Create a function that reverses a word

function reverseWord (word) {
  return word.split('').reverse().join('');
}

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

function reverseEachWord (arrayOfWords) {
  for (const i in arrayOfWords) {
    arrayOfWords[i] = reverseWord(arrayOfWords[i]);
  }
  return arrayOfWords;
}

// Create a function that returns a random word from an array

function giveRandomWord (arrayOfWords) {
  return arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
}

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.

function giveMapFromArray(arrayOfWords) {
  const wordAndReversed = new Map();

  for (const word of arrayOfWords) {
    wordAndReversed.set(word, reverseWord(word));
  }
  return wordAndReversed;
}


// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.

function checkIfWordInMap (guess, word, map) {
  if (map.has(guess)) {
    console.log(word);
  } else {
    console.log(`Sorry, incorrect. The word was ... ${word}`);
  }
}


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.

function scrambleWord (word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');

}

// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.

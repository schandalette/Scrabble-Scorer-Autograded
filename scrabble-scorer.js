// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log(`Let's play some scrabble!\n` );
   initialWord = input.question(`Enter a word: `);
   return initialWord
   };

function simpleScorer(word) {
   word = word.toUpperCase();
   points = word.length;
   return points;
   };

function vowelBonusScorer(word) {
   console.log("word vowel before", word)
   word = word.toUpperCase();
   vowel = ['A', 'E', 'I', 'O', 'U'];
   points = 0
   for (let i = 0; i < word.length; i++) {
      if (vowel.includes(word[i])) {
         points += 3
      } else {
         points += 1
      }
   };
   return points;
}

function scrabbleScorer(word) {
   word = word.toLowerCase();
   console.log('word before lower case', word)
   let points = 0;

   for (let i = 0; i < word.length; i++) {

      let letter = word[i];
      if (newPointStructure[letter]) {
         points += newPointStructure[letter]

      }
   }
   
	return points;
}

const scoringAlgorithms = [
   {
      "name" : "Simple",
      "description" : "Each letter is worth 1 point.",
      "scorerFunction" : simpleScorer
   },
   {
      "name" : "Bonus Vowels",
      "description" : "Vowels are 3 pts, consonants are 1 pt.",
      "scorerFunction" : vowelBonusScorer
   },
   {
      "name" : "Scrabble",
      "description" : "The traditional scoring algorithm.",
      "scorerFunction" : scrabbleScorer
   }
];
   
let newPointStructure = transform(oldPointStructure);

function scorerPrompt(num) {
   inputWord = initialPrompt();

   console.log(`Which scoring algorithm would you like to use?\n`)
   
      for (item in scoringAlgorithms) {
         for (let i = 0; i < scoringAlgorithms.length; i++) {
         console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
      }
       
      num = input.question(`Enter 0, 1, or 2: `)
      console.log("Score for '" +inputWord+ "': ", scoringAlgorithms[num].scorerFunction(inputWord))
      return num
   }
}

function transform(arr) {
   let newPoint = {}
   for (let key in arr) {
      let letters = arr[key];
      for (let i = 0; i < letters.length; i++) {
         let letter = letters[i].toLowerCase();
         newPoint[letter] = Number(key);
      }
   }
   return newPoint;
   };

function runProgram() {
   //initialPrompt();
   scorerPrompt();
  }

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

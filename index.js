// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  Inside Scope and Outside scope
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter 1 code due to the const being outside the function scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 would be preferable in nesting code of javascript, counter 2 would be preferable in straight forward as you see it code.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inningScore(){
  return(Math.floor(Math.random()*3));
}
inningScore()

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

// function finalScore(inningScore, numberInnings){
//   let score = {"Home": 0, "Away": 0}; 
//   let i = 0;
//   while (i < numberInnings){
//     score["Home"] += inningScore();
//     score["Away"] += inningScore();
// i++
// }
// return score;
// }
// console.log(finalScore(inningScore, 9));



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

const toOrdinalSuffix = num => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];

}


teams = ["WAS", "PHI", "HOU", "KC", "CHC", "NYY", "NYM", "BOS", "LAA", "LAD", "ARI", "ATL", "BAL", "CWS", "CIN", "CLE", "COL", "DET", "MIA", "MIL", "MIN", "SEA", "SFG", "STL", "TB", "TEX", "TOR", "OAK", "PIT", "SD"
]



function scoreboard() {
  let homeScore = 0;
  let awayScore = 0;
  let homeTeam = teams[Math.floor(Math.random() * 30)];
  let awayTeam = teams[Math.floor(Math.random() * 30)];
  for (let i=0; i<9; i++){
   homeScore = homeScore + inningScore();
   awayScore = awayScore + inningScore();
   console.log(`${toOrdinalSuffix((i + 1).toString())} Inning - ${homeTeam}: ${homeScore} ${awayTeam} ${awayScore}`);
  }

 console.log(`Final Score - ${homeTeam} ${homeScore} ${awayTeam} ${awayScore}`)


}

scoreboard();



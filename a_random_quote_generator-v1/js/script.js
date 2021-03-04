/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * var quotes = [{}, {}, {}, {}, {}];
***/
var quotes = [{}, {}, {}, {}, {}];

/***
 * `getRandomQuote` function
 * function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
function diceRoll(array) {
  var randomNumber = Math.ceil(Math.random()*len(array));
  return randomNumber;

  // 2. Use the random number variable and bracket notation
  // to grab a random object from the `quotes` array, and
  // store it in a variable

  // 3. Return the variable storing the random quote object
}
***/

function getRandomQuote(quotes) {
  var randomNumber = Math.ceil(Math.random()*quotes.length);
  var randomNumberGrabber = Math.ceil(Math.random()[randomNumber]);
  return randomNumberGrabber;
}

/***
 * `printQuote` function
 * function printQuote() {
  // 1. Create a variable that calls the getRandomQuote()
  // function
  var = getRandomQuote(quotes)

  // 2. Create a variable that initiates your HTML string with
  // the first two <p></p> elements, their classNames,
  // and the quote and source properties, but leave off
  // the second closing `</p>` tag for now

  // 3. Use an if statement to check if the citation property
  // exists, and if it does, concatenate a <span></span>
  // element, appropriate className, and citation property
  // to the HTML string

  // 4. Use an if statement to check of the year property exists,
  // and if it does, concatenate a <span></span> element,
  // appropriate className, and year property to the HTML
  //string

  // 5. After the two if statements, concatenate the closing </p>
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the
  // complete HTML string
}
***/
  



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


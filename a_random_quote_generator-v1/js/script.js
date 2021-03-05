/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
console.log('test');
// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * var quotes = [{}, {}, {}, {}, {}];
***/

var quotes = [
  { quote: 'Life is very short and what we have to do must be done in the now.', 
  source: 'Audre Lorde', 
    citation: 'Audre Lorde Quotes. BrainyQuote.com. BrainyMedia Inc, 2021. 4 March 2021. www.brainyquote.com/quotes/audre_lorde_383487',
    year: 2021}, 
  { quote: 'It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.', 
    source: 'Audre Lorde', 
    citation: 'Audre Lorde Quotes. BrainyQuote.com. BrainyMedia Inc, 2021. 4 March 2021. https://www.brainyquote.com/quotes/audre_lorde_390625', 
  year: 2021}, 

  {
  quote: 'Try to be a rainbow in someone elses cloud', 
    source: 'Maya Angelou',
    tags: 'joy' 
  }, 
  {
    quote: 'I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go.', 
    source: 'Langston Hughes'
  }, 
  {
    quote: 'When someone shows you who they are, believe them the first time.',
    source: 'Maya Angelou'}
];

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

function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote]
  
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
function printQuote() {
  var randomQuote = getRandomQuote();
  var htmlString = `
  <p class='quote'${randomQuote.quote} </p>
  <p class='source'${randomQuote.source} 
  `;
  if (randomQuote.citation) {
    htmlString += `<span class='citation'>${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    htmlString += `<span class='year'>${randomQuote.year}</span>`;
  }

  htmlString += `</p>`;

  if (randomQuote.tags) {
    htmlString += `<p>${randomQuote.tags}</p>`;
  }

document.getElementById('quote-box').innerHTML = quotes[htmlString];

setInterval(printQuote(), 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
}

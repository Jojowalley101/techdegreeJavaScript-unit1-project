/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
author = Joelle Walley
******************************************/
//console.log('test');
// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Array of Objects named quotes.
 * 
 * The variable quotes is an array of objects 
 * which contain different properties and values. 
 * quote is a string - the actual quote
 * source is also a string - the person or character who said it
 * citation (string) - The value should be a string holding a reference to the source of the quote.
 * year (number) - The value should be a string or number representing the year the quote originated.
 * 
 * The properties inside of all of the 'quotes' are 
 * the quotes and sources which are required.
 * 
 * For exceeding expectations I added  
 * one object that has one additional property, such as tags.
 * I also added an extra quote.
***/

var quotes = [
  { quote: 'Life is very short and what we have to do must be done in the now.', 
  source: 'Audre Lorde', 
    citation: 'Audre Lorde Quotes. BrainyQuote.com. BrainyMedia Inc, 2021. 4 March 2021. www.brainyquote.com/quotes/audre_lorde_383487',
    year: 1968},
  { quote: 'It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.', 
    source: 'Audre Lorde', 
    citation: 'Audre Lorde Quotes. BrainyQuote.com. BrainyMedia Inc, 2021. 4 March 2021. https://www.brainyquote.com/quotes/audre_lorde_390625', 
  year: 1970}, 

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
    source: 'Maya Angelou'
  },
  {
    quote: 'You can only become accomplished at something you love. Don’t make money your goal. Instead, pursue the things you love doing and then do them so well that people can’t take their eyes off you.',
    source: 'Maya Angelou'

  }
];

/***
 * This is the `getRandomQuote` function.
 * 
 * The getRandomQuote function creates a random number, 
 * and uses that random number to 
 * return a random quote object from the quotes array.
 * 
 * I also created a variable to store a random number 
 * ranging from zero to the index of the last item in the quotes array.
 * 
 * @returns a random quote object using the 
 * random number variable above and bracket notation on the quotes array.
 * 
***/

function getRandomQuote() {
  var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteIndex];
  
}

getRandomQuote('go ahead and log out for me');

/***
 * This is the `getRandomColor` function.
 *
 * The getRandomColor function creates a random number,
 * and uses that random number to
 * @returns a random color object from the quotes array + 0.
 ***/

function getRandomColor() {
  var randomQuoteIndex = Math.floor(Math.random() * quotes.length) + 0;
  return quotes[randomQuoteIndex];
}

/***
 * This function displays a new quote each time the user clicks the 
 * "Show another quote" button.
 * In the body of the printQuote function,
 * there is a variable to store a random quote object 
 * from the getRandomQuote() function.
 * I created another variable to store the HTML string.
 * If the random quote object has a citation property, 
 * concatenate a <span> element with the class "citation" to the HTML string.
 * 
 * If the random quote object has a year property, 
 * concatenate a <span> element with the class "year" to the HTML string.
 * Below the if statements, complete the string by concatenating a 
 * closing </p> tag to the HTML string. 
 * 
 * This is the closing tag for the second paragraph with the class source.
 * The printQuote function is set to return the full HTML string displaying a random quote.
 * 
***/

function printQuote() {
  var randomColor = getRandomColor();
  var randomQuoteIndex = getRandomQuote();
  var htmlString = `
  <p class='quote'>${randomQuoteIndex.quote} </p>
  <p class='source'>${randomQuoteIndex.source} 
  `;
  if (randomQuoteIndex.citation) {
    htmlString += `<span class='citation'>${randomQuoteIndex.citation}</span>`;
  }

  if (randomQuoteIndex.year) {
    htmlString += `<span class='year'>${randomQuoteIndex.year}</span>`;
  }

  htmlString += `</p>`;

  if (randomQuoteIndex.tags) {
    htmlString += `<p>${randomQuoteIndex.tags}</p>`;
  }
  var blue = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var red = Math.floor(Math.random() * 256);
  var bluegredRand = `rgb(${blue}, ${green}, ${red})`;
 
  document.getElementById('quote-box').innerHTML = htmlString;
  document.body.style.backgroundColor = bluegredRand;
  
}

var htmlString = printQuote();

//console.log(htmlString);


// Going for exceeds expectations with this setInterval function. 
setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


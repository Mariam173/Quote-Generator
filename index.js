const quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan kay"
    },
    {
      text: "Technology is best when it brings people together",
      author: "Matt Mullenweg"
    },
    {
      text: "programs must be written for people to read, and only incidentally for machines to execute",
      author: "Harold Abelson"
    },
    {
      text: "Talk is cheap. Show me the code",
      author: "Linus Torvalds"
    },
    {
      text: "first solve a problem. Then, write the code ",
      author: "John Johnson"
    },

    {
      text:"The computer was born to solve problems that did not exist before",
      author: "Bill Gates"
    },

    {
      text:"Your most unhappy customers are your greatest source of learning.",
      author:"Bill Gates"
    }
  ];

let quoteHistory = [];
let currentIndex = -1;

function getNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // Avoid duplicates in a row
  if (quoteHistory[currentIndex]?.text !== quote.text) {
    quoteHistory.push(quote);
    currentIndex++;
  }

  displayQuote(quote);
  document.getElementById("prev-btn").disabled = currentIndex <= 0;
}

function getPreviousQuote() {
  if (currentIndex > 0) {
    currentIndex--;
    const quote = quoteHistory[currentIndex];
    displayQuote(quote);
    document.getElementById("prev-btn").disabled = currentIndex <= 0;
  }
}

function displayQuote(quote) {
  document.getElementById('quote').textContent = `"${quote.text}"`;
  document.getElementById('author').textContent = `- ${quote.author}`;
}
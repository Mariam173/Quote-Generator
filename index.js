let quoteHistory = [];
let currentIndex = -1;

async function getNewQuote() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        'X-Api-Key': 'ntXButKCbkHm/7bh+dLlRg==UN0vvsWwz5KwwIpc'  // ✅ Your key here
      }
    });

    const data = await response.json();

    // Safety check if API returned anything
    if (!data || data.length === 0) {
      throw new Error("No quotes returned.");
    }

    const quote = {
      quote: data[0].quote,
      author: data[0].author
    };

    // Avoid duplicates
    if (quoteHistory[currentIndex]?.quote !== quote.quote) {
      quoteHistory.push(quote);
      currentIndex++;
    }

    displayQuote(quote);
    document.getElementById("prev-btn").disabled = currentIndex <= 0;

  } catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById("quote").textContent = "Couldn't fetch quote.";
    document.getElementById("author").textContent = "";
  }
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
  document.getElementById('quote').textContent = `${quote.quote}`;
  document.getElementById('author').textContent = `– ${quote.author}`;
}

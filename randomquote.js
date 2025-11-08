    const quotes = [
      "Believe in yourself and all that you are.",
      "Dream big, work hard, stay humble.",
      "Every day is a second chance.",
      "Push yourself, because no one else is going to do it for you.",
      "Success doesn’t just find you. You have to go out and get it.",
    ];

    function newQuote() {
      let i = Math.floor(Math.random() * quotes.length);
      document.getElementById("quote").innerText = quotes[i];
    }
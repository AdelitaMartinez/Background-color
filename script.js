// API key for accessing the API, please uncomment and add your own API key below
// const apiKey = "Your-Api-Key-Goes-Here" <----
const apiKey = "GrF0AuxFoZjqTyBqwXeedg==vHKcVvMuZwMynnSd";

// Options for the fetch request, including the API key
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey
  }
};

// URL of the API endpoint for fetching quotes
const apiURL = "https://api.api-ninjas.com/v1/quotes?category=funny";

// Fetches quote from API and updates the DOM with quote/author
async function generate() {
  try {
    // Fetch the data from the API
    const response = await fetch(apiURL, options);
    console.log("Response status:", response.status);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the response data as JSON
    const data = await response.json();
    console.log("Response data:", data);

    // Check if data is available
    if (data && data.length > 0) {
      const quote = data[0].quote;
      const author = data[0].author;

      // Adding quotes around the generated quote
      const formattedQuote = `"${quote}"`

      // Adding - infront of generated author
      const formattedAuthor = `- ${author}`
      

      // Update the DOM with the quote and author
      document.querySelector("#quote").textContent = formattedQuote;
      document.querySelector("#author").textContent = formattedAuthor;
    } else {
      console.error("No quotes found!");
    }
  } catch (error) {
    // Log any errors that occur during fetching or parsing
    console.error("Error fetching quotes:", error);
  }
}
// Initialize the page by generating a random quote when the window is loaded
window.onload = function () {
  generate();
};

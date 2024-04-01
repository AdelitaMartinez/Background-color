const apiKey = "GrF0AuxFoZjqTyBqwXeedg==vHKcVvMuZwMynnSd";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey
  }
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=funny";

async function generate() {
  try {
    const response = await fetch(apiURL, options);
    console.log("Response status:", response.status);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Response data:", data);

    if (data && data.length > 0) {
      const quote = data[0].quote;
      const author = data[0].author;

      document.querySelector("#quote").textContent = quote;
      document.querySelector("#author").textContent = author;
    } else {
      console.error("No quotes found!");
    }
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}

window.onload = function () {
  generate();
};

// Select elements
const dogContainer = document.getElementById("dog");
const jokeContainer = document.getElementById("joke");

// Fetch Dog Image
async function fetchDog() {
    dogContainer.innerHTML = "Loading dog image...";

    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!response.ok) {
            throw new Error("Failed to fetch dog image");
        }

        const data = await response.json();

        console.log("Dog API Data:", data);

        dogContainer.innerHTML = `
            <img src="${data.message}" alt="Random Dog" width="300">
        `;

    } catch (error) {
        console.error("Error fetching dog:", error);
        dogContainer.innerHTML = "Error loading dog image!";
    }
}

// Fetch Joke
async function fetchJoke() {
    jokeContainer.innerHTML = "Loading joke...";

    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const joke = await response.json();

        console.log("Joke API Data:", joke);

        jokeContainer.innerHTML = `
            <h3>${joke.setup}</h3>
            <p>${joke.punchline}</p>
        `;

    } catch (error) {
        console.error("Error fetching joke:", error);
        jokeContainer.innerHTML = "Error loading joke!";
    }
}

// Call functions
fetchDog();
fetchJoke();

 /*What is Fetch API
=> Fetch API is a modern JavaScript feature used to request and retrieve data from servers or APIs.
It works using Promises and allows developers to handle asynchronous operations easily

Difference between fetch vs XMLHttpRequest
1.Fetch API
Fetch API is a modern approach. 
It Uses Promises 
Cleaner and easier to read

2.XMLHttpRequest
It is an older method
Uses callbacks
More complex and harder to read

Importance of handling errors in API calls
Displays user-friendly error messages
Handles network issues */

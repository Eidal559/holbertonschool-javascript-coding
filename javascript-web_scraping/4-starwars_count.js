#!/usr/bin/node

const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 4-starwars_count.js <API_URL>');
  process.exit(1);
}

// Extract API URL from command line arguments
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Make a GET request to the Star Wars API films endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  // Parse the JSON response body
  const films = JSON.parse(body).results;

  // Initialize a counter for movies with Wedge Antilles
  let count = 0;

  // Iterate through each film
  films.forEach(film => {
    // Check if Wedge Antilles is present in the characters list
    if (film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)) {
      count++;
    }
  });

  // Print the number of movies with Wedge Antilles
  console.log(count);
});

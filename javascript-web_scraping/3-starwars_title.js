#!/usr/bin/node

const request = require('request');

// Check if the movie ID argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <movie_ID>');
  process.exit(1);
}

// Extract movie ID from command line arguments
const movieID = process.argv[2];

// Construct the URL with the provided movie ID
const url = `https://swapi-api.hbtn.io/api/films/${movieID}`;

// Make a GET request to the Star Wars API
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  // Parse the JSON response body
  const data = JSON.parse(body);

  // Print the title of the movie
  console.log(data.title);
});

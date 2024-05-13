#!/usr/bin/node

const request = require('request');

// Check if the URL argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 2-statuscode.js <URL>');
  process.exit(1);
}

// Extract URL from command line arguments
const url = process.argv[2];

// Make a GET request to the provided URL
request.get(url, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }

  // Display the status code
  console.log('code:', response.statusCode);
});

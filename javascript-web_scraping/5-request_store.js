#!/usr/bin/node

const fs = require('fs');
const request = require('request');

// Check if the URL and file path arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node 5-request_store.js <URL> <file_path>');
  process.exit(1);
}

// Extract URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the provided URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  // Write the response body to the specified file
  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Content written to ${filePath}`);
  });
});

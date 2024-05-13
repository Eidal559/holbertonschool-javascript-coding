#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <movie_ID>');
  process.exit(1);
}

const movieID = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${movieID}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);

  console.log(data.title);
});

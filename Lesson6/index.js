const randomFruitsName = require('random-fruits-name');

var moviesNames = require('movies-names');
const  allMovie = moviesNames.all;
const movie = moviesNames.random();

// console.log(movie);
// console.log(allMovie);

var nameToImdb = require("name-to-imdb");
nameToImdb("south park", function(err, res, inf) { 
  console.log(res);
  console.log(inf);
})
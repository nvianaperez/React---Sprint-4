const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(film => film.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(movie => director === movie.director);
  console.log("EXERCISE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let moviesFromDirector = movies.filter(movie => director === movie.director);
  let total = moviesFromDirector.reduce((totalScore, movie) => {
    return totalScore += movie.score;
  }, 0);
  let result = parseFloat((total / moviesFromDirector.length).toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let result = movies.map(movie => movie.title);
  let resultOrdered = result.sort((a, b) => (a < b) ? -1 : 1);
  let topTwenty = resultOrdered.slice(0, 20); // hasta 20 porque es "indice hasta sin incluir"
  return topTwenty;
}


// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let result = movies.map(movie => {
    return { year: movie.year }
  });
  console.log(result);
  // let orderedResult = result.sort ((a,b) => (a.year < b.year) ? -1 : 1);
  // return orderedResult;
  // OK --> it.only('should return the new array in ascending order'

  // debugger
  result = movies.map(movie => {title:movie.title; year:movie.year});
  let orderedResult = result.sort(function (a, b) {
    return (a.year < b.year) || (a.title < b.title)
  })
  return orderedResult;
}
// result = movies.map(movie => `${{year: movie.year}} ${{title: movie.title}}`);
// let orderedResult = result.sort (function(a,b) {
//     if (a.year === b.year) {
//      return a.title.localCompare(b.title);
//     }
//     return a.year < b.year ? -1 : 1;
// })
// return orderedResult;
// }



/*usar map para dar un nuevo formato a los objetos de un array
var kvArray = [{clave:1, valor:10},
  {clave:2, valor:20},
  {clave:3, valor: 30}];
var reformattedArray = kvArray.map(function(obj){
var rObj = {};
rObj[obj.clave] = obj.valor;
return rObj;
});

reformattedArray es ahora [{1:10}, {2:20}, {3:30}],
kvArray sigue siendo:
[{clave:1, valor:10},
 {clave:2, valor:20},
 {clave:3, valor: 30}]*/


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  let filtered = movies.filter (movie => category === movie.genre[0]);
  let emptyScore = movies.filter (movie => movie.score === '');
  let result = filtered.reduce ((avg, movie) => {
    return Number(parseFloat(avg += movie.score / (filtered.length-emptyScore.length).toFixed(2))); // output '3.20'
   },0);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
  // debugger
  let duration = movies.map(movie => {
    return { duration : movie.duration }
  });

  //convertir movie.duration de '1h 30min' a number 90
  let result = duration.reduce ((min, movie) => {
    let stringSplit = movie.duration.split(' ');
    min += ((parseInt(stringSplit[0]))*60 + (parseInt(stringSplit[1]))*1); //min en segunda iteración es NaN
    return movie.duration = min;
  },0);
  return result;
}

// Usando ES6: const [ code, name ] = element.split('|'); return { code, name }.

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

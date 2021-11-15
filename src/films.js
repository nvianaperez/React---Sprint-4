
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
  // debugger
  let orderedResult = result.sort ((a,b) => (a.year < b.year) ? -1 : 1);
  return orderedResult;
  // OK --> it.only('should return the new array in ascending order'
  if(a.year === b.year) {
    let orderedTitleResult = orderedResult.sort ((a,b) => (a.title < b.title) ? -1 : 1);
  }
  return orderedTitleResult;

}
  


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
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

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

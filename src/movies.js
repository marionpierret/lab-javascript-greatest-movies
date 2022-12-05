// const movies = require('./data')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors= moviesArray.map(element => element.director).filter((value,  index, array)=> {
        return array.indexOf(value)===index;
    });
    return directors; 
}
console.log(getAllDirectors)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(e=>e.director==="Steven Spielberg" && e.genre.includes('Drama')).length
}
    
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length===0){
        return 0;
    }
const avg0 = moviesArray.filter (e => e.score)
const avg = avg0.reduce ((acc, movie) => (acc + movie.score), 0)/ moviesArray.length;
const avg2 = avg.toFixed(2);
return Number(avg2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaAvg = moviesArray.filter (e => e.genre.includes('Drama'));
    return scoresAverage(dramaAvg)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    moviesArray.sort((first, second) => {
      if (first.year > second.year) {
        return 1;
      } else if (first.year < second.year) {
        return -1;
      } else {
        return first.title.localeCompare(second.title);
      }
    });
    return moviesArray;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map((movie) => movie.title);
    titles.sort((first, second)=> first.localeCompare(second));
    const first20Titles = titles.slice (0, 20);
    return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

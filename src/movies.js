// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const allDirectors = movies.map((movie) => {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const steven = movies.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return steven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const score = movies.map((movie) => {
    return movie.score;
  });
  if (score.length === 0) {
    return 0;
  }

  const sum = score.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  return Math.round((sum / score.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const drama = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  const dramaScore = drama.map((movie) => {
    return movie.score;
  });
  if (dramaScore.length === 0) {
    return 0;
  }
  const sum = dramaScore.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  return Math.round((sum / dramaScore.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const order = JSON.parse(JSON.stringify(movies));
  const byYear = order.sort((first, second) => {
    if (first.year < second.year) {
      return -1;
    } else if (first.year > second.year) {
      return 1;
    } else {
      if (first.title.localeCompare(second.title) > 0) {
        return 1;
      } else if (first.title.localeCompare(second.title) < 0) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return byYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const title = movies.map((movie) => {
    return movie.title;
  });
  const order = JSON.parse(JSON.stringify(title));

  const byTitle = order.sort((first, second) => {
    if (first.localeCompare(second) > 0) {
      return 1;
    } else if (first.localeCompare(second) < 0) {
      return -1;
    } else {
      return 0;
    }
  });
  if (byTitle.length > 20) {
    byTitle.splice(20, byTitle.length - 20);
  }
  return byTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}

class Movie {

  // Constructor
   constructor (title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

    // Method to get movies with a rating of "PG"
    
  static getPG(input) {
      let out = input.filter(movie => movie.rating === "PG");
      return out;
  }
}

// Array of movies
let  moviesArray = [
  new Movie("The Litle Mermaid", "Disney Studios", "R"),
  new Movie("End game", "Marvel Studio"),
  new Movie("hotel transylvania", "pixar", "PG-13"),
  new Movie("Spy kids", "Studio 2", "R"),
  new Movie("Aquaman", "DC studios","PG"),
];
console.log(Movie.getPG(moviesArray));

// Filtering movies with a rating of "PG"

let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);

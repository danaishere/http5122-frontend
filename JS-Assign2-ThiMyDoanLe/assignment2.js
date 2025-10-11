
//7 vars
var movie1 = "When Life Gives You Tangerines";
var movie2 = "Attack on Titan";
var movie3 = "Once Upon A Time";
var movie4 = "The Hunger Game";
var movie5 = "Alice in Borderland";
var movie6 = "Pyramid Game";
var movie7 = "The Witch: Part 1";

var error = "Please enter a number between 1 and 7!";

//array
var topMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

//output to console
console.log("MY TOP 7 MOVIES");
for (var i=0; i<topMovies.length; i++) {
console.log("Movie " + (i+1) + ": " + topMovies[i]);
}

//with stretch goal
function askForMovie() {

//user pref
var userChoice = prompt("Which movie is your favorite?", "Pick a number from 1 - 7");

//check if it's correct & validate user input
var movieNumber = parseInt(userChoice);
if (isNaN(movieNumber) || movieNumber <1 || movieNumber >7 || movieNumber === null) 
{
alert(error);
//ask again
askForMovie();

//correct input
} else{
var selectedMovie = topMovies[movieNumber-1];
alert("Number " + movieNumber + " on the list is " + selectedMovie);

}
}

askForMovie();
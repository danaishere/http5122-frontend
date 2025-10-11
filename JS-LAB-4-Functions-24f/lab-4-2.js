//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
/*function average(n1, n2, n3, n4, n5) {
return (n1+n2+n3+n4+n5)/5;
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var avgIt = average(5, 10, 15, 20, 25);
console.log(avgIt);
*/

////////////////
function avg(c1, c2, c3, c4, c5) {
return (c1+c2+c3+c4+c5)/5;
}

//var avgGrade2 = avg(78, 80, 85, 81, 75);
var avgGrade2 = avg(78, 50, 65, 51, 65);

if (avgGrade2 <70) {
alert ("Review required.");
}
else {
alert ("Congratulations, you've done well!");
}

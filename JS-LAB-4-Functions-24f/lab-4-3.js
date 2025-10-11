//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will check the temparature to walk your dog
//It expects to receive tempartue input and number
//It returns boolean.
function checkTemp (currentTemp) {
if (currentTemp > 30 || currentTemp <-10) {
return false;
} else {
return true;
}
}
userInput = prompt("Enter the current temparature");
var checkTemp = checkTemp(userInput);
if (checkTemp === false) {
alert("Yikes! Too hot/too cold for dog walking!")
}
else{
alert("You're good, have a nice walk!")}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

///////////STRETCH
/*function checkTemp (currentTemp) {
if (currentTemp > 30) {
alert("Yikes! Too hot for dog walking!");
} else if (currentTemp <-10) {
alert("Yikes! Too cold to for dog walking!");}
else {
alert("You're good, have a nice walk!");
}
}

userInput = prompt("Enter the current temparature");
var checkTemp = checkTemp(userInput);
*/























/*/////
var userInput = prompt("Enter the current temparature");
var goodTemp = checkTemp(userInput);

if (goodTemp === false) {
alert("Yikes! Too hot for dog walking!")
}
else{
alert("You're good, have a nice walk!")}*/
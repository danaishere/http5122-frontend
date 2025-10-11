var denied = "Access Denied.";
var correctTeamNum = 3;

//popupbox
var teamNum = prompt("Enter your team number:");

//check input
if (teamNum != correctTeamNum) {
  alert(denied);
}
else {
  var userInput = prompt("Enter you first name:").toUpperCase();

  //check fname
if (userInput == "JIYA") {
        alert("Hello Jiya John, welcome!");
    }
    else if (userInput == "JESSICA") {
        alert("Hello Jessica Marie Abad, welcome!");
    }
    else if (userInput == "DAVID") {
        alert("Hello David Henry, welcome!");
    }
    else if (userInput == "SHREYA") {
        alert("Hello Shreya Parmar, welcome!");
    }
    else {
        alert(denied);
    }
}




//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var email;
var userInput;

//==== LOGIC =============
var userInput = confirm("Would you like to join our mailing list?");
console.log(userInput);

if (userInput === true) {
  var email = prompt("Your email...", "example@email.com");
  if (email === "" || email === null || email === "example@email.com") 
{
    alert("Thank you, but your email was not valid.");
  } else {
    alert("Thank you, our next newsletter will be sent to " + email);
  }

} else {
    alert("Thank you, we will not bother you again.");
  }

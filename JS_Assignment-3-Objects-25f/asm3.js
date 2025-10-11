
//object
var CoffeeDrink = {
  drink: "Cold Brew",
  milk: "Oat",
  roastLevel: "Light",
  cupsBrewedToday: 0,

//func
brew: function(){
CoffeeDrink.cupsBrewedToday= CoffeeDrink.cupsBrewedToday+1;
alert("Cups brewed today: "+ CoffeeDrink.cupsBrewedToday);
}
}
console.log(CoffeeDrink);

//input & alert changes
var newMilk = prompt("Enter your milk (Oat, Dairy, Soy, or Skim)", CoffeeDrink.milk);
CoffeeDrink.milk=newMilk;
console.log(CoffeeDrink);
alert("Your milk is: " + CoffeeDrink.milk);

//2nd change
var newRoast = prompt("Enter your roast level (Light, Dark, French)",CoffeeDrink.roastLevel);
CoffeeDrink.roastLevel=newRoast;
console.log(CoffeeDrink);
alert("Your roast level is: " + CoffeeDrink.roastLevel);

//3rd change
CoffeeDrink.brew();
console.log(CoffeeDrink);


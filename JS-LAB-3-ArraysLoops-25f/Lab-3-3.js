//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var cartPrices = [];
var threshold = 35;
var total = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (total < threshold) {

	//GET ITEM COST FROM USER
	var price = prompt("Enter the total cost of your items:");
	
	//CONVERT USER INPUT TO A NUMBER
	price = parseInt(price)

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	total += price;
	
	//PUSH ITEM COST TO CART ARRAY
	cartPrices.push(price);
}

//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free! (Total: $" + total + ")");

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + cartPrices.join(" | "));


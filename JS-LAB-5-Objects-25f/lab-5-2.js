//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var customer={
//2. Add the required properties to your object.
lastName:"Edwards",
branchNumber:236,
accountBalance:500.25,
interestRate:1.03,
multipleAccounts: true, 

//3. Add your first method and test it. Remember, the methods will change the properties of the object.
makeDeposit: function(amount) {
    customer.accountBalance = customer.accountBalance + amount;
    return "Thank you, your current balance is now $" + customer.accountBalance.toFixed(2);
  },

//4. Add your second method and test it.
makeWithdrawal: function(amount) {
    customer.accountBalance = customer.accountBalance - amount;
    return "Thank you, your current balance is now $" + customer.accountBalance.toFixed(2);
  },

///stretch:
addInterest: function() {
  var appliedRate = customer.interestRate;

  if (customer.multipleAccounts) {
    appliedRate = appliedRate + 0.005;
  }

  customer.accountBalance = customer.accountBalance * appliedRate;
  return "Thank you, your current balance is now $" + customer.accountBalance.toFixed(2);
}};

//5. Create the required output to complete steps 6-10 of the lab.
console.log("Starting balance: $" + customer.accountBalance.toFixed(2));

///deposit 200
var depositMsgVar = customer.makeDeposit(200);
console.log(depositMsgVar);


///withdraw 75
var withdrawMsgVar = customer.makeWithdrawal(75);
console.log(withdrawMsgVar);

//6. Once everything is working, tackle the Stretch Goal!
console.log(customer.addInterest());
console.log("Final balance: $" + customer.accountBalance.toFixed(2));
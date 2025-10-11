//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var ourTeam = ["Martin", "James", "Suga", "Mandy", "Anna"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log("Our team is " + ourTeam);

//REMOVE LAST MEMBER
ourTeam.pop(4);
console.log("Our team is now " + ourTeam);
//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift("Sean");
console.log("Our team now has " + ourTeam);

//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort();
console.log("Our team in alphabetically order: " + ourTeam);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have " + ourTeam.length + " people in our group.");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (var i = 0; i<ourTeam.length; i++){
console.log("Member at #" + (i+1) + " is: " + ourTeam[i]);
}

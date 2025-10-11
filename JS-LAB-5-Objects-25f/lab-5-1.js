//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject ={
name: "Dana",
age: 25,
gender: "female",
status: "student",
noti: function(){
alert("My name is "+meObject.name+" and I am a "+meObject.status+".")
}};
console.log(meObject.name);

meObject.noti();

// alert("My name is "+meObject.name+" and I am a "+meObject.status+".")
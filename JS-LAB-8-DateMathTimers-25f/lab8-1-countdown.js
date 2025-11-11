/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.addEventListener('load', pageLoad);
//create page load function
function pageLoad(){
	//create variables for required HTML elements
var todayElement = document.getElementById('todayData');
    var dueDateElement = document.getElementById('finalData');
    var messageElement = document.getElementById('dueData');
    var countMsgElement = document.getElementById('countMsg');

	//create variables for now date and due date
	var nowDate = new Date();
console.log(nowDate);

    var dueDate = new Date('December 12, 2024 18:00:00');
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	todayElement.innerHTML= nowDate.toDateString();
dueDateElement.innerHTML= dueDate.toDateString();

	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
var nowUTC = nowDate.getTime();
var dueDateUTC = dueDate.getTime();
var timeDiff = dueDateUTC - nowUTC;
	console.log(timeDiff);
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
var numDays = Math.floor(timeDiff/ (1000*60*60*24));
console.log(numDays);
				//1000 = milliseconds in 1 second, 60 secs in 1 min, 60 mins in 1 hour, 24 hours in a day. So we're calculating the milliseconds in a day. timeDiff divided this to get the days til dueDate.

	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
if (numDays <= 0) {
        countMsgElement.innerHTML = 'The Deadline for the Final Assignment has passed!';
    } else {
        messageElement.innerHTML = numDays;
    }
}
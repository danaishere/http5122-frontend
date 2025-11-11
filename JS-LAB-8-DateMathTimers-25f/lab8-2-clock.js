/* LAB 8.2 - STOP TIME */


//create page load listener
window.addEventListener('load', pageLoad);

//create page load function
function pageLoad() {

	//create variables for required HTML elements
	var hours = document.getElementById('hoursOut');
	var mins = document.getElementById('minsOut');
	var secs = document.getElementById('secsOut');
	//buttons
	var btn1 = document.getElementById('btnStart');
	var btn2 = document.getElementById('btnStop');

	//create time variable so all functions have access to it
	var clockA;

	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function timeDisplay() {
		var nowDate = new Date();
		var currentHrs = nowDate.getHours();
		var currentMins = nowDate.getMinutes();
		var currentSecs = nowDate.getSeconds();

		hours.innerHTML = currentHrs;
		mins.innerHTML = ':' + currentMins;
		secs.innerHTML = ':' + currentSecs;
	}

//add zero


	//CREATE FUNCTION TO START THE CLOCK.
	function startClock() {
		clockA = setInterval(timeDisplay, 1000);

	}

	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock() {
		timeDisplay();
		clearInterval(clockA);
	}

	// SET EVENT LISTENERS
	//document.getElementById('btnStart').addEventListener('click',startClock);
	//document.getElementById('btnStop').addEventListener('click',stopClock);
	btn1.onclick = startClock;
	btn2.onclick = stopClock;

}

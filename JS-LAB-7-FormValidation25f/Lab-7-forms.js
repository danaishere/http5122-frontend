/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
    name: "",
    pc: "",
    speed: "",
    cost: 0
};

//==== CREATE YOUR PSEUDOCODE COMMENTS FIRST
//1.form submissions
window.onload = function () {
    var formHandle = document.forms.form_ship;
    var thanksWrap = document.getElementById('thanks_msg');

    //hide form, show thanks
    formHandle.onsubmit = function () {
        formHandle.style.display = 'none';
        thanksWrap.style.display = 'block';

        //variables 
        var nameInput = document.getElementById('in_Name');
        var pcInput = document.getElementById('in_pc');
        var speedSelect = document.getElementById('in_Speed');

        //name validation
        if (nameInput.value === "") {
            //show form but hide thanks (what I missed yesterday)
            formHandle.style.display = 'block';
            thanksWrap.style.display = 'none';

            nameInput.style.backgroundColor = 'red';
            nameInput.focus();

            //prevent refresh
            return false;
        }

        //for postal code validation
        if (pcInput.value === "") {
            formHandle.style.display = 'block';
            thanksWrap.style.display = 'none';

            pcInput.style.backgroundColor = 'red';
            pcInput.focus();
            return false;
        }

        //stretch goal 1
        if (speedSelect.value === "0") {
            formHandle.style.display = 'block';
            thanksWrap.style.display = 'none';

            speedSelect.style.backgroundColor = 'red';
            speedSelect.focus();
            return false;
        }

        //stretch goal 2:
        shipInfo.name = nameInput.value;
        shipInfo.pc = pcInput.value;
        shipInfo.speed = speedSelect.options[speedSelect.selectedIndex].text;
        shipInfo.cost = speedSelect.value;

        // thanks msg w/ ship info
        var thanksCustomer = document.getElementById('thanksCustomer');
        var thanksPC = document.getElementById('thanksPC');
        var thanksSpeed = document.getElementById('thanksSpeed');
        var thanksCost = document.getElementById('thanksCost');

        thanksCustomer.innerHTML = shipInfo.name;
        thanksPC.innerHTML = shipInfo.pc;
        thanksSpeed.innerHTML = shipInfo.speed;
        thanksCost.innerHTML = shipInfo.cost;

        //stop the form from submitting
        return false;
    }; 
}; 

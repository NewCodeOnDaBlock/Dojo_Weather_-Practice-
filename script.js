
function shadowEffectOn(element){

    element.classList.add("shadow-effect");
}
function shadowEffectOff(element){

    element.classList.remove("shadow-effect");
}

let clickedAccept = true;
let cookiePopUp = document.querySelector("#cookie-message");

function cookieAccept(){

    if(clickedAccept){

        cookiePopUp.remove();
    }
}

function pressDown(element){

    element.classList.add("button-down");
}

let tempSelect = document.querySelector(".symbol-select");
let celcOption = document.querySelector(".celcsius-option");
let farhenOption = document.querySelector(".farhenheight-option");
let currentLow1 = document.querySelector(".current-low1");
let currentHigh1 = document.querySelector(".current-high1");
let currentLow2 = document.querySelector(".current-low2");
let currentHigh2 = document.querySelector(".current-high2");
let currentLow3 = document.querySelector(".current-low3");
let currentHigh3 = document.querySelector(".current-high3");
let currentLow4 = document.querySelector(".current-low4");
let currentHigh4 = document.querySelector(".current-high4");
let currentLow5 = document.querySelector(".current-low5");
let currentHigh5 = document.querySelector(".current-high5");
let currentLow6 = document.querySelector(".current-low6");
let currentHigh6 = document.querySelector(".current-high6");
let currentLow7 = document.querySelector(".current-low7");
let currentHigh7 = document.querySelector(".current-high7");
let pickedTemp = true;

function selectTemperature(){

    if(farhenOption = pickedTemp){

        currentLow1.innerText = "80\u00B0 F";
        currentHigh1.innerText = "97\u00B0 F";
        currentLow2.innerText = "80\u00B0 F";
        currentHigh2.innerText = "97\u00B0 F";
        currentLow3.innerText = "80\u00B0 F";
        currentHigh3.innerText = "97\u00B0 F";
        currentLow4.innerText = "80\u00B0 F";
        currentHigh4.innerText = "97\u00B0 F";
        currentLow5.innerText = "80\u00B0 F";
        currentHigh5.innerText = "97\u00B0 F";
        currentLow6.innerText = "80\u00B0 F";
        currentHigh6.innerText = "97\u00B0 F";
        currentLow7.innerText = "80\u00B0 F";
        currentHigh7.innerText = "97\u00B0 F";
        pickedTemp = false;   
    }
    else {

        currentLow1.innerText = "80\u00B0 C";
        currentHigh1.innerText = "97\u00B0 C";
        currentLow2.innerText = "80\u00B0 C";
        currentHigh2.innerText = "97\u00B0 C";
        currentLow3.innerText = "80\u00B0 C";
        currentHigh3.innerText = "97\u00B0 C";
        currentLow4.innerText = "80\u00B0 C";
        currentHigh4.innerText = "97\u00B0 C";
        currentLow5.innerText = "80\u00B0 C";
        currentHigh5.innerText = "97\u00B0 C";
        currentLow6.innerText = "80\u00B0 C";
        currentHigh6.innerText = "97\u00B0 C";
        currentLow7.innerText = "80\u00B0 C";
        currentHigh7.innerText = "97\u00B0 C";
        pickedTemp = true;   
    }
}


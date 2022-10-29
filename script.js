"use strict";

//selecting dom's

const busTime = document.querySelector(".bus--time--input");
const sixHours = document.querySelector(".six--hours");
const sevenHours = document.querySelector(".seven--hours");
const eightHours = document.querySelector(".eight--hours");
const nineHours = document.querySelector(".nine--hours");
const submit = document.querySelector(".give--me--answer--input");

//adding variables
let busHour;
let selectedAmountOfHours;
let isChoosenHour = false;
let isChoosenBus = false;
let sleepTime;
let wakeUp;

//functions
const selectingHours = function (x) {
  isChoosenHour = true;
  selectedAmountOfHours = x + 1;
  return isChoosenHour;
};

function timeStringToFloat(time) {
  let hoursMinutes = time.split(/[.:]/);
  let hours = parseInt(hoursMinutes[0], 10);
  let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}

function NumToTime(num) {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  if (minutes + "".length < 2) {
    minutes = "0" + minutes;
  }
  return hours + ":" + minutes;
}

//event listeners
sixHours.addEventListener("click", function () {
  selectingHours(6);
});

sevenHours.addEventListener("click", function () {
  selectingHours(7);
});

eightHours.addEventListener("click", function () {
  selectingHours(8);
});

nineHours.addEventListener("click", function () {
  selectingHours(9);
});

submit.addEventListener("click", function () {
  if (busTime.value !== "") {
    isChoosenBus = true;
  }
  if ((isChoosenHour === true) & (isChoosenBus === true)) {
    sleepTime = timeStringToFloat(busTime.value) - selectedAmountOfHours;
    wakeUp = sleepTime + selectedAmountOfHours;
    localStorage.setItem("wakeHour", `${NumToTime(wakeUp)}`);
    localStorage.setItem("timeSleep", `${NumToTime(sleepTime)}`);
    window.location = "answer.html";
  }
});

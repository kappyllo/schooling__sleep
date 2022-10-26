"use strict";

//selecting dom's

const busTime = document.querySelector(".bus--time--input");
const sixHours = document.querySelector(".six--hours");
const sevenHours = document.querySelector(".seven--hours");
const eightHours = document.querySelector(".eight--hours");
const nineHours = document.querySelector(".nine--hours");
const submit = document.querySelector(".give--me--answer--input");
const sleepHour = document.querySelector(".sleep--time");
const wakeUpHour = document.querySelector(".wakeup--time");

//adding variables
let busHour;
let selectedAmountOfHours;
let isChoosenHour = false;
let isChoosenBus = false;
let sleepTime;

//functions
const selectingHours = function (x) {
  isChoosenHour = true;
  selectedAmountOfHours = x;
  return isChoosenHour;
};

function timeStringToFloat(time) {
  let hoursMinutes = time.split(/[.:]/);
  let hours = parseInt(hoursMinutes[0], 10);
  let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
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
    window.location = "answer.html";
  }
});

if (window.location == "answer.html") {
  sleepHour.textContent = sleepTime;
}
// dodac zeby selectedhour bylo zapisane jako element w pliku answer html

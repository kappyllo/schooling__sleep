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

//functions
const selectingHours = function () {
  isChoosenHour = true;
  return isChoosenHour;
};

//event listeners

sixHours.addEventListener("click", function () {
  selectingHours();
});

sevenHours.addEventListener("click", function () {
  selectingHours();
});

eightHours.addEventListener("click", function () {
  selectingHours();
});

nineHours.addEventListener("click", function () {
  selectingHours();
});

submit.addEventListener("click", function () {
  if (busTime.value !== "") {
    isChoosenBus = true;
  }
  if ((isChoosenHour === true) & (isChoosenBus === true)) {
    window.location = "answer.html";
  }
});

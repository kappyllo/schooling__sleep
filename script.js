"use strict";

//selecting dom's

const busTime = document.querySelector(".bus--time--input");
const sixHours = document.querySelector(".six--hours");
const sevenHours = document.querySelector(".seven--hours");
const eightHours = document.querySelector(".eight--hours");
const nineHours = document.querySelector(".nine--hours");
const submit = document.querySelector(".give--me--answer--input");

let busHour;
let selectedAmountOfHours;
let isChoosen = false;

submit.addEventListener("click", function () {
  if (isChoosen == false) {
    submit.onclick = "location.href='d.html';";
  }
});

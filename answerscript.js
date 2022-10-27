"use strict";

const sleepHour = document.querySelector(".sleep--time");
const wakeUpHour = document.querySelector(".wakeup--time");

sleepHour.textContent = localStorage.timeSleep;

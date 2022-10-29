"use strict";

const sleepHour = document.querySelector(".sleep--time");
const wakeUpHour = document.querySelector(".wakeup--time");
const globalTime = localStorage.timeSleep;
const globalWake = localStorage.wakeHour;

sleepHour.textContent = globalTime;
wakeUpHour.textContent = globalWake;

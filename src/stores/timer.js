// -------------------------------------------------------------------- Imports

import ValueStore from "@hkd-base/classes/ValueStore.js";
import { expectPositiveNumber, expectBoolean } from "@hkd-base/helpers/expect.js";

// ------------------------------------------------------------------ Variables

let timerID;
let color = 'Red';
let message = '';
let status = '';

export const timer = new ValueStore(0);

export const timerStarted = new ValueStore(false);
export const timerEnded = new ValueStore(true);

export const stateWorking = new ValueStore();

export const timerInterval = new ValueStore(0);



const styles = [
    'color: yellow',
    'background: crimson',
    'font-size: 20px',
    'border: 1px solid red',
    'text-shadow: 1x 1px black',
    'padding: 10px',
  ].join(';'); 


export function startTimer() {
    if (timerStarted.get() === true) {
        console.log('%cTIMER HAS ALREADY STARTED!', styles);
        return;
    } 
    if (timer.get() <= 0) {
        console.log('%cTIMER HAS ENDED!', styles);
        return;
    }
    if (timerID) {
        clearInterval(timerID);
        timerID = null;
    }
    timerStarted.set(true);
    timerID = setInterval(() => {
      const newValue = timer.get() - 0.1;
      if (newValue >= 0) {
        timer.set(newValue);
      } else {
        timerStarted.set(false);
        timerEnded.set(true);
        timer.set(0);
        clearInterval(timerID);
        timerID = null;
    }
    },100);
}

export function pauseTimer() {
    if (timerStarted.get() === false) {
        console.log('%cTIMER HAS NOT STARTED YET', styles);
        return;
    } 
    if (timer.get() <= 0) {
        console.log('%cTIMER HAS ENDED!', styles);
        return;
    }
    if (timerID) {
        clearInterval(timerID);
        timerID = null;
    }
    timerStarted.set(false);
}

export function setTimer(seconds, _stateWorking = true) {
    expectPositiveNumber(seconds, "Invalid parameter: `seconds`");
    expectBoolean(_stateWorking, "Invalid Parameter: `_stateWorking`");

    if (timerID) {
        clearInterval(timerID);
        timerID = null;
    }
    timerInterval.set(seconds);
    stateWorking.set(_stateWorking);
    timerStarted.set(false);
    timerEnded.set(false);
    timer.set(seconds);
}
// Section 15 exercise: a counter, three ways.

import { useState } from "../src/s15-state.js";

const countEl = document.querySelector("#count");
const parityEl = document.querySelector("#parity");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const reset = document.querySelector("#reset");
const stepInput = document.querySelector("#step");

// Render function
function render() {
  const count = getCount();

  countEl.textContent = count;
  parityEl.textContent = count % 2 === 0 ? "even" : "odd";
  dec.disabled = count - getStep() < 0;
  document.title = `Count: ${count}`;
}

// State
const [getCount, setCount] = useState(0, render);
const [getStep, setStep] = useState(1, render);

// Increment
inc.addEventListener("click", () => {
  setCount((c) => c + getStep());
});

// Decrement
dec.addEventListener("click", () => {
  setCount((c) => c - getStep());
});

// Reset
reset.addEventListener("click", () => {
  setCount(0);
});

// Change step
stepInput.addEventListener("input", () => {
  const step = Number(stepInput.value);
  setStep(Number.isInteger(step) && step >= 1 ? step : 1);
});

// Initial render
render();
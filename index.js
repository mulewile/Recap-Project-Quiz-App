const markbutton = document.querySelector('[data-js="mark--button"]');
markbutton.addEventListener("click", () => {
  markbutton.classList.add("marked--dark");
});

const mainElement = document.querySelector('[data-js="main"]');
const questionElement = document.querySelector('[data-js="questions"]');
markbutton.addEventListener("click", () => {
  questionElement.classList.add("marked--light");
});

const markButtonOne = document.querySelector('[data-js="markbutton--one"]');
markButtonOne.addEventListener("click", () => {
  markButtonOne.classList.add("marked--dark");
});

const questionOneElement = document.querySelector('[data-js="questions--one"]');
markButtonOne.addEventListener("click", () => {
  questionOneElement.classList.add("marked--light");
});

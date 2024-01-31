const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let counter = 0;

number.innerText = counter;

const updateText = () => {
  number.innerText = counter;
};

const handlePlus = (e) => {
  counter++;
  updateText();
};
const handleMinus = (e) => {
  counter--;
  updateText();
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);

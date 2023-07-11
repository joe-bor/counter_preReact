let counter = 0;

const countDisplay = document.getElementById("count");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const input = document.getElementById("number");

addBtn.addEventListener("click", () => {
  counter += parseInt(input.value);
  counter > 0
    ? (countDisplay.style.color = "black")
    : (countDisplay.style.color = "red");
  countDisplay.innerText = counter;
  console.log(counter);
});

subtractBtn.addEventListener("click", () => {
  counter -= parseInt(input.value);
  counter > 0
    ? (countDisplay.style.color = "black")
    : (countDisplay.style.color = "red");
  countDisplay.innerText = counter;
  console.log(counter);
});

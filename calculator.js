const inputField = document.querySelector(".input");
const inputDivide = document.querySelector(".divide");
const inputPlus = document.querySelector(".plus");
const inputMinus = document.querySelector(".minus");
const inputDot = document.querySelector(".dot");
const inputInto = document.querySelector(".into");
const zeroBtn = document.querySelector(".zero-btn");
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    inputField.value += button.textContent;
  });
});

document.querySelector(".clear").addEventListener("click", function () {
  inputField.value = "";
});
document.querySelector(".delete").addEventListener("click", function () {
  inputField.value = inputField.value.slice(0, -1);
});
document.querySelector(".equal").addEventListener("click", function () {
  const equalButton = document.querySelector(".equal");
  try {
    inputField.value = eval(inputField.value);
  } catch (error) {
    alert("Invalid Expression");
    inputField.value = "Error";
  }
});
flag = 1;
document.querySelector(".plus-minus").addEventListener("click", function () {
  if ((document.querySelector(".plus-minus").clicked = true && flag == 1)) {
    inputField.value = inputField.value + "+";
    flag = 0;
  } else {
    inputField.value = inputField.value + "-";
    flag = 1;
  }
});
document.querySelector(".divide").addEventListener("click", function () {
  if (
    (document.querySelector(".divide").clicked = true && inputField.slice(-1))
  ) {
    inputField.value = inputField.value + "/";
  }
});
// Operator buttons
document.querySelector(".divide").addEventListener("click", () => {
  if (inputField.value.slice(-1) !== "/") {
    inputField.value += "/";
  }
});

document.querySelector(".plus").addEventListener("click", () => {
  if (inputField.value !== "" && inputField.value.slice(-1) !== ".") {
    inputField.value += "+";
  }
});

document.querySelector(".minus").addEventListener("click", () => {
  if (inputField.value !== "" && inputField.value.slice(-1) !== ".") {
    inputField.value += "-";
  }
});

document.querySelector(".dot").addEventListener("click", () => {
  if (inputField.value !== "" && inputField.value.slice(-1) !== ".") {
    inputField.value += ".";
  }
});

document.querySelector(".into").addEventListener("click", () => {
  if (inputField.value.slice(-1) !== "*") {
    inputField.value += "*";
  }
});
document.querySelector(".zero-btn").addEventListener("click", () => {
  inputField.value = inputField.value + "0";
});

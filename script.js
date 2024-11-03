let isResultDisplayed = false;
let display = document.querySelector("input[name='display']");

function insertValue(value) {
  if (isResultDisplayed) {
    display.value = "";
    isResultDisplayed = false;
  }
  display.value += value;
}
function calculateResult() {
  try {
    display.value = eval(display.value);
    isResultDisplayed = true;
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
  isResultDisplayed = false;
}

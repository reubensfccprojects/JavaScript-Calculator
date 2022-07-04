const calculator = document.getElementById("calculator");
const calculatorKeys = document.getElementById("keys");
const calculatorDisplay = document.getElementById("display");
const clearBtn = document.getElementById("clear");

// Functionality for when key is clicked
calculatorKeys.children.forEach((key) => {
  key.addEventListener("click", (event) => {
    const keyContent = event.target.innerText;
    // Set the calculator display to nothing so that 0 isn't added to your display
    calculatorDisplay.textContent = "";
    // Update the calculator display
    calculatorDisplay.textContent = calculatorDisplay.textContent + keyContent;
  });
});

// Clearing the display if clear button is clicked
clearBtn.addEventListener("click", (_) => {
  calculatorDisplay.textContent = "0";
});

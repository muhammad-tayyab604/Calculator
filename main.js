// To display numbers in text box
function numberWrite(value) {
    document.getElementById("dis").value += value;
}

function New() {
  numberWrite(value);
  ClearDisplay();
}

// To clear all numbers
function ClearDisplay() {
    document.getElementById("dis").value = '';
}

// To calculate end result
function calculateResult() {
    var display = document.getElementById("dis");
    var result;
    
    try {
      result = eval(display.value);
    } catch (error) {
      result = "Error";
    }
    
    display.value = result;
    
  }
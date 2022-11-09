function numberTypeConverter() {
  // Essential variables
  const number = document.getElementById("number").value;
  const selectedNumber1 = document.getElementById("firstType");
  const selectedNumber2 = document.getElementById("secondType");
  const value = firstType.options[selectedNumber1.selectedIndex].value;
  const value2 = secondType.options[selectedNumber2.selectedIndex].value;
  const reset = document.getElementById("reset");
  const output = document.getElementById("result");
  const num = +number;

  // All conditions
  if (value == "decimal" && value2 == "binary") {
    output.value = num.toString(2);
  } else if (value == "decimal" && value2 == "octal") {
    output.value = num.toString(8);
  } else if (value == "decimal" && value2 == "hexadecimal") {
    output.value = num.toString(16);
  } else if (value == "binary" && value2 == "decimal") {
    output.value = parseInt(number, 2);
  } else if (value == "binary" && value2 == "octal") {
    output.value = parseInt(number, 2).toString(8);
  } else if (value == "binary" && value2 == "hexadecimal") {
    output.value = parseInt(number, 2).toString(16);
  } else if (value == "octal" && value2 == "decimal") {
    output.value = parseInt(number, 8).toString(10);
  } else if (value == "octal" && value2 == "binary") {
    output.value = parseInt(number, 8).toString(2);
  } else if (value == "octal" && value2 == "hexadecimal") {
    output.value = parseInt(number, 8).toString(16);
  } else if (value == "hexadecimal" && value2 == "decimal") {
    output.value = parseInt(number, 16).toString(10);
  } else if (value == "hexadecimal" && value2 == "binary") {
    output.value = parseInt(number, 16).toString(2);
  } else if (value == "hexadecimal" && value2 == "octal") {
    output.value = parseInt(number, 16).toString(8);
  }

  // Reset the number
  reset.addEventListener("click", () => {
    document.getElementById("number").value = null;
    document.getElementById("result").value = 0;
  });
}

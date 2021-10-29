const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;
  console.log(numberTemp);
  const tempSelection = document.getElementById("temp_diff");
  const valueTemp = tempSelection.options[tempSelection.seletedIndex].value;
  console.log(valueTemp);

  const celToFah = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const fehToCel = (fah) => {
    let celcius = Math.round(((fah - 32) * 5) / 9);
    return celcius;
  };

  let result;
  if (valueTemp == "cel") {
    result = celToFah(numberTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${result} deg Fahrenheit`;
  } else {
    result = fehToCel(numberTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${result} deg Celcius`;
  }
};

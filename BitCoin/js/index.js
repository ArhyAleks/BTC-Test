function countBit() {
    let num1 = Number(document.getElementById("value_1").value);
    let num2 = Number(document.getElementById("value_2").value);
    if (Number.value == "") {
      document.getElementById("outputbit").innerHTML = 0;
    } else {
      document.getElementById("outputbit").innerHTML = num2 / num1;
    }
}


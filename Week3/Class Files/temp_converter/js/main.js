var tempC = prompt("What is the temperature in Celsius?", "");

function tempF(tempC) {
  return tempC * 9 / 5 + 32;
}

var threshHold = 70;

if (tempF(tempC) < threshHold) {
 document.body.style.backgroundColor = 'gray';
} else {
 document.body.style.backgroundColor = 'yellow';
}

document.getElementById("write-temp").innerHTML = tempF(tempC);

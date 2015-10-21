// Create a Variable called total with a value of 0


// Use onsubmit that calls the function enter


// Create a function called enter
var total = 0;
// It should have a variable for the form entry that gets the value from newEntry
document.getElementById('entry').onsubmit = enter;
// It should then change the value of entry to a number
function enter () {
  var entry = document.getElementById('newEntry').value;
  entry = parseFloat(entry);
  currency = currencyFormat(entry);
  document.getElementById
// It should have then assign a value to the currency variable using the currencyFormat function you'll create below.
// It should set the innerHTML of the entries to the currency value
// It should reassign the value of total by adding entry to total
// It should set the innerHTML of the total to the total value using the currencyFormat function
// It should then clear the value of newEntry
// It should return false to close the function
// Google ParseFloat


// Create the currencyFormat 
// It should take one parameter that it will store in the a currency variable and return that variable
// Google toFixed(2)


function enter () {
  var entry = document.getElementById('newEntry').value;
  entry = parseFloat(entry);
  currency = currencyFormat(entry);

  document.getElementById('entries').innerHTML =+ '<tr><td></td></td>' +
  currency + '</td></tr>';
  total = 

}
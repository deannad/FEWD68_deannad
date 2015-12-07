
function validateCity(name) {
  var filePath;
  switch (name) {
    case "Austin":
    case "ATX":
      filePath="austin.jpg";
      break;
    case "Los Angeles":
    case "LA":
    case "LAX":
      filePath="la.jpg";
      break;
    case "New York":
    case "NY":
    case "NYC":
      filePath="nyc.jpg";
      break;
    case "San Francisco":
    case "SF":
    case "Bay Area":
      filePath="sf.jpg";
      break;
    case "Sydney":
    case "SYD":
      filePath="sydney.jpg";
      break;
    default:
      alert("Your city is not yet supported.");
      console.log("Entry was not a supported city.");
      return;
  }
  $("body").css("backgroundImage", "url(../starter_code/images/" + filePath + ")");

 //  if (name === "Austin" || name === "ATX" ) {
 //  $("body").css("backgroundImage", "url(../starter_code/images/austin.jpg)");
 //  console.log("It is Austin.");
 // } else if (name === "Los Angeles" || name ==="LA" || name === "LAX") {
 //  $("body").css("backgroundImage", "url(../starter_code/images/la.jpg)");
 //  console.log("It is LA.");
 // } else if (name === "New York" || name === "New York City" || name === "NYC") {
 //  $("body").css("backgroundImage", "url(../starter_code/images/nyc.jpg)");
 //  console.log("It is New York.");
 // } else if (name === "San Francisco" || name === "SF" || name ==="Bay Area") {
 //  $("body").css("backgroundImage", "url(../starter_code/images/sf.jpg)");
 //  console.log("It is San Francisco");
 // } else if (name === "Sydney" || name === "SYD") {
 //  $("body").css("backgroundImage", "url(../starter_code/images/sydney.jpg)");
 //  console.log("It is Sydney");
 // } else if ( typeof name =="undefined" || name == null) {
 //  alert("Please fill in the field!");
 //  console.log("The form was left blank.");
 // } else {
 //  alert("Your city is not yet supported.");
 //  console.log("Entry was not a supported city.");
 // }
}

$(document).ready(function() {
  var inputField = $("#city-type");
  var submit = $("#submit-btn"); 
  inputField.on("input", function(event) {
    if (event.target.value == "") {
      submit.prop("disabled", true);
    } else {
      submit.prop("disabled", false);
    }
  });
  submit.on("click", function(event) {
    event.preventDefault();
    var cityName = inputField.val();
    console.log ("City name variable created.");
    return validateCity(cityName);
  });
});


$(document).ready(function(){
  var cityNames = ["NYC", "SF", "LA", "ATX", "SYD"];

  for (i = 0; i < cityNames.length; i++) {
    $("#city-type").append("<option>" + cityNames[i] + "</option>");
  }

  $("#city-type").change(function() {
      //Act on the event
      var city = $("#city-type").val();
      if (city == "NYC"){
        $("body").css("backgroundImage", "url(../starter_code/images/nyc.jpg)");
      }
      else if (city == "SF"){
        $("body").css("backgroundImage", "url(../starter_code/images/sf.jpg)");
      }
      else if (city == "LA"){
        $("body").css("backgroundImage", "url(../starter_code/images/la.jpg)");
      }
      else if (city == "ATX"){
        $("body").css("backgroundImage", "url(../starter_code/images/austin.jpg)");
      }
      else if (city == "SYD"){
        $("body").css("backgroundImage", "url(../starter_code/images/sydney.jpg)");
      }
      else if (city == "Select a City"){
        $("body").css("backgroundImage", "url(../starter_code/images/citipix_skyline.jpg)");
      }
  });
});



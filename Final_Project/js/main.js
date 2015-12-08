$(document).ready(function() {
  
  $("#pageTopics").Stickyfill();

  // $( "p.question" ).on( "click", function() {
  //   console.log ("Click registered");
  //   $(this).addClass("pointer");
  //   console.log ("Pointer added");
  //   $( this ).siblings().slideToggle();
  // });


  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook:.15}});
  controller.scrollTo(function(target) {
    TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target, // scroll position of the target along y axis
      autoKill : true // allows user to kill scroll action smoothly
    },
    ease : Cubic.easeInOut
    });
  });

  //  Bind scroll to anchor links
  $(document).on("click", "a[href^=#]", function(e) {
    var id = $(this).attr("href") + " .anchor"; // grab the href attribute value

    if($(id).length > 0) {
      e.preventDefault(); // prevents default behavior of links.
      // trigger scroll
      controller.scrollTo(id);
          // If supported by the browser we can also update the URL
    }
  });
  
  var scenes = [];
  var sectionElement;
  var counter = 0;
  function heightChecker(elementToMeasure){
    // console.log(counter++, elementToMeasure.id);
    return elementToMeasure.clientHeight;
  }

  for (var i = 1; i <= 6; i++) {
    sectionElement = document.getElementById("section" + i)
    var scene = new ScrollMagic.Scene({
      triggerElement: sectionElement,
      duration: heightChecker.bind(this, sectionElement)
      }) // point of execution
    .setClassToggle("#menuItem"+i, "active") // add class toggle
    // .addIndicators(); // add indicators (requires plugin)
    scenes.push(scene);
    $( "#section"+ i + " p.question" ).on( "click", function() {
      $(this).addClass("pointer");
      var start = Date.now();
      $( this ).siblings().slideToggle({
        complete: function(){
          var end = Date.now();
          console.log("Animation length", end - start);
        }
      });
    });
  }

  controller.addScene(scenes);


  var data = $( "#formSection" ).on( "submit", function( event ) {
    event.preventDefault();
    console.log( $( "input" ).val() );

    if ($( "input" ).val().indexOf("?") == -1) {
      $( "#formSection div" ).text( "That's not a question. Please, send a question." );
      $( "#formSection div" ).removeClass("invisible");
      $("#userQuestion").val("");
    } else {
      $( "#formSection div" ).text( "Thanks for submitting your question!" );
      $( "#formSection div" ).removeClass("invisible");
      $("#userQuestion").val("");
    }
  });

  // if (data == "a") {
  //   alert("You did it!");

  // } else {
  //   alert("Nope :/");

  // }

});



$(document).ready(function() {
  
  $("#pageTopics").Stickyfill();

  $( "p.question" ).on( "click", function() {
    console.log ("Click registered");
    $(this).addClass("pointer");
    console.log ("Pointer added");
    $( this ).siblings().slideToggle();
  });


  var controller = new ScrollMagic.Controller({globalSceneOptions: {reverse: true, triggerHook:.15}});
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
  var id = $(this).attr("href"); // grab the href attribute value

  if($(id).length > 0) {
    e.preventDefault(); // prevents default behavior of links.
    // trigger scroll
    controller.scrollTo(id);
        // If supported by the browser we can also update the URL
  }
});
  

  var scene1 = new ScrollMagic.Scene({triggerElement: "#section1", duration: $("#section1").height()}) // point of execution
    .setClassToggle("#menuItem1", "active") // add class toggle
    .addIndicators(); // add indicators (requires plugin)

  var scene2 = new ScrollMagic.Scene({triggerElement: "#section2", duration: $("#section2").height()}) // point of execution
    .setClassToggle("#menuItem2", "active") // add class toggle
    .addIndicators(); // add indicators (requires plugin)

  var scene3 = new ScrollMagic.Scene({triggerElement: "#section3", duration: $("#section3").height()}) // point of execution
    .setClassToggle("#menuItem3", "active") // add class toggle
    .addIndicators(); // add indicators (requires plugin)

  var scene4 = new ScrollMagic.Scene({triggerElement: "#section4", duration: $("#section4").height()}) // point of execution
    .setClassToggle("#menuItem4", "active") // add class toggle
    .addIndicators(); // add indicators (requires plugin)

  var scene5 = new ScrollMagic.Scene({triggerElement: "#section5", duration: $("#section5").height()}) // point of execution
    .setClassToggle("#menuItem5", "active") // add class toggle
    .addIndicators(); // add indicators (requires plugin)

  var scene6 = new ScrollMagic.Scene({triggerElement: "#section6", duration: $("#section6").height()}) // point of execution
    .setClassToggle("#menuItem6", "active") // add class toggle
    .addIndicators(); // add indicators (requires plugin)


  controller.addScene([
  scene1,
  scene2,
  scene3,
  scene4,
  scene5,
  scene6
  ]);

  $("#userQuestion").keyup(function(){
    alert(this.value);
  });


});



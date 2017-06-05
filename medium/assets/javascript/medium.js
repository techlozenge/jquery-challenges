/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    // bonus - play a sound when the shoot button is pushed and a goal is scored
    var audio = new Audio('applause6.mp3');

    // prettify the page... WITH JQUERY!
    $("#body").css("background-color","lightgray");
    $("#body").css("font-size", "34");
    $("#page-heading").html("Very Polite jQuery...");

    $("#reset").css("font-size", "40px");
    $("#reset").css("background-color", "black");
    $("#reset").css("color", "white");
    $(".reset").css("padding", "30px");

    $("#one").html("Fishers Fabulous");
    $("#teamone-shoot").css("font-size", "40px");
    $("#teamone-shoot").css("background-color", "blue");
    $("#teamone-shoot").css("color", "white");
    $(".left").css("padding", "30px");
    $(".left").css("border", "2px solid black");

    $("#two").html("Syphilitic Cows");
    $("#teamtwo-shoot").css("font-size", "40px");
    $("#teamtwo-shoot").css("background-color", "red");
    $("#teamtwo-shoot").css("color", "white");
    $(".right").css("padding", "30px");
    $(".right").css("border", "2px solid black");


    $("#reset").click(function(){
      let x = $("#num-resets").html();
      x++;
      $("#num-resets").html(x);
      $("#teamone-numshots").html(0);
      $("#teamone-numhits").html(0);
      $("#teamtwo-numshots").html(0);
      $("#teamtwo-numhits").html(0);
      console.log("Reset counters");
    })


    $("#teamone-shoot").click(function(){
      let x = $("#teamone-numshots").html();
      x++;
      $("#teamone-numshots").html(x);
      let randomBool = Math.random() >= 0.5;
      if (randomBool == 1) {
          let x = $("#teamone-numhits").html();
          x++;
          $("#teamone-numhits").html(x);
          audio.play();
      }
      console.log("team one: " + randomBool);
    })


    $("#teamtwo-shoot").click(function(){
      let x = $("#teamtwo-numshots").html();
      x++;
      $("#teamtwo-numshots").html(x);
      let randomBool = Math.random() >= 0.5;
      if (randomBool == 1) {
          let x = $("#teamtwo-numhits").html();
          x++;
          $("#teamtwo-numhits").html(x);
          audio.play();
      }
      console.log("team two: " + randomBool);
    })


  }) // end waiting on page load

})();

/**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * 1. NOTE: DONE - Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. NOTE: DONE - The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. NOTE: DONE - Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. NOTE: DONE - Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

 (function(){

   //jQuery equivelent to window.onload = function{}
   //code in here wont run until page loads
   $(function(){

      let panel_color = "red";

      // remove images in the right column
      $( "aside" ).remove();

      // this replaces all occurences of the word 'Bacon' with 'LASER VISION' using regex...
      var replaced = $("p").html().replace(/Bacon/g,'LASER VISION');
      $("p").html(replaced);

      // show only the even numbered links...
      // this works as well...
      //$( ".section-container .section:even" ).hide();
      // another way to hide them
      $( ".panel h5:odd").hide();

      // red to black to red to... wash/rinse/repeat...
      $( ".panel" ).click(function(){
         let x = $(".panel h1").css("color");
         if (x == "rgb(51, 51, 51)") {
            $(".panel h1").css({color: 'red'});
         } else {
            $(".panel h1").css({color: 'rgb(51, 51, 51)'});
         }
      })

      // Note that since JavaScript arrays use 0-based indexing, these selectors reflect that fact. This is why $( ".myclass:gt(1)" ) selects elements after the second element in the document with the class myclass, rather than after the first.

      //In contrast, :nth-child(n) uses 1-based indexing to conform to the CSS specification.


// This bit is incomplete... Spinning my wheels too much for this bit. Need a little help.

      // lets see what we're looking at first...
      $(".row .post").css("background-color", "lightgray");

      //$(".row .post p:nth-child(1)").css("background-color", "pink");
      //$(".row .post .row p:nth-child(1)").css("background-color", "pink");

      // this selects all of the posts
      //$(".row .post div:nth-child(2)").css("background-color", "pink");

      // this selects all of the posts
      $(".row .post div:nth-of-type(2)").css("background-color", "pink");

      // this selects 'share' in each post
      //$(".row .post .inline-list li:nth-child(2)").css("background-color", "pink");

   })

 })();

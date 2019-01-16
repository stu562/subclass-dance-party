$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    $('.dancer').mouseover(function() {
      $('.dancer').css('background-image', 'url("https://cdn.vox-cdn.com/thumbor/zb7zKF67rBkytmhyoc5UZL3faLQ=/0x0:1038x498/1200x800/filters:focal(436x166:602x332)/cdn.vox-cdn.com/uploads/chorus_image/image/51885633/Screen_Shot_2016_11_17_at_10.53.53_AM.0.png")')
    });
  });

  $('.lineUp').on('click', function(event){
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineUp();
    }
  });

  $('.dancePartner').on('click', function(event){
    for(var i = 0; i < window.dancers.length - 1; i += 2){
      //var temp = window.dancers[i].$node[0].style;
      if(window.dancers[i+1] !== undefined){
        var tempTop = window.dancers[i].$node[0].style.top;
        var tempLeft = window.dancers[i].$node[0].style.left;
        
        window.dancers[i].$node[0].style.top = window.dancers[i+1].$node[0].style.top;
        window.dancers[i].$node[0].style.left = window.dancers[i+1].$node[0].style.left;

        window.dancers[i+1].$node[0].style.top = tempTop;
        window.dancers[i+1].$node[0].style.left = tempLeft;
      }
    }
  });

});




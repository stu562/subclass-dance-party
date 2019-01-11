var ColorDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps); // inheriteance of Dancer prop
    // top, left, timeBetweenSteps);
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    // var oldStep = blinkyDancer.step;
    // this.oldStep = this.step;
    // return blinkyDancer;
  };
  
  ColorDancer.prototype = Object.create(Dancer.prototype);
  ColorDancer.prototype.constructor = ColorDancer;
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; //random #123456 hex digit when ran 
  }


ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);// this line is creating BlinkyDancer Step to equal Dancer Step function
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  getRandomColor(); //random hex-color 
  //apply css here 
  this.$node.toggle();
};
ColorDancer.prototype.lineUp = function() {
    
}

  
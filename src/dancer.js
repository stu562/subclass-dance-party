// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  //this - claifying 'this' to bind to Dancer constructor 
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // this.step.bind(this) - is a function 
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// var breakBoy = new Dancer(100,right, 500)
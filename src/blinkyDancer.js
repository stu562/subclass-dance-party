var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); // inheriteance of Dancer prop
  // for ever new object created, this is pointed to it at the time 
  // top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = blinkyDancer.step;
  // this.oldStep = this.step;
  // return blinkyDancer;
};
//object delegation********* 
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);// this line is creating BlinkyDancer Step to equal Dancer Step function
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //oldstep() === this.step()
  // this.$node.toggle();

  //using 'new' keyword this is tied to it  
};

BlinkyDancer.prototype.lineUp = function() {
   
};
//testing vsLive extensions

//notes:
//why is this apply to the window at the last test ?!?!?
// var boundStep = Dancer.prototype.step.bind(this);
// boundStep();
// var new = new BlinkyDancer();
// new.step()
// BlinkyDancer.prototype.step = Dancer.prototype.step


// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.
// console.log('this node' + this.$node);

//call 


// BlinkyDancer.prototype.oldStep = Dancer.prototype.step;
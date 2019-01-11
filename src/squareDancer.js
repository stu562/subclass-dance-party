var SquareDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps); // inheriteance of Dancer prop
    // top, left, timeBetweenSteps);
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    // var oldStep = SquareDancer.step;
    // this.oldStep = this.step;
    // return SquareDancer;
  };
  
  SquareDancer.prototype = Object.create(Dancer.prototype);
  SquareDancer.prototype.constructor = SquareDancer;
  
  SquareDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);
    //make square dancers 
    this.$node.toggle();
  };
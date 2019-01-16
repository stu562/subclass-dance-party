var BlinkyDancer = function (top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
  
};

BlinkyDancer.prototype.oldStep = function(){
  Dancer.prototype.step.call(this);
};

BlinkyDancer.prototype.lineUp = function(){
  this.$node.css("display", "flex");
  this.$node.css("right", "0");
  this.$node.css("left", "")
}

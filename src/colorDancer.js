var ColorDancer = function (top, left, timeBetweenSteps){
    Dancer.call(this, top, left, timeBetweenSteps);
  }
  
  ColorDancer.prototype = Object.create(Dancer.prototype);
  ColorDancer.prototype.constructor = ColorDancer;
  
  ColorDancer.prototype.step = function(){
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    var color = getRandomColor();
    this.oldStep();
    this.$node.css("border-color", color);
  };

  ColorDancer.prototype.oldStep = function(){
    //console.log(this);
    Dancer.prototype.step.call(this);
  };

  ColorDancer.prototype.lineUp = function(){
    // this.$node.css("display", "flex");
    this.$node.css("right", "");
    this.$node.css("left", "0")
  }
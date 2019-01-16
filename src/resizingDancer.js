var ResizingDancer = function (top, left, timeBetweenSteps){
    Dancer.call(this, top, left, timeBetweenSteps);
    // this.$node = $('<span class="dancer resizingDancer"></span>');
    this.$node.css("border-color", '#6495ED');
  }
  
  ResizingDancer.prototype = Object.create(Dancer.prototype);
  ResizingDancer.prototype.constructor = ResizingDancer;
  
  ResizingDancer.prototype.step = function(){
    var size =Math.floor(Math.random() * 90) + 10;
    var pxString = "" + size + "px";
    this.oldStep();
    
    this.$node.css("height", pxString);
    this.$node.css("width", pxString);
    this.$node.css('border', 'none');
    this.$node.css("border-radius", pxString);
    this.$node.css("background-image", 'url("https://i.kym-cdn.com/photos/images/original/001/431/201/40f.png")')
  };

  ResizingDancer.prototype.oldStep = function(){
    Dancer.prototype.step.call(this);
  };

  ResizingDancer.prototype.lineUp = function(){
    //this.$node.css("display", "flex");
    this.$node.css("top", "35px");
  }
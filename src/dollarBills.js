var DollarBills = function (top, left, timeBetweenSteps){
    Dancer.call(this, top, left, timeBetweenSteps);
  }
  
  DollarBills.prototype = Object.create(Dancer.prototype);
  DollarBills.prototype.constructor = DollarBills;
  
  DollarBills.prototype.step = function(){
    this.oldStep();
    this.$node.css("height", "75px");
    this.$node.css("width", "75px");
    this.$node.css('border', 'none');
    this.$node.css("border-radius", "");
    this.$node.css("background-image", "url('http://www.mytinyphone.com/uploads/users/vixxen23/59236.gif')");
  };

  DollarBills.prototype.oldStep = function(){
    //console.log(this);
    Dancer.prototype.step.call(this);
  };

  DollarBills.prototype.lineUp = function(){
    // this.$node.css("display", "flex");
    // this.$node.css("right", "");
    // this.$node.css("left", "0")
  }
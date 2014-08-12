function Clock () {
  this.hours;
  this.minutes;
  this.seconds;
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  console.log(this.hours+":"+this.minutes+":"+this.seconds);
};

Clock.prototype.run = function () {
  var that = this;
  // 1. Set the currentTime.
  var currentTime = new Date();
  this.hours = currentTime.getHours();
  this.minutes = currentTime.getMinutes();
  this.seconds = currentTime.getSeconds();
  // 2. Call printTime.
  this.printTime();
  // 3. Schedule the tick interval.
  setInterval(that._tick.bind(that) , Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  if(this.seconds < 55){
      this.seconds += 5;
  }else if(this.minutes < 59){
    this.seconds = this.seconds + 5 - 60;
    this.minutes += 1;
  }else if(this.hours < 23) {
    this.seconds = this.seconds + 5 - 60;
    this.minutes = 0;
    this.hours += 1;
  }else {
    this.seconds = this.minutes = this.hours = 0;
  }

  // 2. Call printTime.
  this.printTime();
};

clock = new Clock();
clock.run();
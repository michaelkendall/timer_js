var time = 0;
var running = 0; //tells me if the stop watch is running or not

function start()
{
  //if the stop watch isn't running once user clicks start do the following
if (running == 0)  {
//this goes inside the increment function once the clock is started and loops
  running = 1;
  increment();
  // This selects the element with the name start and while its running it changes the button to pause
  document.getElementById("start").innerHTML = "Pause"

  }

  function pause()
  {
    //once pause is clicked meaning that the clock isn't running, change pause to resume
    running = 0;
    document.getElementById("pause").innerHTML = "Resume";
  }
}

function reset()
{
  //when user clicks reset, the clock is going to stop running and the time should be rest to 0
  running = 0;
  time = 0;
  //
  document.getElementById("re").innerHTML = "Start";

  document.getElementById("output").innerHTML = "00:00:00";
}

function increment()
{
  if(running ===  1){
    setTimeout(function(){
      time++; //makes the time increase
      var mins = Math.floor(time/10/60);
      var secs = Math.floor(time/10 % 60);
      var hours = Math.floor(time/10/60/60);
      var tenths = time % 10;
      //
      if(mins < 10 {
        mins = "0" + mins;
      }
      if(secs < 10) {
        secs = "0" + secs;
      }
      //this updates my output field, this is whats seen on the screen when the stop watch is running
      document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths; //+"0";
      //by adding this function inside of my function it makes my stopwatch continue running
      increment();


    },100)//This gives a delay of less than a sec
  }
}

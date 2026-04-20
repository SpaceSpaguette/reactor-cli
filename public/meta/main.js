function backgroundloop() {
    reactorControl.update('result');
    setTimeout(backgroundloop,500);
}
// ! This part is experimental. It is a replacement for background loop
// ? So how does it work
// * It basically just runs when initiated by a function.
// ? How do we stop it
// * We just add a value. if its false. Function can continue to exist. if its true we break out of it. In principle



function update() {
    // this function is for display purposes. Meaning it will be run indefinetly.
    //! For safety its going to be run every 500ms
    setTimeout(update,500);
}

let intervalId = null;
var iter = 0
function mainloop(value) {
  // If we pass 1, stop the interval
  if (value === 1) {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      console.log("Stopped");
    }
    return;
  }
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    console.log("Reactor running");
    updateSim()
  }, 250);
  
  console.log("Reactor started.");
}



reactorControl.init('result')
backgroundloop();
mainloop()

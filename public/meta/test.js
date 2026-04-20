let intervalId = null;
var iter = 0
function backgroundTask(value) {
  // If we pass 1, stop the interval
  if (value === 1) {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      console.log("Background task stopped.");
    }
    return;
  }
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    console.log("Task running in background...");
  }, 250);
  
  console.log("Background task started.");
}


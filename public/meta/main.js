function backgroundloop() {
    if (isRunning) {
        temperature()
    }
    reactorControl.update('result');
    setTimeout(backgroundloop,100);
}
reactorControl.init('result')
backgroundloop();

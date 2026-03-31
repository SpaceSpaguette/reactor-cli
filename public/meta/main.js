function backgroundloop() {
    if (isRunning) {
        temperature()
    }
    reactorControl.update('result');
    setTimeout(backgroundloop,500);
}
reactorControl.init('result')
backgroundloop();

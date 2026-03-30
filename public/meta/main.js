function backgroundloop() {
    reactor_temp ++;
    reactorControl.update('result');
    setTimeout(backgroundloop,10);
}
reactorControl.init('result')
backgroundloop();

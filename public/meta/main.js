function backgroundloop() {
    printText();
    setTimeout(backgroundloop,10);
}


backgroundloop();
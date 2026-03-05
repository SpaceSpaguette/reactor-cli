const main = setInterval(() => {
console.log("hello?");
},2000);


function backgroundloop() {
    console.log("hello2");
    setTimeout(backgroundloop,1000)
}

backgroundloop()
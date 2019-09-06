let btn = document.getElementById("button");


//randomize color
function makeColor() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    var newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    return newRgb;
}


//randomize position
function getRandomPosition() {
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);
    return [randomX, randomY];
}


btn.addEventListener('click', function () {
    console.log("click");
    document.body.style.backgroundColor = "green";
    let x = document.querySelector('.circle');
    if (x == null) {
        x = document.createElement("div");
        x.setAttribute('class', 'circle');
        document.body.appendChild(x);
    };
    // x.style.width = "100px";
    // x.style.height = "100px";
    //let color has to be in this scope!
    let color = makeColor();
    x.style.backgroundColor = color;
    let newPos = getRandomPosition();
    x.style.top = newPos[1] + "px";
    x.style.left = newPos[0] + "px";

})

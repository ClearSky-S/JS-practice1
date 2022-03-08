const main = function() {
    var canvas = document.getElementById("mycanvas");
    var ctx    = canvas.getContext("2d");
    var width  = canvas.width;
    var height = canvas.height;
    const loadingText = document.getElementById("loadingText");
    var xc = -0.6, yc = 0;
    function draw() {
        loadingText.textContent = "Loading...";
        var mag = document.getElementById("magnification").value;
        var maxit = document.getElementById("maxit").value;

        // takes long time
        ;
        setTimeout(()=>mandelbrot(ctx,xc,yc,mag,maxit),50);
    }
    draw();

    document.getElementById("button").onclick = draw;

};
// window.onload=main;
if (document.readyState !== "loading"){
    main();
} else{
    document.addEventListener("DOMContentLoaded", main);

}


function displayCenter(xc,yc) {
    // document.getElementById("xc").innerHTML = xc.toFixed(3);
    // document.getElementById("yc").innerHTML = yc.toFixed(3);
}

function mandelbrot(c,xc,yc,mag,maxit) {
    var w    = c.canvas.width;
    var h    = c.canvas.height;
    var xmin = xc - 1/mag;
    var xmax = xc + 1/mag;
    var ymin = yc - (xmax-xmin)*h/w/2;
    var ymax = yc + (xmax-xmin)*h/w/2;
    var dx   = (xmax-xmin)/w;
    var dy   = (ymax-ymin)/h;
    var color = [];
    color[0] = "black";	
    var L=255, dL = 255/maxit;
    for(var i=maxit; i>0; i--) {
        color[i] = "rgb(255,"+Math.floor(L)+",255)"; L-=dL;
    }
    for(var i=0; i<w; i++) {
        var x = xmin + i*dx;
        for(var j=0; j<h; j++) {
            var y = ymin + j*dy;
            var a = x, b = y;
            var a2 = a*a, b2 = b*b;
            for(var count=maxit; a2+b2<=4 && count; count--) {
                b = 2*a*b + y; a = a2 - b2 + x;
                a2 = a*a; b2 = b*b;
            }
            c.fillStyle = color[count];
            c.fillRect(i,j,1,1);
        }
    }
    loadingText.textContent = "";

}




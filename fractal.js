const main = function() {
    var canvas = document.getElementById("mycanvas");
    var ctx    = canvas.getContext("2d");
    var width  = canvas.width;
    var height = canvas.height;
    // 중심점을 설정하고 그린다
    var xc = -0.6, yc = 0;
    draw();
    // 그리기 버튼을 클릭하면 그리기 시작
    document.getElementById("button").onclick = draw;
    // Canvas 위의 마우스로 클릭한 지점을 중심 좌표로 설정한다
    // document.getElementById("mycanvas").onclick = function(event) {
    //     var ix = event.offsetX;
    //     var iy = event.offsetY;
    //     var mag  = parseFloat(document.getElementById("magnification").value);
    //     xc += (2*ix/width - 1)/mag;
    //     yc += (2*iy-height)/mag/width;
    //     draw(); 
    // };
    // 설정에 따라 그리는 함수
    function draw() {
        // 배율
        var mag   = document.getElementById("magnification").value;
        // 최대 반복 횟수
        var maxit = document.getElementById("maxit").value;
        // 중심 좌표를 표시
        displayCenter(xc,yc);
        // 망델브로 집합을 그린다
        mandelbrot(ctx,xc,yc,mag,maxit);
    }
};
// window.onload=main;
if (document.readyState !== "loading"){
    main();
} else{
    document.addEventListener("DOMContentLoaded", main);

}


// 중심 좌표를 표시하는 함수
function displayCenter(xc,yc) {
    // document.getElementById("xc").innerHTML = xc.toFixed(3);
    // document.getElementById("yc").innerHTML = yc.toFixed(3);
}
// 망델브로 집합을 그리는 함수
// c : canvas의 랜더링 컨텍스트
// xc,yc : 중심 좌표
// mag : 확대 배율
// maxit : 최대 반복 횟수
function mandelbrot(c,xc,yc,mag,maxit) {
    var w    = c.canvas.width;
    var h    = c.canvas.height;
    var xmin = xc - 1/mag;
    var xmax = xc + 1/mag;
    var ymin = yc - (xmax-xmin)*h/w/2;
    var ymax = yc + (xmax-xmin)*h/w/2;
    var dx   = (xmax-xmin)/w;
    var dy   = (ymax-ymin)/h;
    // 색상 구분용 색상 (반지름 2안에 있던 횟수로 색을 구분한다)
    var color = [];
    color[0] = "black";	// 망델브로 집합의 점의 색상은 검은색으로 함
    var L=255, dL = 255/maxit;
    for(var i=maxit; i>0; i--) {
        color[i] = "rgb(255,"+Math.floor(L)+",255)"; L-=dL;
    }
    // X축 방향의 픽셀을 검사
    for(var i=0; i<w; i++) {
        var x = xmin + i*dx;
        // Y축 방향의 픽셀을 검사
        for(var j=0; j<h; j++) {
            var y = ymin + j*dy;
            // z1=x+iy
            var a = x, b = y;
            var a2 = a*a, b2 = b*b;
            // 반지름 2안에 maxit 번 이내이면 반복한다
            for(var count=maxit; a2+b2<=4 && count; count--) {
                // z_n+1 = z_n^2 +x+iy
                b = 2*a*b + y; a = a2 - b2 + x;
                a2 = a*a; b2 = b*b;
            }
            // count 값에 따라 색을 구분하여 점을 그린다
            c.fillStyle = color[count];
            c.fillRect(i,j,1,1);
        }
    }
}




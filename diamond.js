function diamond(c,n,x,y,r,color="darkblue"){
    const p = generatePoints(n,x,y,r);
    c.strokeStyle = color;
    c.beginPath();
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            c.moveTo(p[i].x,p[i].y);
            c.lineTo(p[j].x,p[j].y);
        }
    }
    c.stroke();
}

function generatePoints(n,x,y,r){
    let points = [];
    for(let i=0;i<n;i++){
        const t = i*2*Math.PI/n;
        points[i] = {
            x: x+r*Math.cos(t),
            y: y+r*Math.sin(t),
        };
    }
    return points;
}

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas. getContext("2d");
    const pointsInput = document.getElementById("points");
    const colorInput = document.getElementById("color");
    diamond(ctx, pointsInput.value,500,300,250,colorInput.value);
    document.querySelector("form button#draw").addEventListener("click", function(e){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        diamond(ctx, pointsInput.value,500,300,250,colorInput.value);
    });

})
const canvas = document.getElementById('jsCanvas');
// canvas.width = 1920;
// canvas.height = 1080;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = "#";
const colors = document.querySelectorAll('#jsColors button');
const range = document.getElementById("jsRange");
ctx.lineWidth = range.value;

let painting = false;


if(canvas){
    canvas.addEventListener('mousemove', (event)=>{
        const x = event.offsetX/canvas.offsetWidth*canvas.width;
        const y = event.offsetY/canvas.offsetHeight*canvas.height;
        // console.log(x,y);;
        if(!painting){
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    })
    canvas.addEventListener('mousedown',(event)=>{
        painting = true;
    })
    canvas.addEventListener('mouseup',(event)=>{
        painting = false;
    })
    canvas.addEventListener('mouseleave',(event)=>{
        painting = false;
    })
    canvas.addEventListener('contextmenu',(event)=>{
        event.preventDefault();
    })

    document.getElementById('jsClear').addEventListener('click',(event)=>{
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    })
    document.getElementById('jsSave').addEventListener('click',(event)=>{
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "canvas";
        link.click();
    })
}

colors.forEach((color)=>{
    color.addEventListener('click',(event)=>{
        ctx.strokeStyle = event.target.style.backgroundColor;
    })
});

range.addEventListener('input',()=>{
    ctx.lineWidth = range.value;

})
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('button').addEventListener('click',(e)=>{
        e.preventDefault();
        const h = parseFloat(document.getElementById('height').value);
        const w = parseFloat(document.getElementById('weight').value);
        document.getElementById('bmi').innerHTML = (w/h/h).toFixed(3);
        console.log(h,w,w/h/h);
    })
});
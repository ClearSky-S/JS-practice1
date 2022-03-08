document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('button').addEventListener('click',(e)=>{
        e.preventDefault();
        const h = parseFloat(document.getElementById('height').value);
        const w = parseFloat(document.getElementById('weight').value);
        if(!isNaN(w/h/h)){
            document.getElementById('bmi').innerHTML = (w/h/h).toFixed(3);
        } else {
            alert('Wrong Data');
            document.getElementById('bmi').innerHTML = 0;
        }
        console.log(h,w,w/h/h);
    })
});

document.addEventListener("DOMContentLoaded", ()=>{
    let isWindowToLinux = true;
    const changeMode = document.getElementById("changeMode");
    const inputPathTitle = document.getElementById("inputPathTitle");
    const outputPathTitle = document.getElementById("outputPathTitle");
    const inputPath = document.getElementById("inputPath");
    const outputPath = document.getElementById("outputPath");

    changeMode.addEventListener("click",()=>{
        console.log("change mode");
        isWindowToLinux = !isWindowToLinux;
        if(isWindowToLinux){
            inputPathTitle.innerHTML ="Windows"
            outputPathTitle.innerHTML="Linux";
        } else{
            inputPathTitle.innerHTML="Linux";
            outputPathTitle.innerHTML="Windows";

        }
    })
});
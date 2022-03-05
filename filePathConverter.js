function replaceAll(text, c1, c2){
    while(text.replace(c1,c2)!==text){
        text = text.replace(c1,c2);
    }
    return text;
}



document.addEventListener("DOMContentLoaded", ()=>{
    let isWindowToLinux = true;
    const changeMode = document.getElementById("changeMode");
    const inputPathTitle = document.getElementById("inputPathTitle");
    const outputPathTitle = document.getElementById("outputPathTitle");
    const inputPath = document.getElementById("inputPath");
    const outputPath = document.getElementById("outputPath");
    const convertPath = () =>{
        const inputValue = inputPath.value;
        let outputValue = inputValue;
        if(!inputValue){
            outputValue == "";
        }
        else if(isWindowToLinux){
            if(inputValue[1]===':'){
                outputValue = replaceAll(outputValue,'\\','/');
                outputValue = String(outputValue[0]).toLowerCase()+outputValue.substring(1);
                outputValue =replaceAll(outputValue,':','');
            } else{
                outputValue =replaceAll(outputValue,'\\','/');
            }
            if(outputValue[0]!=="/"){
                outputValue = "/" + outputValue;
            }
            outputPath.value = outputValue;
        } else{
            if(inputValue[0]=="/"&&inputValue[2]=="/"){

                outputValue = replaceAll(outputValue,'/','\\');
                if(String(outputValue[0])=="\\"){
                    outputValue=outputValue.substring(1);
                }
                outputValue = String(outputValue[0]).toUpperCase()+outputValue.substring(1);
                outputValue = outputValue.substring(0,1) + ":" + outputValue.substring(1);

            } else{
                outputValue = replaceAll(outputValue,'/','\\');
                if(String(outputValue[0])=="\\"){
                    outputValue=outputValue.substring(1);
                }
            }
            
            outputPath.value = outputValue;

        }
        outputPath.value = outputValue;
    }


    changeMode.addEventListener("click",()=>{
        isWindowToLinux = !isWindowToLinux;
        [inputPath.placeholder, outputPath.placeholder] = [outputPath.placeholder, inputPath.placeholder];
        [inputPath.value, outputPath.value] = [outputPath.value, inputPath.value];

        if(isWindowToLinux){
            inputPathTitle.innerHTML ="Windows"
            outputPathTitle.innerHTML="Linux";
        } else{
            inputPathTitle.innerHTML="Linux";
            outputPathTitle.innerHTML="Windows";
        }
        convertPath();
        
    })


    
    inputPath.addEventListener("input",convertPath);
});
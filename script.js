const inputDisplay = document.getElementById("inputDisplay");

const outputDisplay = document.getElementById("outputDisplay");

let input ="";

function clearDisplay(){

    if(input==="0"){
        input=="";
    } else {
        input = "";
        outputDisplay.textContent = "00";
        inputDisplay.textContent = "00";
    }
}

function appendValue(value){
    input+= value;
    inputDisplay.textContent = input;
}

function deleteChar(){
    input = input.slice(0,-1);
    inputDisplay.textContent = input;
}

function calculateResult(){
    try{
        const result = eval(input.replace("÷", "/").replace("×", "*"));

        input = result;
    outputDisplay.textContent = result;
    }

    catch(error){
        outputDisplay.textContent="Error";
    }
}
var expressionBuffer = "";
var inputField = document.getElementById('calcInput');
var resultHolder = document.getElementById('result'); //previous result

var bHistoryOpen = false;

resultHolder.innerHTML = '532';

inputField.addEventListener('input', () => {
    expressionBuffer = inputField.value;
    console.log(inputField.value);
});


function addToCalcBuffer(symbol){
    expressionBuffer += symbol;
    inputField.value = expressionBuffer;

    console.log("added " + inputField.value);
}

function openHistory (){

}

function calculate(input){
    let output;

    resultHolder.innerHTML = output;
}
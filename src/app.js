var expressionBuffer = "";
var inputField = document.getElementById('calcInput');
var resultHolder = document.getElementById('result'); //previous result

var bHistoryOpen = false;

resultHolder.innerHTML = '';

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

function calculate(){
    let input = inputField.value;
    let output = eval(input);



    inputField.value = output;
    expressionBuffer = '';
}

function clear(){
    resultHolder.innerHTML = '';
    inputField.value = ' 1';
    expressionBuffer = '';

    console.log(1);
}
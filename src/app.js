var expressionBuffer = "";
var inputField = document.getElementById('calcInput');
var resultHolder = document.getElementById('result'); //previous result

var history = new Array(1);
var bHistoryOpen = false;

console.log(history);

resultHolder.innerHTML = '';

inputField.addEventListener('input', () => {
    expressionBuffer = inputField.value;
    console.log(inputField.value);
});

function clean(){
    console.log(1);
    resultHolder.innerHTML = '';
    inputField.value = '';
    expressionBuffer = '';

    
}

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


    console.log(history);
    inputField.value = output;
    resultHolder = history[history.length-1][0];
    history.push([expressionBuffer, output]);

    expressionBuffer = '';
}
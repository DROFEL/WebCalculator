var inputField = document.getElementById('calcInput');
var resultHolder = document.getElementById('result'); //previous result
var historyDOM = document.getElementById('history-list');
var calcbody = document.getElementById('calcbody');

const history = [[]];
var bHistoryOpen = false;

console.log(history);

resultHolder.innerHTML = '';


function clean(){
    resultHolder.innerHTML = '';
    inputField.value = '';

    
}

function addToCalcBuffer(symbol){
    inputField.value += symbol;
}

function visible(id){
    document.getElementById(id).classList.toggle('show');
}

function setInput(expression){
    inputField.value = expression;
    console.log('Set!' + expression)
}

function openHistroy(){

    historyDOM.classList.toggle("listOpen");
    calcbody.classList.toggle('leftNoRadius');
}

function calculate(){
    let output = eval(inputField.value);
    history.push([inputField.value, output]);

    inputField.value = output;
    resultHolder.innerHTML = history[history.length-1][0] + " = " + history[history.length-1][1];
    historyDOM.innerHTML += '<button class="history-expression" onclick="setInput(\x27' + history[history.length-1][0] + '\x27)">' + resultHolder.innerHTML + '</button>';
}
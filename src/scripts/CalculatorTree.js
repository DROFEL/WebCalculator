function CalculatorTree() {

    operands = new PriorityQueue();
    numbers = [];

    //amount of operators
    let size = 0;

    //parameter: MathToken
    this.enqueue = function (token) {
        console.log("token " + token.getValue());
        if (token.bOperator === true)
            operands.enqueue(token.getValue());
        else{
            numbers.push(token.getValue)
        }
    }

    this.getSize = function () {
        return operands.getSize();
    }
}
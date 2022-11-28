const doubleNums = /[0-9]|\./;
const operandsPrecedence_4 = /[+]/;
const operandsPrecedence_3 = /[-]/;
const operandsPrecedence_2 = /[/*%]/;
const operandsPrecedence_1 = /[!^]/;

function MathToken(token) {
    let precedence = -1;
    let bOperator = false;
    //stores either int or string if number or operator
    let value = 'null';

    if (String(token).match(doubleNums)) {
        precedence = 0;
        this.bOperator = false;
        value = parseFloat(token);
    } else {
        this.bOperator = true;
        value = token;

        if (value.match(operandsPrecedence_1) != null)
            precedence = 1;
        else if (value.match(operandsPrecedence_2) != null)
            precedence = 2;
        else if (value.match(operandsPrecedence_3) != null)
            precedence = 3;
        else if (value.match(operandsPrecedence_4) != null)
            precedence = 4;
    }


    this.getValue = function () {
        return value;
    }

    this.getPrecedence = function () {
        return precedence;
    }
}
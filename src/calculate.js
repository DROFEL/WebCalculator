const doubleNums = /[0-9]|\./;
const operands = /[-+/*^]/;

const UNEXPECTED_SYMBOL = -1
const DECIMAL_ERROR = -2;
const PARENTHESIS_ERROR = -3;

class Token {

    bIsnumber = true;
    number = 0;
    operand = '';

    //operation weight:
    // weight 3: pow, square, sin, cos, exp
    // weight 2: mult, div
    // weight 1: addition, subtraction
    // weight 0: number
    priority = 0;

    constructor(value, priority) {

        if (value.match(doubleNums)) {
            this.bIsnumber = true;
            this.number = parseFloat(value);
        } else {
            this.bIsnumber = false;
            this.operand = value;
        }

        this.priority = priority;
    };

    constructor(value) {

        this.bIsnumber = true;
        this.number = parseFloat(value);

        this.priority = 0;
    };

    getValue() {
        if (this.bIsnumber)
            return this.number;

        return this.operand;
    }

}

function tokenize(value) {

    var tokens = new Array();


    //go through each symbol and identify it
    //if it is opening parenthesis extrac expression until exiting and pass it to the eval (calculation recursively) then add resul to token as a number
    // if there is something wrong with parenthesis return PARENTHESIS_ERROR
    //if it is number add it to temp variable and go to next symbol until its not a number (add to i) than add to token
    //if there is more than one period pass DECIMAL_ERROR as return
    //if it is operand just create new token
    //operand-value defferentiation happends in Token constructor
    //if there is wrong logic in the expression eval gonna handle it
    for (let i = 0; i < value.length; i++) {

        //kinda silly way but in for loop j = i + 1 so that '(' is ignored
        //in the end i = j so that ')' is ignored
        if (value.charAt(i) == '(') {
            let newExpression = '';

            for (let j = i + 1; value.charAt(j) != ')'; j++) {

                if (value.charAt(j) == '(')
                    return PARENTHESIS_ERROR;

                newExpression += value.charAt(j);
                i++;
            }

            i++; //so that i jumps to the end of parsed expression
            console.log("Parenthesis " + newExpression);
            let result = eval(newExpression);
            tokens.push(new Token(result));

        } else if (value.charAt(i) == ')') {

            return PARENTHESIS_ERROR;

        } else if (value.charAt(i).match(doubleNums)) {
            bDecimal = false;
            result = '';
            for (let j = i; value.charAt(j).match(doubleNums); j++) {

                if (value.charAt(j) == '.') {
                    if (bDecimal)
                        return DECIMAL_ERROR;
                    bDecimal = true;
                }

                result += value.charAt(j);
                i++;
            }

            i --; //same as for expressions but for number

            tokens.push(new Token(result));
        } else if (value.charAt(i).match(operands)) {

            priority = 1;

            if(value.charAt(i) == '*' || value.charAt(i) == '/')
                priority = 2;
            
            tokens.push(new Token(value.charAt(i), priority))

        }else if (value.charAt(i) == 'e') {
            
            tokens.push(new Token(Math.exp(1)))

        }
        else {
            return UNEXPECTED_SYMBOL;
        }
    }


    return tokens;
}

function eval(value) {

    console.log("Evaluating " + value);

    if (value == '')
        return '';

    var tokens = tokenize(value);
    if (typeof (tokens) === 'number')
        return parserError(tokens)

    for (let i = 0; i < tokens.length - 1; i++) {
        if (tokens.at(i).bIsnumber == tokens.at(i+1).bIsnumber)
            return "Two operands in a row";
    }


    
    for(let op = 3; op > 0; op--){
        for (let i = 0; i < tokens.length - 2; i += 2) {

            if(tokens.at(i).bIsnumber)
                continue;
    

            operationResult = 0;


            switch (operand) {
                case '*':
                    operationResult = num1 * num2;
                    break;
                case '/':
                    operationResult = num1 / num2;
                    break;

            }

            switch (operand) {
                case '+':
                    operationResult = num1 + num2;
                    break;
                case '-':
                    operationResult = num1 - num2;
                    break;
            }

            
    
            tokens.at(i+2) = new Token(operationResult.toString());
        }
    }

    return tokens.at(tokens.length-1).getValue().toString();
}



function parserError(e) {

    switch (e) {
        case UNEXPECTED_SYMBOL:
            return "Unexpected symbol in expression";
        case DECIMAL_ERROR:
            return "You have to periods in one number";
        case PARENTHESIS_ERROR:
            return "Wrong parenthesis"
    }
}
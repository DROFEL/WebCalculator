const operands = /[-+/*^%!]/;

const UNEXPECTED_SYMBOL = -1
const DECIMAL_ERROR = -2;
const PARENTHESIS_ERROR = -3;

function evalu(value) {

    let tokens = tokenize(value);

    //go throught whole array 3 times to check for precedence 1 then for 2 and then 3 
    for (let precedence = 1; precedence <= 4; precedence++) {


        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].getPrecedence() != precedence)
                continue;

            switch (tokens[i].getValue()) {
                case '+':
                    tokens.splice(i - 1, 0, new MathToken(tokens[i - 1].getValue() + tokens[i + 1].getValue()));
                    tokens.splice(i, 3);
                    break;
                case '-':
                    if (i == 0 || tokens[i - 1].getPrecedence() >= 1) {
                        console.log(tokens[i + 1].getValue());
                        tokens.splice(i, 0, new MathToken(tokens[i + 1].getValue() * (-1)));
                        tokens.splice(i + 1, 1);
                    }
                    else {
                        tokens.splice(i - 1, 0, new MathToken(tokens[i - 1].getValue() - tokens[i + 1].getValue()));
                        tokens.splice(i, 3);
                    }
                    break;
                case '*':
                    tokens.splice(i - 1, 0, new MathToken(tokens[i - 1].getValue() * tokens[i + 1].getValue()));
                    tokens.splice(i, 3);
                    break;
                case '/':
                    tokens.splice(i - 1, 0, new MathToken(tokens[i - 1].getValue() / tokens[i + 1].getValue()));
                    tokens.splice(i, 3);
                    break;
                case '%':
                    tokens.splice(i - 1, 0, new MathToken(tokens[i - 1].getValue() / 100));
                    tokens.splice(i, 2);
                    break;
                case '^':
                    tokens.splice(i - 1, 0, new MathToken(Math.pow(tokens[i - 1].getValue(), tokens[i + 1].getValue())));
                    tokens.splice(i, 2);
                    break;
                case '!':
                    tokens.splice(i - 1, 0, new MathToken(factorial(tokens[i - 1].getValue())));
                    tokens.splice(i, 2);
                    break;
            }
            i--;
        }
    }
    return tokens[0].getValue();
}

function tokenize(value) {
    var tokens = [];


    for (let i = 0; i < value.length; i) {
        let result = '';
        if (value.charAt(i) === '(') {
            for (let j = i + 1; value.charAt(j) != ')'; j++) {
                if (j > value.length)
                    return PARENTHESIS_ERROR;

                result += value.charAt(j);
                i++;
            }
            i += 2;
            result = evalu(result);
        }
        else if (value.charAt(i).match(doubleNums)) {
            let bDecimal = false;
            for (let j = i; value.charAt(j).match(doubleNums); j++) {

                if (value.charAt(j) == '.') {
                    if (bDecimal)
                        return DECIMAL_ERROR;
                    bDecimal = true;
                }

                result += value.charAt(j);
                i++;
            }
        }
        else if (value.charAt(i).match(operands)) {
            result += value.charAt(i);
            i++;
        }

        tokens.push(new MathToken(result));
    }

    return tokens;
}

function solveSimple(operator, paramToken_1, paramToken_2, paramToken_3) {

    if (operator.getPrecedence() < 1)
        return parserError(UNEXPECTED_SYMBOL);

    if (paramToken_1.getPrecedence() > 0 || paramToken_2.getPrecedence() > 0 || paramToken_3.getPrecedence() > 0)
        return parserError(UNEXPECTED_SYMBOL);


    param_1 = paramToken_1.getValue();
    param_2 = paramToken_2.getValue();
    param_3 = paramToken_3.getValue();



    return parserError(UNEXPECTED_SYMBOL);
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


const {assert} = require('chai');
const MathOp = require('../src/MathOp');
const app = require('../src/MathOp');

describe('Math', function () {
    describe('Power', function () {
        it('Positive Integer', function () {
            const expression = MathOp.pow(3,3);

            assert.equal(27, expression, "hehe");
        })
    });

    describe('Sqrt', function () {
        it('babylon', function(){
            expression = MathOp.sqrtBabylonian(25);

            assert.equal(5, expression, "hehe");
        })
    });

    describe('Constants', function () {
        it('Pi constant', function () {
            const pi = MathOp.pi;

            assert.equal(Math.pi, pi,'aboba');
        });

        it('E constant', function () {
            const e = MathOp.ee;
            console.log(e);

            assert.equal(Math.E, e, e);
        })
    });

    describe('sotin', function () {
    
    });
})
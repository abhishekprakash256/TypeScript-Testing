/*
make a addition function in type script

*/
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));
// make in a funciton for calculatin of number like a caculator 
var calculator = /** @class */ (function () {
    function calculator() {
    }
    calculator.prototype.add = function (a, b) {
        return a + b;
    };
    calculator.prototype.subtract = function (a, b) {
        if (a < b) {
            return b - a;
        }
        else {
            return a - b;
        }
    };
    calculator.prototype.multiplication = function (a, b) {
        return a * b;
    };
    calculator.prototype.divide = function (a, b) {
        if (a > b) {
            return a % b;
        }
        else {
            return b % a;
        }
    };
    return calculator;
}());
// do the calculations
var cal = new calculator();
console.log(cal.add(4, 3));
console.log(cal.subtract(8, 2));

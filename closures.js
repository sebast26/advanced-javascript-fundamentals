var calculator = {
    calculate : function(x, y, fn) {
        return fn(x, y);
    }
};


var sum = function(x, y) {
    return x + y;
};
var diff = function(x, y) {
    return x - y;
};

var sumResult = calculator.calculate(1, 2, sum), // 3
    diffResult = calculator.calculate(1, 2, diff); // -1
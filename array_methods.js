var fruits = ["apples", "oranges", "bananas", "grapes"];

var index = fruits.indexOf("oranges");
var index2 = fruits.lastIndexOf("oranges");


var isString = function(value, index, array) {
    return typeof value === "string";
};

var isLengthOfOne = function(value, index, array) {
    return value.length === 1;
};

var result = fruits.every(isString); // true
var result2 = fruits.some(isLengthOfOne); // false


// filter function does not change original array
var startsWithAB = function(value, index, array) {
    return value[0] === "a" || value[0] === "b";
};
var result3 = fruits.filter(startsWithAB); // ["apples", "bananas"]


var echo = function(value, index, array) {
    alert(value);
};

fruits.forEach(echo);


// map function does not change original array
var likeAllFruits = function(value, index, array) {
    return "i like " + value;
};
var result4 = fruits.map(likeAllFruits);
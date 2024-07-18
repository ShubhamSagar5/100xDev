"use strict";
function addNumber(a, b) {
    return a + b;
}
const value = addNumber(2, 6);
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 6));
const ageisValid = (user) => {
    if (user.age > 18) {
        console.log("age is valid");
    }
    else {
        console.log("age is not valid");
    }
};
const result = ageisValid({ name: "shubham", age: 10 });
const f1 = (id) => {
    return id;
};
const calledf1 = f1(2);
const calledf2 = f1("strunf");
console.log(calledf1 + " " + calledf2.toUpperCase());
const maxValue = (arr) => {
    return arr;
};
console.log(maxValue([1, 2, 3]));
var dir;
(function (dir) {
    dir["up"] = "up";
    dir["down"] = "down";
    dir["left"] = "left";
    dir["right"] = "right";
})(dir || (dir = {}));
const maxValue2 = (arr) => {
    return arr;
};
console.log(maxValue2(dir.up));
console.log(maxValue2(dir.down));
console.log(maxValue2(dir.right));

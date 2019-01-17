var calculator=require('./calculator.js');

var add=calculator.sum(10,20);
console.log('Addition:'+add);

var subtract=calculator.sub(10,20);
console.log("Subtraction:"+subtract);

var multiply=calculator.mul(10,20);
console.log("Multiply:"+multiply);

var divide=calculator.div(10,20);
console.log("Divide:"+divide);
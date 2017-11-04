console.log(">> DEMO OF NODE <<");

var calc = require("./service/calc");

console.log('Calling the callback version of the add');

calc.addWithCallback(1,2, function(res){
    console.log(" The result is ", res);
});


console.log('calling the promise version of the add');

calc.add(5,5)
.then(function(res){
    return calc.mul(res,res);
})
.then(function(res){
    return calc.div(res, 5);
})
.then(function(res){
    console.log('End result ', res);
});



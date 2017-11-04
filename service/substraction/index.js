 var BPromise = require("bluebird");

 var substraction  = function(a,b) {
    return new BPromise(function(resolve, reject){
        return resolve(a-b);
    });
 };

 module.exports = substraction;
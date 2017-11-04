 var BPromise = require("bluebird");

 var add  = function(a,b) {
    return new BPromise(function(resolve, reject){
        return resolve(a+b);
    });
 };

 module.exports = add;
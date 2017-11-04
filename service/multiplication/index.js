 var BPromise = require("bluebird");

 var multiplication  = function(a,b) {
    return new BPromise(function(resolve, reject){
        return resolve(a*b);
    });
 };

 module.exports = multiplication;
 var BPromise = require("bluebird");

 var division  = function(a,b) {
    return new BPromise(function(resolve, reject){
        return resolve(a/b);
    });
 };

 module.exports = division;
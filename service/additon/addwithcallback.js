function addWithCallback(a, b, cb){
    var result = a+b;
    // setTimeout(function(){
    //     cb(result);
    // }, 3000);
    cb(result);
}

module.exports = addWithCallback;
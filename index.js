function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function myNamedFunction() {
        console.log("Rashid!");
    }
    return myNamedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Rashid!");
    };
}


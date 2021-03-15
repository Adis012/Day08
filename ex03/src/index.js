function function2() {
    var result = "";
    if (typeof myGlobalVariable != "undefined") {
        result += "myGlobalVariable: " + myGlobalVariable;

    }
    if (typeof notGlobalVariable != "undefined") {
        result += " notGlobalVariable: " + notGlobalVariable;
    }
    console.log(10);
}

function1()
function2()

module.exports = {
    function1, 
    function2,

};

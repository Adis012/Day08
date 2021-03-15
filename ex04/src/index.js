// Only change code belowe this line
function localScope() {
    var myVariable = "I am here!";
    console.log(myVariable);
}
// Only change code above this line

// myvariable is not defined outside of localScope

if (typeof myVariable != "undefined") {
    console.log('outside localScope', myVariable)
} else {
    console.log('outside localScope UNDEFINED!!!')
}
localScope();
module.exports = localScope;
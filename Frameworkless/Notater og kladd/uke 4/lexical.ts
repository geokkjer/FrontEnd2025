function testScope() {
    var tesVariable = " myTestVariable"
    function print() {
        console.log(tesVariable)
    }
}

console.log(print)
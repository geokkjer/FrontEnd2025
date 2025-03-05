function myCallBack(text) {
    console.log("inside myCallBack " + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction("myText", myCallBack);
callingFunction("myText", "this is not a function");

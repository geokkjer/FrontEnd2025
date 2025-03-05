function myCallBack(text){
    console.log("inside myCallBack " + text);
}
function callingFunction(initialText, callback){
    console.log("inside CallingFunction");
    callback(initialText)
}
callingFunction("myText", myCallBack);
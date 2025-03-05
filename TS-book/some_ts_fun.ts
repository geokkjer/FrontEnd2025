function myCallBack(text: string) {
  console.log("inside myCallBack " + text);
}
function callingFunction(
  initialText: string,
  callback: (text: string) => void
) {
  callback(initialText);
}

callingFunction("myText", myCallBack);
callingFunction("myText", "this is not a function");

var testVariable = "testValue";

function getData() {
  var testVariable_2 = "testValue_2";
  $.ajax({
    url: "/sample_json.json",
    success: (data, status, jqXhr) => {
      console.log("success : testVariable is " + testVariable);
      console.log("success : testVariable_2 is " + testVariable_2);
    },
    error: (message, status, stack) => {
      alert("error " + message);
    },
  });
}
getData();

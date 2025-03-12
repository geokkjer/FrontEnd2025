async function renderPage() {
  try {
    const app = document.getElementById("app");
    const JokeObject = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    const jokeDiv = document.createElement("div");
    const jokeText = document.createTextNode(JokeObject.data.joke);
    app.appendChild(jokeDiv);
    jokeDiv.appendChild(jokeText);
    const searchJoke = await axios.get("https://icanhazdadjoke.com/search", {
      params: {
        term: "dad",
      },
      headers: {
        Accept: "application/json",
      },
    });
    let result = "";
    for (result of searchJoke.data.results) {
      const jokeList = document.createElement("div");
      const jokeText = document.createTextNode(result.joke);
      app.appendChild(jokeList);
      jokeList.appendChild(jokeText);
    }
  } catch (error) {
    console.log("error:", error);
  } finally {
    alert("We made it all the way");
  }
}
renderPage();
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => location.reload());

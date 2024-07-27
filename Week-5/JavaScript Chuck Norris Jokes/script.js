const jokeText = document.getElementById("jokesText");

const newJokeButton = document.getElementById("getNewJoke");

const jokeUrl = "https://api.chucknorris.io/jokes/random";

function getNewJoke() {
 fetch(jokeUrl)
 .then(response => {
     if(!response.ok){
        throw new Error("Db'den bilgi yok");
     }
     return response.json();
 })
 .then(data => {
    jokeText.innerHTML = JSON.stringify(data.value, null, 2);
 })
 .catch(error => {
    console.error('Fetch error:', error);
 })
}
getNewJoke();
 newJokeButton.addEventListener("click", (e) => {
    getNewJoke()
 })

let text = document.getElementById("text");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
btn.addEventListener("click", getQuote);
function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      text.innerText = `" ${data.content}"`;
      author.innerText = `"${data.author}"`;
    })
    .catch((err) => console.log(err));
}

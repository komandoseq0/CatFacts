'use script';

const catBox = document.querySelector(".catFactBox");
const catFact = document.querySelector(".catFact");
const showFact = document.querySelector(".showFact");

const showCatFact = function() {
    fetch("https://meowfacts.herokuapp.com/?count=1")
    .then((response) => {
        if (!response.ok) throw new Error(`${response.status}`);
        return response.json()
    })
    .then(data => {
        catFact.textContent = data.data[0]
    })
    .catch(err => {
        console.error(err);
        catFact.textContent = "Sorry there was a problem with displaying fact try again or restart page";
    })
}

showFact.addEventListener("click", showCatFact)
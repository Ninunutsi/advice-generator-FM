let dice = document.getElementById('dice')
let num = document.getElementById('num')
let randomQuote = document.getElementById('random-quote')

function randomQuotes(){
    let randomInt = Math.floor(Math.random() * 250) + 1;
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result => {
        randomQuote.innerHTML = `"${result.content}"`
        num.innerHTML = randomInt
    })
}

window.addEventListener('load', randomQuotes)

dice.addEventListener('click', randomQuotes)
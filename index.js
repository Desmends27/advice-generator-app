

let quote_field = document.querySelector(".quote")
let btn = document.querySelector(".new_quote")
let advice = document.querySelector('.advice')

async function new_quote(){
    quote_field.textContent = "Loading..."
    btn.disabled = true
    btn.classList.remove('bg-green-700');
    btn.classList.remove('box');
    advice.textContent = `Advice`
    let response = await fetch("https://api.adviceslip.com/advice")
    let quote = await response.json()
    return quote
}
function updateQuote(){
    new_quote().then((result)=> {
        btn.disabled = false
        btn.classList.add('bg-green-700');
        btn.classList.add('box');
        slip = result['slip']
        quote_field.textContent = slip["advice"]
        advice.textContent = `Advice # ${slip["id"]}`
    }).catch(error => {
        quote_field.textContent = "Error in fetch new quote"
    })
}

btn.addEventListener('click', updateQuote)
document.addEventListener('DOMContentLoaded', updateQuote)
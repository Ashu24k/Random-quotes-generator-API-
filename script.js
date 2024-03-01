const qouteText = document.querySelector('.quote');
const qouteBtn = document.querySelector('.change');
const authorText = document.querySelector(".person p");
const copyBtn = document.querySelector('.copy i');


function randomQuotes(){
    //fetching data from the api            
    fetch('https://api.quotable.io/random')
    //converting it to json format
    .then(response => response.json())
    .then(result => {
        qouteText.innerHTML = result.content
        authorText.innerHTML = result.author
    })
    //getting the content and author of the quote
}

qouteBtn.addEventListener('click', randomQuotes);

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(`${qouteText.innerHTML}`);
});
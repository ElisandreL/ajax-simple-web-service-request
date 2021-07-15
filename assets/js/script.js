const xhr = new XMLHttpRequest;

let blockQuote = document.getElementById("quote");
let aut = document.getElementById("author");
let img = document.getElementById("images");

xhr.open('GET', 'https://thatsthespir.it/api', true);

xhr.onload = function() {

    if(this.status === 200) {
        //console.log(JSON.parse(this.responseText));
        let quotation = JSON.parse(this.responseText);
        blockQuote.innerHTML = quotation.quote;
        aut.innerHTML = quotation.author;
        img.src = quotation.photo;
    }
}

xhr.send();
const quoteUrl = "https://type.fit/api/quotes"

const generateQuote = async () => {
    try {
        const author = document.getElementById('author');
        const quote = document.getElementById('quote');
        let quoteArray = await fetch(quoteUrl);
        quoteArray = await quoteArray.json();
        const randNum = Math.floor(Math.random() * 1643);
        const randomQuote = quoteArray[randNum];
        quote.innerText = randomQuote.text;
        author.innerText = randomQuote.author;
     
 
}
    catch(error) {
    console.log(error.message);
}
}


const button = document.getElementById('quotebtn');
button.addEventListener('click', generateQuote);



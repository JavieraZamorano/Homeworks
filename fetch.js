async function helloAlert() {
    debugger;
    const animeUrl = "https://animechan.vercel.app/api/randomi";
    const fetchedData = await fetch(animeUrl);


    const quote = await fetchedData.json();

    return alert(quote.anime)

}

helloAlert();

async function helloAlert2() {

    const animeUrl = "https://animechan.vercel.app/api/randomu";


    fetch(animeUrl)
    .then((response) => response.json())
    .then((quote) => alert(quote.anime))
    .catch(()=> alert("shit"));
};
//helloAlert2();

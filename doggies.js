function getDogs() {
    const doggieUrl = "https://dog.ceo/api/breeds/image/random";

    fetch(doggieUrl)
    .then((response) => response.json())
    .then((data) => {
        const image = document.createElement("img");
        image.src = data.message;
        document.querySelector("#hereAreDogs").appendChild(image)
    })
}

const dogButton = document.querySelector("#moreDog");
dogButton.addEventListener( 'click', getDogs);




import data from "./data/breakingbad/breakingbad.js";
import dataFunctions from "./data.js";

const characters = data.breaking_bad;
const cardContainer = document.querySelector("#cards-container");
const selectStatus = document.querySelector("#status");
const selectSerie = document.querySelector("#serie");
const search = document.querySelector("#search"); //cria busca por nome.
const percentageElement = document.querySelector("#percentage");
const selectAz = document.querySelector("#a-z");

function displayCards(characters) {
  const cardsResult = characters.map((item) => {
    const template = `
      <div class="card">

        <img class="poster-img" src="${item.img}" alt="${item.name}">
          <h3 class="name">${item.name}</h3> 
          <p class="nickname"> ${item.nickname}</p>
          <p class="occupation">Occupation: ${item.occupation}</p>
          <p class="status">Status: ${item.status}</p>
          <p class="appearance">Appearance: ${item.appearance}</p>
          <p class="portrayed">Portrayed: ${item.portrayed}</p>
          <p class="category">Category: ${item.category}</p>   
  
      </div>
`;

    return template;
  });

  return cardsResult.join("");
}

cardContainer.innerHTML = displayCards(characters);

selectAz.addEventListener("change", (event) => {
  const value = event.target.value; //extrai o valor do elemento específico que acionou o evento
  const orderedList = dataFunctions.order(characters, value);
  const cards = displayCards(orderedList);
  cardContainer.innerHTML = cards;
});

selectStatus.addEventListener("change", (event) => {
  const value = event.target.value;
  const filteredList = dataFunctions.filter(characters, value, "status");
  const cards = displayCards(filteredList);
  cardContainer.innerHTML = cards;

  const percentage = dataFunctions.calculatePercentage(
    characters.length,
    filteredList.length
  );

  percentageElement.innerHTML =
    "Essa categoria corresponde a " + percentage + "% dos personagens."

});

selectSerie.addEventListener("change", (event) => {
  const value = event.target.value;
  const filteredList = dataFunctions.filter(characters, value, "category");
  const cards = displayCards(filteredList);
  cardContainer.innerHTML = cards;

  const percentage = dataFunctions.calculatePercentage(
    characters.length,
    filteredList.length
  );

  percentageElement.innerHTML =
    "Essa categoria corresponde a " + percentage + "% dos personagens."
});

search.addEventListener("keyup", function (event) {
  const value = event.target.value;
  const filteredList = dataFunctions.searchName(characters, value);
  const cards = displayCards(filteredList);
  cardContainer.innerHTML = cards;
});




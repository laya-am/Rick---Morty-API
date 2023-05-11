import {createCharacterCard} from "./components/card/card.js"

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
); 
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42; //make it dynamic later
let page = 1;
const searchQuery = "";

async function fetchCharacters(page){
  const response= await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data= await response.json();
  // const maxPage= data.info.pages;
  return data.results;
};

function loopAndAppend(charArray){
  charArray.map(char => {
    const newCard= createCharacterCard(char);
    return cardContainer.append(newCard);
  });
};

const initialCharacters= await fetchCharacters(page);
loopAndAppend(initialCharacters);

nextButton.addEventListener("click", async()=>{
  if(page===maxPage){
    return;
  };
  page++;
  cardContainer.innerHTML= "";
  console.log(page);
  const characters= await fetchCharacters(page);
  console.log(characters);
  loopAndAppend(characters) 
});

prevButton.addEventListener("click", async()=>{
  if(page===1){
    return;
  };
  page--;
  cardContainer.innerHTML= "";
  console.log(page);
  const characters= await fetchCharacters(page);
  console.log(characters);
  loopAndAppend(characters) 
});
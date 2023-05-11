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

let page = 1;
let searchQuery = "";

async function fetchCharacters(page, searchQuery){
  const response= await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);
  const data= await response.json();
  return data;
};

// States
let maxPage = (await fetchCharacters(page, searchQuery)).info.pages;
console.log("this is initial maxPage: ",maxPage);


function loopAndAppend(charArray){
  charArray.map(char => {
    const newCard= createCharacterCard(char);
    return cardContainer.append(newCard);
  });
};

const fetchedData= await fetchCharacters(page, searchQuery);
const initialCharacters= fetchedData.results;
loopAndAppend(initialCharacters);
pageNumber(page,maxPage)



nextButton.addEventListener("click", async()=>{
  console.log("page: ", page);
  maxPage= (await fetchCharacters(page, searchQuery)).info.pages;
  if(page===maxPage){
    return;
  };
  page++;
  cardContainer.innerHTML= "";
  console.log("maxpage inside button is: ",maxPage);
  const characters= (await fetchCharacters(page, searchQuery)).results;
  console.log(characters);
  loopAndAppend(characters);
  pageNumber(page, maxPage);
});

prevButton.addEventListener("click", async()=>{
  if(page===1){
    return;
  };
  page--;
  cardContainer.innerHTML= "";
  console.log("this is page number: ", page);
  const characters= (await fetchCharacters(page, searchQuery)).results;
  console.log(characters);
  loopAndAppend(characters);
  pageNumber(page, maxPage);
});

function pageNumber(page, maxPage){
  pagination.textContent=`${page} / ${maxPage}`;
};


searchBar.addEventListener("submit", async (e) => {
  e.preventDefault();
  searchQuery= e.target.query.value;
  console.log(searchQuery);
  cardContainer.innerHTML= "";
  let searchResult= (await fetchCharacters(page, searchQuery));
  let searchedCharacter= searchResult.results
  console.log("search result: ", searchResult);
  
  if(!searchedCharacter){
    console.log("error: 'There is nothing here'");
    const message= document.createElement("h3");
    message.textContent= "error: 'There is nothing here'"
    return cardContainer.append(message);
  };

  maxPage= (await fetchCharacters(page, searchQuery)).info.pages;
  console.log("maxpage inside submit is: ", maxPage);
  pageNumber(1, maxPage);
 
  loopAndAppend(searchedCharacter);
});
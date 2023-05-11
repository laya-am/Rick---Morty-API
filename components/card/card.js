export function createCharacterCard(char) {
    const cardElement= document.createElement("li");
    cardElement.classList.add("card");
    cardElement.innerHTML=`
          <div class="card__image-container">
            <img
              class="card__image"
              src=${char.image}
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${char.name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${char.status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${char.type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${char.occurrencies}</dd>
            </dl>
          </div>
        `;
        return cardElement;
}
 

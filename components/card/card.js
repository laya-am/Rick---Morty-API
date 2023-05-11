export function createCharacterCard() {
    const cardElement= document.createElement("li");
    cardElement.classList.add("card");
    cardElement.innerHTML=`
          <div class="card__image-container">
            <img
              class="card__image"
              src=${image}
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${occurrencies}</dd>
            </dl>
          </div>
        `;
        return cardElement;
}
 

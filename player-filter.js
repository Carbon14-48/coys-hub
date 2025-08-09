const cards = document.querySelectorAll(".players-guide .card");
const positionFilter = document.querySelector("#position");
const altPositionFilter = document.querySelector("#altposition");
const noResultMessage = document.querySelector(".no-matches");
const currentFilter = {
  position: "all",
  altposition: "all",
};
function updateFilter(e) {
  const filterType = e.target.name;
  currentFilter[filterType] = e.target.value;
  filterCard();
}
positionFilter.addEventListener("change", updateFilter);
altPositionFilter.addEventListener("change", updateFilter);

function filterCard() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    const position = card.querySelector("[data-primary]").dataset.primary;
    const altposition = card.querySelector("[data-alt]").dataset.alt;
    const matchesPosition = currentFilter.position === position;
    const matchesAltPosition = currentFilter.altposition === altposition;
    if (
      (matchesPosition || currentFilter.position === "all") &&
      (matchesAltPosition || currentFilter.altposition === "all")
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }
    if (hasVisibleCards) {
      noResultMessage.hidden = true;
    } else {
      noResultMessage.hidden = false;
    }
  });
}

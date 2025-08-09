const cards = document.querySelectorAll(".players-guide .card");
const positionFilter = document.querySelector("#position");
const altPositionFilter = document.querySelector("#altposition");
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
    } else {
      card.hidden = true;
    }
  });
}

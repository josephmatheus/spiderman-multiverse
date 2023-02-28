function handleMouseEnter() {
    this.classList.add("card--hovered")
    document.body.id = `${this.id}-hovered`
}

function handleMouseLeave() {
    this.classList.remove("card--hovered")
    document.body.id = ""
}

function addEventListenersToCards() {
  const cardElements = document.querySelectorAll(".card");
  cardElements.forEach((element) => {
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
  });
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

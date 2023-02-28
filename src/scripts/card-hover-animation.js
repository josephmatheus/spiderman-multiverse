function handleMouseEnter() {
    this.classList.add("card--hovered")
}

function handleMouseLeave() {
    this.classList.remove("card--hovered")
}

function addEventListenersToCards() {
  const cardElements = document.querySelectorAll(".card");
  cardElements.forEach((element) => {
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
  });
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

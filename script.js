
document.addEventListener("DOMContentLoaded", () => {
  // Select all project cards by class name
  const projectCards = document.querySelectorAll(".project-card");

  // Loop thru each card
  projectCards.forEach(card => {
    // When clicked, open the project link
    card.addEventListener("click", () => {
      const url = card.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank"); // opens the project in a new tab
      }
    });

    // add hover sparkle effecttt
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });
});

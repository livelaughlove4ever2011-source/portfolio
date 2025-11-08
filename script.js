// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all project cards by class name
  const projectCards = document.querySelectorAll(".project-card");

  // Loop through each card
  projectCards.forEach(card => {
    // When clicked, open the project link
    card.addEventListener("click", () => {
      const url = card.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank"); // opens the project in a new tab
      }
    });

    // Optional: add hover sparkle effect
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });
});

const blockaccordion = document.querySelectorAll(
  ".blockaccordion__accordion-item"
);

blockaccordion.forEach((element) => {
  const card = element.querySelector(".accordion"),
    text = element.querySelector(".accordion__text"),
    arrow = element.querySelector(".accordion__arrow");

  card.addEventListener("click", () => {
    text.classList.toggle("accordion__text_active");
    arrow.classList.toggle("accordion__arrow_active");
  });
});
document
  .querySelector(".blockaccordion__link")
  .addEventListener("click", (event) => {
    event.preventDefault();
  });

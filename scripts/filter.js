const form = document.querySelector(".form"),
  card = document.querySelectorAll(".filter__card-item"),
  inputCheckbox = document.querySelectorAll(".form__input"),
  applyButton = document.querySelector("#appy-button"),
  resetButton = document.querySelector("#reset-button");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const InputChangeHandler = () => {
  inputCheckbox.forEach((checkbox) => {
    const isChecked = checkbox.checked,
      checkboxId = checkbox.id,
      cardId = checkboxId + "-card",
      card = document.querySelector(`#${cardId}`);
if (card){
    if (isChecked) card.style.display = "block";
    else card.style.display = "none";
};
  });
};

applyButton.addEventListener("click", () => {
  InputChangeHandler();
});

resetButton.addEventListener("click", () => {
  form.reset();
  InputChangeHandler();
});

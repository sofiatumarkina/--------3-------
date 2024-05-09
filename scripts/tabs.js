const cabinButton = document.querySelector("#cabin"),
  foodButton = document.querySelector("#food"),
  bigblockFirst = document.querySelector("#first-tab"),
  bigblockSecond = document.querySelector("#second-tab");

cabinButton.addEventListener("click", () => {
  cabinButton.classList.add("button_active");
  bigblockFirst.classList.add("bigblock_active");
  bigblockSecond.classList.add("bigblock_disabled");

  foodButton.classList.remove("button_active");
  bigblockFirst.classList.remove("bigblock_disabled");
});

foodButton.addEventListener("click", () => {
  foodButton.classList.add("button_active");
  bigblockSecond.classList.add("bigblock_active");
  bigblockFirst.classList.add("bigblock_disabled");

  cabinButton.classList.remove("button_active");
  bigblockSecond.classList.remove("bigblock_disabled");
});

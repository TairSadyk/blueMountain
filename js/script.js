sectionPricing = document.querySelector(".section-pricing");
iconClose = document.querySelector(".popup__icon-close");
popupCont = document.querySelector(".popup");
popupContent = document.querySelector(".popup__content");
sectionPricing.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.closest(".btn--white")) popupCont.classList.remove("hidden");
  popupContent.classList.add("scale-to-normal");
});
iconClose.addEventListener("click", function () {
  popupCont.classList.add("hidden");
  popupContent.classList.remove("scale-to-normal");
});

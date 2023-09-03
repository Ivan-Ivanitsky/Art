import { modals } from "../assets/modules/modals.js";
import { slider } from "../assets/modules/slider.js";
import { AnimateBtn } from "../assets/modules/animateButton.js";
import { form } from "../assets/modules/form.js";
import choice from "../assets/modules/calc.js";
import burger from "../assets/modules/burger.js";
import filter from "../assets/modules/filter.js";
import picture from "../assets/modules/picture.js";
import accordion from "../assets/modules/accordion.js";
import paginate from "../assets/modules/paginate.js";
import scroll from "../assets/modules/scroll.js";
window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  let state = {};
  filter(
    ".portfolio-menu>li",
    ".portfolio-block ",
    ".portfolio-wrapper",
    ".portfolio-no"
  );
  burger(".burger", ".burger-menu", ".burger__item");
  modals();
  slider(
    ".feedback-slider-item",
    "horizontal",
    ".main-next-btn",
    ".main-prev-btn",
    6000
  );
  slider(".main-slider-item", "vertical", "", "", 3000);
  const animate = new AnimateBtn(".button-order");
  animate.mouseMove();
  choice(state);
  form(state);
  paginate(".button-transparent", ".styles-2");
  picture();
  accordion(".accordion-heading", ".accordion-block");
  scroll(".pageup");
});

const burger = (burger, classActive, list) => {
  const burgerBtn = document.querySelector(burger);
  const listElements = document.querySelectorAll(list),
    burgerClass = document.querySelector(classActive);

  burgerBtn.addEventListener("click", (e) => toggleBurger(e));

  function toggleBurger(e) {
    if (e.target) {
      if (burgerClass.className !== "burger-menu burger-active") {
        burgerClass.classList.add("burger-active");
        burgerBtn.classList.add("burger-active");
      } else {
        burgerClass.classList.remove("burger-active");
        burgerBtn.classList.remove("burger-active");
      }
    }
  }

  // listElements.forEach((el) => {
  //   el.addEventListener("click", (e) => {
  //     let nameBlock = el.attributes.value.value;
  //     e.preventDefault();
  //     if (e.target) {
  //       burgerClass.classList.remove("burger-active");
  //       burgerBtn.classList.remove("burger-active");
  //       document
  //         .querySelector(`.${nameBlock}`)
  //         .scrollIntoView({ behavior: "smooth", block: "center" });
  //     }
  //   });
  // });
};

export default burger;

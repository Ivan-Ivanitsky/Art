const btn = (btns, elements, wrapper, portfolio) => {
  const button = document.querySelectorAll(btns);
  const element = document.querySelectorAll(elements);
  const wrapperElem = document.querySelector(wrapper);
  const portfolioNo = document.querySelector(portfolio);

  button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target) {
        removeClassActive();
        btn.classList.add("active");
        changeElement(e.target.classList[0]);
      }
    });
  });

  function changeElement(btnClass) {
    element.forEach((item, i) => {
      if (item.className.indexOf(btnClass) > -1) {
        portfolioNo.style.display = "none";
        item.style.display = "block";
        wrapperElem.style.justifyContent = "center";
        item.classList.add("animated", "fadeIn");
      } else if (btnClass == "grandmother" || btnClass == "granddad") {
        item.style.display = "none";
        portfolioNo.style.display = "block";
        portfolioNo.classList.add("animated", "fadeIn");
      } else {
        item.style.display = " none";
      }
    });
  }

  function removeClassActive() {
    element.forEach((el) => el.classList.remove("animated", "fadeIn"));
    portfolioNo.classList.remove("animated", "fadeIn");
    button.forEach((btn) => btn.classList.remove("active"));
  }
};
export default btn;

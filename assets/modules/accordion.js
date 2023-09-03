const accordion = (head, block) => {
  const btns = document.querySelectorAll(head);
  let i = null;

  btns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("active-accordion");
      this.classList.toggle("active-style");
      if (index !== i) {
        blockHidden();
        this.nextElementSibling.classList.toggle("active-accordion");
        this.classList.toggle("active-style");
      }
      i = index;
    });
  });

  function blockHidden() {
    btns.forEach((btn) => {
      btn.nextElementSibling.classList.remove("active-accordion");
      btn.classList.remove("active-style");
    });
  }
};

export default accordion;

const paginate = (button, element) => {
  const btn = document.querySelector(button);
  const elements = document.querySelectorAll(element);

  btn.addEventListener("click", (e) => {
    if (e.target) {
      btn.classList.add("rotate");
      elements.forEach((el) => {
        setTimeout(() => {
          el.classList.remove(
            "hidden-lg",
            "hidden-md",
            "hidden-sm",
            "hidden-xs"
          );
          el.classList.add(
            "col-sm-3",
            "col-sm-offset-0",
            "col-xs-10",
            "col-xs-offset-1",
            "animated",
            "fadeIn"
          );
        }, 400);
      });
    }
  });
};
export default paginate;

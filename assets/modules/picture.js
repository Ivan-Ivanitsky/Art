const picture = () => {
  const block = document.querySelectorAll(".sizes-block");

  block.forEach((block) => {
    block.addEventListener("mouseenter", (e) => {
      showImg(block);
    });
    block.addEventListener("mouseleave", (e) => {
      hideImg(block);
    });
  });

  function showImg(block) {
    const img = block.querySelector("img");
    //size.png => size-1.png
    let path = img.src.slice(0, -4) + "-1.png";
    img.setAttribute("src", path);
    img.classList.add("animated", "bounceIn");
    block
      .querySelectorAll("p:not(.sizes-hit)")
      .forEach((p) => (p.style.display = "none"));
  }

  function hideImg(block) {
    const img = block.querySelector("img");
    //size-1.png => size.png
    let path = img.src.slice(0, -6) + ".png";
    console.log(path, img);
    img.setAttribute("src", path);
    img.classList.remove("animated", "bounceIn");
    block
      .querySelectorAll("p:not(.sizes-hit)")
      .forEach((p) => (p.style.display = "block"));
  }
};

export default picture;

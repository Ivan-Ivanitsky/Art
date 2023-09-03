const scroll = (upSelect) => {
  const up = document.querySelector(upSelect);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1700) {
      up.classList.add("animated", "fadeIn");
      up.classList.remove("fadeOut");
    } else {
      up.classList.remove("fadeIn");
      up.classList.add("fadeOut");
    }
  });

  //scrolling

  // const documet = document.documentElement,
  //   body = document.body;

  // function settingScroll() {
  //   up.addEventListener("click", (e) => {
  //     let scrollTop = Math.round(body.scrollTop || documet.scrollTop);

  //     if (up.hash !== "") {
  //       e.preventDefault();
  //       let hashElement = document.querySelector(up.hash),
  //         hasElementTop = 0;
  //       if (hashElement.offsetParent) {
  //         hasElementTop += hashElement.offsetTop;
  //         hashElement = hashElement.offsetParent;

  //         console.log(hasElementTop, hashElement);
  //       }
  //       hasElementTop = Math.round(hasElementTop);
  //       smoothScroll(scrollTop, hasElementTop, up.hash);
  //     }
  //   });
  // }

  // const smoothScroll = (from, to) => {
  //   let timeInterval = 1,
  //     prevScrollTop,
  //     speed;
  //   if (to > from) {
  //     speed = 30;
  //   } else {
  //     speed = -30;
  //   }

  //   let move = setInterval(() => {
  //     let scrollTop = Math.round(body.scrollTop || documet.scrollTop);
  //     console.log(body.scrollTop, documet.scrollTop);
  //     if (prevScrollTop === scrollTop || (to > from && scrollTop >= to)) {
  //       clearInterval(move);
  //     } else {
  //       body.scrollTop += speed;
  //       documet.scrollTop += speed;
  //       prevScrollTop = scrollTop;
  //     }
  //   }, timeInterval);
  // };

  // settingScroll();

  //

  // scroll frame

  const links = document.querySelectorAll('[href^="#"]');

  let speed = 190;

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      let down = 0;
      let up = 0;
      let toBlock;
      event.preventDefault();
      let hash = this.hash;
      if (hash !== "") {
        toBlock = Math.round(
          document.querySelector(hash).getBoundingClientRect().top
        );
      } else {
        return;
      }

      requestAnimationFrame(startFrame);
      up = Math.abs(toBlock);

      function startFrame() {
        if (down !== toBlock && down < toBlock) {
          down += speed;
          document.documentElement.scrollTo(0, down);
          up = 0;
          requestAnimationFrame(startFrame);
        } else if (up > 0) {
          up -= speed;
          document.documentElement.scrollTo(0, up);
          requestAnimationFrame(startFrame);
        }
      }
    });
  });
};

export default scroll;

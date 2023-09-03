const choice = (state) => {
  const price = document.querySelector(".calc-price");
  const selects = document.querySelectorAll("select");
  const promo = document.querySelector(".promocode");
  let sumAll = 0;
  let sumSize = 0;
  let sumMaterialize = 0;
  selects.forEach((sel) => {
    sel.addEventListener("click", (e) => {
      if (e.target) {
        selection(e.target.id);
      }
    });
  });

  // choice selected
  function selection(name) {
    let select = document.querySelector(`#${name}`);
    select.addEventListener("input", (e) => {
      if (name == "size") {
        sumSize = parseInt(e.target.value);
        state["size"] = sumSize;
      }
      if (name == "material") {
        sumMaterialize = parseInt(e.target.value);
        state["material"] = sumMaterialize;
      }
      if (sumMaterialize && sumSize) {
        sumAll = sumMaterialize + sumSize;
        state["sumAll"] = sumAll;
      }
      showPrice();
      activePromocode();
    });
  }

  //show price promo
  function activePromocode() {
    let sumPromo = 0;
    promo.addEventListener("input", (e) => {
      if (e.target.value.trim() === "IWANTPOPART") {
        sumPromo = Math.floor(sumAll - sumAll / 10);
        price.textContent = sumPromo;
        state["promoSum"] = sumPromo;
      } else {
        price.textContent = sumAll;
      }
    });
  }

  //show price
  function showPrice() {
    if (sumMaterialize && sumSize) {
      price.textContent = sumAll;
    } else {
      price.textContent =
        "Для расчета нужно выбрать размер картины и материал картины";
    }
  }
};

export default choice;

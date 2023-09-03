const input = document.querySelectorAll("input");
const span = document.createElement("span");
function sortInput() {
  return Object.values(input).filter((el) => {
    if (el.name === "name" || el.name === "phone") {
      return el;
    }
  });
}

const inputFilter = sortInput();

export default function validate() {
  let valid = true;
  clearMessages();
  inputFilter.forEach((inp, i) => {
    if (inp.name === "name" && inp.value.match(/\d/)) {
      valid = false;
      createMessages("Введите ваше Имя", i, inputFilter);
    } else if (inp.name === "phone" && inp.value.match(/\D/)) {
      valid = false;
      createMessages("Введите ваш номер телефона", i);
    }
  });
  return valid;
}

function createMessages(message, i, parent) {
  if (parent[i].parentElement.className === "input-wrapper form-consultation") {
    span.classList.add("error", "error_pos-ab");
  } else {
    span.classList.add("error");
  }
  span.textContent = message;
  inputFilter[i].insertAdjacentElement("beforebegin", span);
  inputFilter[i].classList.add("input__error");
}

function clearMessages() {
  inputFilter.forEach((inp) => inp.classList.remove("input__error"));
  span.remove();
}

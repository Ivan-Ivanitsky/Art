import { apiPost } from "../servese/api";
import clearInputForm from "./clearInput";
import formatText from "./formatText";
import validate from "./validate";
export { form };

const form = (state) => {
  const form = document.querySelectorAll("form");
  const input = document.querySelectorAll("input");
  const textArea = document.querySelectorAll("textarea");
  const upload = document.querySelectorAll('[name="upload"]');
  const select = document.querySelectorAll("select");
  const btns = document.querySelectorAll("button");

  const messages = {
    load: "Загрузка",
    spinner: "assets/img/spinner.gif",
    succesfullImg: "assets/img/ok.png",
    succesfull: "Готово",
    false: "Что-то пошло не так",
  };

  // btn disable
  function btnDisabled(bollean) {
    btns.forEach((btn) => {
      btn.setAttribute("disabled", bollean);
    });
  }

  //btn DeleteDisable

  function btnDisDel() {
    btns.forEach((btn) => {
      btn.removeAttribute("disabled");
    });
  }

  form.forEach((item, i) => {
    post(item, i);
  });

  upload.forEach((inp) => {
    inp.addEventListener("input", (e) => {
      let uploadText = e.target.parentElement.children[1];
      let imgFiles = e.target.files[0].name.split(".");
      let upload = formatText(imgFiles[0], imgFiles[1]);
      uploadText.textContent = upload;
    });
  });

  function post(form, i) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validate()) return;
      form.classList.add("animated", "fadeOut");
      btnDisabled(true);
      //create spinner
      const spinner = document.createElement("img");
      spinner.classList.add("spinner", "animated", "fadeIn");
      const statusMessages = document.createElement("div");
      statusMessages.classList.add("messages");
      statusMessages.textContent = messages.load;
      statusMessages.style.cssText = `margin-top:10px;     
      font-size: 20px;
      font-weight: 700;
      color: #ba1eb8;
      text-align:center;
      `;

      setTimeout(() => {
        form.style.display = "none";
        form.classList.remove("animated", "fadeOut");
        form.insertAdjacentElement("afterend", spinner);
        spinner.setAttribute("src", messages.spinner);
        spinner.insertAdjacentElement("afterend", statusMessages);
      }, 300);

      // create Form

      const formData = new FormData(form);

      //add elements form
      for (let key in state) {
        formData.append(key, state[key]);
      }

      //create path
      const path = {
        post: "assets/server.php",
        question: "assets/question.php",
      };

      let url = form.closest(".popup-design") ? path.question : path.post;

      apiPost(url, formData)
        .then(() => {
          setTimeout(() => {
            spinner.setAttribute("src", messages.succesfullImg);
            statusMessages.textContent = messages.succesfull;
            form.classList.add("animated", "fadeIn");
            clearModal();
            btnDisDel();
          }, 800);
        })
        .catch((e) => {
          console.log(e);
        });

      function clearModal() {
        setTimeout(() => {
          spinner.remove();
          statusMessages.remove();
          clearInputForm(input, textArea, upload, select);
          form.style.display = `block`;
        }, 1500);
      }
    });
  }
};

export default function clearInputForm(input, textArea, upload, select) {
  input.forEach((inp) => {
    inp.value = "";
  });
  textArea.forEach((inp) => {
    inp.value = "";
  });
  upload.forEach(
    (el) => (el.parentElement.children[1].textContent = "Файл не выбран")
  );
  select.forEach((el) => (el.options[0].selected = true));
}

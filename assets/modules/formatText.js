function formatText(name, format) {
  let nameArr = name.split("");
  let nameText =
    nameArr.length >= 6
      ? `${nameArr.slice(0, 6).join("")}..`
      : nameArr.join("");

  let formatText = `${nameText}.${format}`;

  return formatText || "Файл не выбран ";
}

export default formatText;

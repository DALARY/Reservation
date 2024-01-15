let form = document.querySelector("form");
const select = document.querySelector(".select");
const date = [
  "mardi 26 septembre",
  "jeudi 12 octobre",
  "samedi 14 octobre",
  "vendredi 28 octobre",
  "lundi 15 décembre",
];
const submit = document.getElementById("submit");
const add = document
  .querySelector(".add")
  .addEventListener("click", handleAddButtonClick);
const divAdd = document.querySelector(".divAdd");


// Crée les options en fonction du tableau date
for (let i = 0; i < date.length; i++) {
  let option = document.createElement("option");
  option.text = date[i];
  select.appendChild(option);
}

let index = 1;
function handleAddButtonClick() {
  if (index < date.length) {
    let newDiv = divAdd.cloneNode(true);
    form.appendChild(newDiv);

    // Permet de cacher le display du bouton ajouter
    newDiv
      .querySelector(".add")
      .addEventListener("click", handleAddButtonClick);
    let addButtonsInNewDiv = newDiv.querySelectorAll(".add");
    addButtonsInNewDiv.forEach((button) => {
      button.addEventListener("click", handleAddButtonClick);
      button.style.display = "none"; // Cacher le bouton sur lequel vous avez cliqué
    });

    // Retirer l'option sélectionnée de tous les menus déroulants
    let selectedOption = document.querySelector('option').value;
    let allSelects = document.querySelectorAll('.select');

    allSelects.forEach((currentSelect) => {
      currentSelect.remove(currentSelect.querySelector(`option[value="${selectedOption}"]`));
    });
    console.log(selectedOption)

    index++;
  }
}

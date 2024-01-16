let form = document.querySelector("form");
const select = document.querySelector(".select");
const date = [
  "mardi 26 septembre",
  "jeudi 12 octobre",
  "samedi 14 octobre",
  "vendredi 28 octobre",
  "lundi 15 décembre",
];
const submit = document.querySelectorAll(".submit");
const add = document.querySelector(".add");
add.addEventListener("click", handleAddButtonClick);
const divAdd = document.querySelector(".divAdd");
const buttonDiv = document.querySelector(".buttonDiv");

// Crée les options en fonction du tableau date
for (let i = 0; i < date.length; i++) {
  let option = document.createElement("option");
  option.textContent = date[i];
  select.appendChild(option);
}

let index = 1;
function handleAddButtonClick() {
  if (index < date.length) {
    let newDiv = divAdd.cloneNode(true);
    form.insertBefore(newDiv, buttonDiv);

    // Retirer l'option sélectionnée de tous les menus déroulants
    let allSelects = document.querySelectorAll(".select");

    allSelects.forEach((currentSelect) => {
      let selectedOption = currentSelect.querySelector("option").value
      if (selectedOption) {
        currentSelect.remove(selectedOption)
      }
      console.log(selectedOption);
    });

    index++;
  }
}

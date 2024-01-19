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
const divAdd = document.querySelector(".divAdd");
const buttonDiv = document.querySelector(".buttonDiv");

// Crée les options en fonction du tableau date
for (let i = 0; i < date.length; i++) {
  let option = document.createElement("option");
  option.textContent = date[i];
  select.appendChild(option);
}

let index = 1;
add.addEventListener("click", () => {
  if (index < date.length) {
    let newDiv = divAdd.cloneNode(true);
    form.insertBefore(newDiv, buttonDiv);

    // Désactive la balise <select> de la div précédente
    if (index > 0) {
      let previousDiv = form.children[index - 1];
      let previousSelect = previousDiv.querySelector(".select");
      previousSelect.setAttribute("disabled", "");

      let selectIndex = date.indexOf(previousSelect.value);
      console.log(selectIndex);
      if (selectIndex !== -1) {
        date.splice(selectIndex, 1);
      }

      // Supprime l'option sélectionnée du nouveau select dans la nouvelle div
      newDiv.querySelector(".select").remove(selectIndex);

      console.log(selectIndex);
    }
    newDiv.querySelector(".select").removeAttribute("disabled");
    index++;
  }
});

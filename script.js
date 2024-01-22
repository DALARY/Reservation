const form = document.querySelector("form");
const select = document.querySelector(".select");
const date = [
  "mardi 26 septembre",
  "jeudi 12 octobre",
  "samedi 14 octobre",
  "vendredi 28 octobre",
  "lundi 15 décembre",
];
const add = document.querySelector(".add");
const submit = document.querySelector(".submit");
const buttonDiv = document.querySelector(".buttonDiv");

select.addEventListener("change", () => {
  if (select.selectedIndex == 0) {
    add.setAttribute("disabled", "");
  } else {
    add.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    add.classList.add("btnAdd");
    submit.classList.add("btnSubmit");
  }
});

/* Crée les options par défaut en fonction du tableau date */
for (let i = 0; i < date.length; i++) {
  const option = document.createElement("option");
  option.textContent = date[i];
  select.appendChild(option);
}

let index = 1;
const selectedDates = [];
const valueInput = [];

/* Permet de supprimer la réservation */
form.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("delete")) {
    // Si le clic a été effectué sur un bouton avec la classe "delete"
    const newDiv = target.closest(".divAdd");

    if (newDiv) {
      // Si le bouton "Supprimer" est à l'intérieur d'une nouvelle div
      const newSelect = newDiv.querySelector(".select");
      const selectedDateIndex = selectedDates.indexOf(newSelect.value);

      selectedDates.splice(selectedDateIndex, 1);
      valueInput.splice(selectedDateIndex, 1);

      const restoredDate = newSelect.value;

      const allSelects = document.querySelectorAll(".divAdd .select");
      allSelects.forEach((select) => {
        const option = document.createElement("option");
        option.textContent = restoredDate;
        select.appendChild(option);
      });

      add.style.display = "block";
      newDiv.remove();
      index--;
    }
  }
});

add.addEventListener("click", () => {
  if (index < date.length) {
    /* Création des éléments de ma pages HTML */
    const newDiv = document.createElement("div");
    newDiv.classList.add("divAdd");

    const newSelect = document.createElement("select");
    newSelect.classList.add("select");
    newDiv.appendChild(newSelect);

    const defaultOption = document.createElement("option");
    defaultOption.setAttribute("selected", "");
    defaultOption.setAttribute("disabled", "");
    defaultOption.textContent = "Choisir une date";
    newSelect.appendChild(defaultOption);

    const newInput = document.createElement("input");
    newInput.setAttribute("type", "number");
    newInput.setAttribute("value", 1);
    newInput.setAttribute("min", 1);
    newDiv.appendChild(newInput);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.classList.add("delete");
    newDiv.appendChild(deleteBtn);

    form.insertBefore(newDiv, buttonDiv);
    add.setAttribute("disabled", "");
    add.classList.remove("btnAdd");

    /* Modification des options du select */
    if (index > 0) {
      const previousDiv = form.children[index - 1];
      const previousSelect = previousDiv.querySelector(".select");
      previousSelect.setAttribute("disabled", "");

      const previousIndex = previousDiv.querySelector("input");
      previousIndex.setAttribute("disabled", "");

      const previousDelete = previousDiv.querySelector(".delete");
      previousDelete.style.display = "block";

      /* Ajoute la date et le nombre de place précédemment sélectionnée */
      selectedDates.push(previousSelect.value);
      valueInput.push(previousIndex.value);

      /* Filtre les éléments sélectionner en fonction des dates */
      const availableDates = date.filter(
        (dateItem) => !selectedDates.includes(dateItem)
      );

      /* Crée les nouvelles dates disponible */
      for (let i = 0; i < availableDates.length; i++) {
        const option = document.createElement("option");
        option.textContent = availableDates[i];
        newSelect.appendChild(option);
      }

      newSelect.addEventListener("change", () => {
        if (newSelect.selectedIndex == 0) {
          add.setAttribute("disabled", "");
        } else {
          add.removeAttribute("disabled", "");
          add.classList.add("btnAdd");
        }
      });

      if (index === date.length - 1) {
        add.style.display = "none";
      }
    }

    newDiv.querySelector(".select").removeAttribute("disabled");
    index++;

    console.log(selectedDates, valueInput);
  }
});

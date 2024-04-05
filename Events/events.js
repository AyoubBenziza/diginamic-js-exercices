const h1 = document.querySelector("h1");

h1.onclick = function () {
  console.log("OnClick: Click effectué sur h1");
};

h1.addEventListener("click", () =>
  console.log("AddEventListener: Click effectué sur h1")
);

h1.addEventListener("click", faireLeCafe);

function faireLeCafe(e) {
  console.log(`Event Target:`, e.target);
  console.log("Faire le café Al denté");
}

// Modal
const button = document.querySelector("button");
const sectionModal = document.getElementById("my-modal");

button.addEventListener("click", toggleVisibility);

function toggleVisibility(e) {
  sectionModal.classList.toggle("modal");
}

// Paragraphes Lorem ipsum
const sectionText = document.createElement("section");
document.body.appendChild(sectionText);

const buttonText = document.createElement("button");
buttonText.innerText = "Ajouter un paragraphe";
document.body.appendChild(buttonText);

buttonText.addEventListener("click", addText);

function addText() {
  const t = document.createElement("p");
  t.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, tempora
    perferendis. Modi, dolore. Incidunt laudantium sit illum, ex fuga
    aperiam voluptatum corporis. Sed explicabo rerum id vero minus qui
    architecto.`;
  sectionText.appendChild(t);
}

// Liste de tâches
const form = document.createElement("form");
document.body.appendChild(form);

const inputForm = document.createElement("input");
inputForm.type = "text";
inputForm.placeholder = "Nouvelle tâche";
form.appendChild(inputForm);

const buttonForm = document.createElement("button");
buttonForm.innerText = "Ajouter une tâche";
buttonForm.type = "submit";
form.appendChild(buttonForm);

form.addEventListener("submit", createTask);

function createTask(e) {
  e.preventDefault();
  const content = inputForm.value;
  const sectionTask = document.createElement("section");
  sectionTask.innerHTML = `<h3>${content}</h3>`;
  document.body.appendChild(sectionTask);

  const buttonConfirmTask = document.createElement("button");
  buttonConfirmTask.innerText = "Valider";
  sectionTask.appendChild(buttonConfirmTask);

  buttonConfirmTask.addEventListener("click", checkTask);

  const buttonDeleteTask = document.createElement("button");
  buttonDeleteTask.innerText = "Supprimer";
  sectionTask.appendChild(buttonDeleteTask);

  buttonDeleteTask.addEventListener("click", deleteTask);
  inputForm.value = "";
}

function checkTask(e) {
  const section = e.target.parentNode;
  const content = section.firstChild;
  content.innerHTML = content.innerText.strike();

  document.body.appendChild(section);
}

function deleteTask(e) {
  const section = e.target.parentNode;
  const content = section.firstChild;
  if (confirm(`Are you sure you want to delete ${content.innerText}?`)) {
    document.body.removeChild(section);
  } else {
    console.log(`Cancel`);
  }
}

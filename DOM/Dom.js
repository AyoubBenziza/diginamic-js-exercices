let h1 = document.getElementById("myh1");

h1.align = "center";
h1.innerText = "Nouvelle valeur";

let span = document.createElement("span");
span.innerText = "Element créé par le script";

// Place l'élément en dernière position d'enfant de body
document.body.appendChild(span);

// while (h1) {
//   console.log("class de h1 : ", h1.constructor.name);
//   // Remonte la chaîne des prototypes
//   h1 = Object.getPrototypeOf(h1);
// }

/**
 * Crée un élément du dom, lui ajoute du texte, le place comme dernier
 * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
 * @param {String} markup_name
 * @param {String} text
 * @param {domElement} parent
 * @param {Object[]} attributes
 * @returns domElement
 */
function createMarkup(markupname, text, parent, attributes = {}) {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (key in attributes) {
    markup.setAttribute(key, attributes[key]);
  }
  return markup;
}

function navMenu(num = 1) {
  const header = createMarkup("header", "", document.body);
  const nav = createMarkup("nav", "", header);
  for (let i = 1; i <= num; i++) {
    createMarkup("button", `Item ${i}`, nav, { id: `item${i}` });
  }
  document.querySelector("nav > button").style.color = "red";
  // nth-child() permet de sélectionner à un index spécifique
  document.querySelector("nav > button:nth-child(3)").style.color = "red";
}

// createMarkup("section", "Texte ici", document.querySelector("nav"), {
//   id: "monid",
//   class: "myclass",
// });

navMenu(9);

//----------------------------- Function ---------------------------------//

// Fonction constructeur de Cat
function Cat(name) {
  this.name = name;
  // this.meow = function () {
  //   console.log("Meooooooooooow");
  // };
}

// Ajout de la propriété meow au prototype de la fonction constructeur Cat
// meow devient accessible à toutes les instances issues de la fonction constructeur Cat
Cat.prototype.meow = function () {
  console.log(`${this.name} dit: Meooooooooooow`);
};

// Instance d'un objet Cat
const felix = new Cat("Felix");
const praline = new Cat("Praline");

// Appel de la méthode meow
felix.meow();
praline.meow();

// Appel des objets Cat
console.log("Felix", felix);
console.log("Praline", praline);

// Pour savoir si les deux meow sont stockées au même endroit
if ((felix.meow = praline.meow)) {
  console.log("Les méthodes sont stockées sur la même adresse mémoire");
} else {
  console.log("Les méthodes ne sont pas stockées sur la même adresse mémoire");
}

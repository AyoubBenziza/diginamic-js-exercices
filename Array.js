//----------------------------- Array ---------------------------------//

// Liste de fruits
const fruits = ["Banane", "Cerise"]; // or new Array('Banane','Cerise');

// Affichage du tableau
console.log(`Tableau fruits:`, fruits);

// Affichage de la longueur du tableau
console.log(`Longueur du tableau fruits:`, fruits.length);

// Ajout d'un élément à la fin du tableau
fruits.push("Pomme");
console.log(`Tableau fruits:`, fruits);

// Itération sur chaque élément du tableau
fruits.forEach((fruit, index) => {
  console.log(`fruit [${index}]:`, fruit);
});

// Mappage d'un tableau
const numbers = [1, 2, 3, 4, 5];
const mapNumbers = numbers.map((element) => element ** 2);
console.log(`mapNumbers:`, mapNumbers);

// Filtrage d'un tableau
const animals = ["Dolphin", "Dog", "Lion", "Cat", "Horse", "Eagle"];
const filterAnimals = animals.filter((element) => element.length >= 5);
console.log(`filterAnimals:`, filterAnimals);

// Tri d'un tableau
// Tri par ordre alphabétique
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(`months`, months);

// Tri par nombre
const triNumbers = [8, 5, 12, 2, 7];
// Tri par ordre croissant, si décroissant on inverse en b - a
triNumbers.sort((a, b) => a - b);
console.log(`triNumbers:`, triNumbers);

// Spread Operator
const panier = ["Abricot", ...fruits, "Pastèque"];
console.log(`panier:`, panier);

//----------------------------- Exercice ---------------------------------//

// Liste de fruits
let fruits = ["Banane", "Cerise"]; // or new Array('Banane','Cerise');
fruits = [...fruits, "Abricot", "Pastèque", "Kiwi"].sort(
  (a, b) => a.length - b.length
);
console.log(`fruits`, fruits);

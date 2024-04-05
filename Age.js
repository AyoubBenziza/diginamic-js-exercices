const users = [
  { name: "Dylan", age: 78 },
  { name: "Marley", age: 92 },
  { name: "Cohen", age: 83 },
  { name: "Jackson", age: 76 },
];

// Ordre croissant
users.sort((a, b) => a.age - b.age);
console.log(`users par ordre croissant`, users);

// Ordre décroissant
users.sort((a, b) => b.age - a.age);
console.log(`users par ordre décroissant`, users);

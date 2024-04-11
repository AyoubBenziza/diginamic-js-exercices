async function loadToken() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (Math.random() > 0.5) {
        resolve("Réussite dans loadToken");
      } else {
        reject("Erreur dans loadToken");
      }
    }, 2000);
  });
}

async function loadUser(token) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (Math.random() > 0.2) {
        resolve({ name: "toto", id: 1 });
      } else {
        reject("Erreur dans loadUser");
      }
    }, 2000);
  });
}

// loadToken()
//   // si la promesse est tenue, on va dans le then
//   .then((token) => {
//     console.log(`Message:`, token);
//     loadToken(token)
//       // Cas favorable deux fois: lors de l'appel de loadToken puis de loadUser
//       .then((user) => console.log(`User:`, user))
//       .catch((err) => console.error(err));
//   })
//   // si la promesse n'est pas tenue, on passe dans le catch
//   .catch((err) => console.error(err));
console.log(`Après l'appel de loadToken`);

// Nouvelle syntaxe
try {
  const token = await loadToken();
  // Le code s'exécute si la promesse a été tenue
  console.log(`Token:`, token);
  const user = await loadUser(token);
  console.log(`User:`, user);
} catch (err) {
  console.error("Erreur:", err);
}

// Incrémentation du compteur chaque seconde tant que i est inférieur à 5
function counter(i = 1) {
  setTimeout(() => {
    console.log(i);
    if (i < 5) counter(i + 1);
  }, 1000);
}

// Appel de la fonction
counter();

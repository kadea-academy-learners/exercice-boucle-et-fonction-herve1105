/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
  // Vérification du type
  if (typeof n !== 'number' || isNaN(n)) return null;

  // Vérification que c'est un entier
  if (!Number.isInteger(n)) return false;

  // Vérification de l'impair
  return Math.abs(n % 2) === 1;
}

console.log("estImpair(7) =", estImpair(7)); // Affiche : true
console.log("estImpair(10) =", estImpair(10)); // Affiche : false
console.log("estImpair('ijk') =", estImpair("ijk"));
// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };

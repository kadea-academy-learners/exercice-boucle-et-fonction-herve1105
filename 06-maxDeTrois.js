/*
  Énoncé :
  Crée une fonction `maxDeTrois(a, b, c)` qui :
    - retourne "Les trois nombres sont égaux" si les trois valeurs sont identiques
    - retourne le plus grand des trois sinon
    - retourne null si le nombre d'arguments est incorrect ou si un argument n'est pas un nombre

  Signature attendue :
    function maxDeTrois(a, b, c) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function maxDeTrois(a, b, c) {
  if (arguments.length !== 3) return null;
  
  if (
    typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' ||
    isNaN(a) || isNaN(b) || isNaN(c)
  ) {
    return null;
  }

  if (a === b && b === c) return "Les trois nombres sont égaux";

  return Math.max(a, b, c);
}

console.log("maxDeTrois(7, 3, 5) =", maxDeTrois(7, 3, 5));
console.log("maxDeTrois(4, 4, 4) =", maxDeTrois(4, 4, 4));
console.log("maxDeTrois('4', 4, 4) =", maxDeTrois("4", 4, 4));

// Ne pas modifier la ligne ci-dessous
module.exports = { maxDeTrois };

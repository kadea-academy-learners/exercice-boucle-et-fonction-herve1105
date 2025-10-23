/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function multiplication(a, b) {
  // Vérifier que deux arguments sont bien fournis
  if (arguments.length !== 2) return undefined;

  // Vérifier que les deux valeurs sont bien des nombres
  if (typeof a !== "number" || typeof b !== "number") return undefined;

  // Vérifier qu'elles ne sont pas NaN
  if (isNaN(a) || isNaN(b)) return undefined;

  // Calcul du résultat
  let resultat = a * b;

  // Corriger le cas spécial de -0
  if (Object.is(resultat, -0)) {
    resultat = 0;
  }

  return resultat;
}

console.log(multiplication(8, 5));

// Ne pas modifier la ligne ci-dessous
module.exports = { multiplication }


// 1. Fonction de calcul
function calculerSurface(longueur, largeur) {
    return longueur * largeur;
}

// 2. Fonction de décision
function estGrand(surface) {
    return surface >= 100;
}

// 3. Exécution
let surfacePiece = calculerSurface(12, 10);

let grandePiece = estGrand(surfacePiece);

// 4. Affichage des résultats
console.log("Surface calculée : " + surfacePiece + " m²");
console.log("Grande pièce : " + grandePiece);

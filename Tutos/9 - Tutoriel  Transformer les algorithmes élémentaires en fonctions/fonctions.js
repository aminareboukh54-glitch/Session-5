// 1. Fonction de calcul de moyenne
function calculerMoyenne(notes) {
    let somme = 0;

    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }

    return somme / notes.length;
}

// 2. Déclaration des deux tableaux
let groupeA = [12, 14, 16];
let groupeB = [10, 18, 11, 13];

// 3. Affichage des moyennes
console.log("Moyenne Groupe A : " + calculerMoyenne(groupeA));

console.log("Moyenne Groupe B : " + calculerMoyenne(groupeB));

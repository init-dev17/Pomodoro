// ----------------------------
// Variables -----------------
let timeOut;

let compteur = document.querySelector(".compteur h1");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let next = document.querySelector("#next");

let finPomodoro = new Audio("/assets/audio/finPomodoro.mp3"); // https://lasonotheque.org/detail-1111-message-1.html
// console.log(finPomodoro);

let choixPomo = [25, 5, 25, 5, 25, 5, 25, 15];
let choix = 0;

//
// ----------------------------
// Fonctions -----------------
function countDown() {
  const minutes = Math.floor(timeOut / 60);
  const seconds = timeOut % 60;
  console.log("Il reste : ", minutes, " minutes", seconds, "secondes.");
  console.log("En secondes : ", timeOut);

  compteur.innerHTML = `${minutes} : ${seconds}`;

  // Si le temps(en secondes) > 0, continuez le décompte et le décrémenter
  if (timeOut > 0) {
    start.style.background = "black";
    pause.style.background = "orange";
    next.style.background = "red";

    setTimeout(countDown, 1000);
    timeOut--;
  } else if (timeOut == 0) {
    console.log("Fin du programme");
    finPomodoro.play();

    start.style.background = "green";
    pause.style.background = "transparent";
    next.style.background = "transparent";

    // Incrémenter le choix
    // Réinitialiser le choix à 0 si après le temps de pause 15 minutes
    // dernier élément du tableau choix
    if (choix < choixPomo.length - 1) {
      choix++;
    } else {
      choix = 0;
    }

    // if choix impair : cacher le bouton "Démarrer" et afficher bouton "Passer"
    // ou rendre incliquable "Démarrer"

    console.log("Tour Pomodoro : ", choix);
    return 0;
  }
}

function cycle() {
  console.log("Temps de pomo : ", choixPomo[choix]);
  duree = choixPomo[choix];
}

// ----------------------------
// Evénements et Logique ------
start.addEventListener("click", () => {
  console.log("click event");

  cycle();
  timeOut = duree * 60;
  console.log("Temps déterminé pour le Pomodoro : ", duree, "minutes");

  countDown();
});

// si appui sur bouton "Passer", passe à la prochaine étape du pomodoro
next.addEventListener("click", () => {
  console.log("click event sur next");
  console.log(timeOut);
  timeOut = 0;
  console.log(timeOut);
});

//
/* Loop

let i = 0;
function loop() {
  console.log("i = ", i);
  i++;

  if (i < 20) {
    setTimeout(loop, 1000);
  }
}
let body = document.querySelector("body");
body.addEventListener("click", () => {
  loop();
});

*/

// ----------------------------
// Variables -----------------
let timeOut;

let compteur = document.querySelector(".compteur h1");
let start = document.querySelector("#start");

let finPomodoro = new Audio("/assets/audio/finPomodoro.mp3"); // https://lasonotheque.org/detail-1111-message-1.html
// console.log(finPomodoro);

let choixPomo = [25, 5, 25, 5, 25, 5, 25, 15];

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
    setTimeout(countDown, 70);
    timeOut--;
  } else if (timeOut == 0) {
    console.log("Fin du programme");
    finPomodoro.play();
    return 0;
  }
}

function cycle() {}

// ----------------------------
// Evénements et Logique ------
start.addEventListener("click", () => {
  console.log("click event");
  duree = choixPomo[0];
  timeOut = duree * 60;
  console.log("Temps déterminé pour le Pomodoro : ", duree, "minutes");

  countDown();
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

const leftToggle = document.getElementById("left-btn");
console.log(leftToggle);

const leftBurger = document.querySelectorAll("#left-sidebar span");
console.log(leftBurger);

const leftSidebar = document.getElementById("left-sidebar");
console.log(leftSidebar);

leftToggle.addEventListener("click", () => {
  leftSidebar.classList.toggle("active");
});

/*
body.addEventListener("click", () => {
  leftSidebar.classList.remove("active");
});
*/

// --------------------------

const rightToggle = document.getElementById("right-btn");
console.log(rightToggle);

const rightBurger = document.querySelectorAll("#right-sidebar span");
console.log(rightBurger);

const rightSidebar = document.getElementById("right-sidebar");
console.log(rightSidebar);

rightToggle.addEventListener("click", () => {
  rightSidebar.classList.toggle("active");
});

/*
body.addEventListener("click", () => {
  rightSidebar.classList.remove("active");
});
*/

// --------------------------

// NAVBAR
const toggle = document.getElementById("nav-toggle");
const navbar = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
  toggle.classList.toggle("show-icon");
});

// HOME ANIMATION
const words = [
  "Front-End Dev",
  "Back-End Dev",
  "Full-Stack Dev",
  "Creative Coder",
  "Tattoo Artist",
  "Problem Solver",
];

let index = 0;
const wordElement = document.getElementById("changing-word");

setInterval(() => {
  wordElement.style.animation = "slide-out 0.5s ease forwards";

  setTimeout(() => {
    index = (index + 1) % words.length;
    wordElement.textContent = words[index];

    wordElement.style.animation = "slide-in 0.5s ease forwards";
  }, 500);
}, 3000);

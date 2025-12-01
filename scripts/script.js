// NAVBAR
const toggle = document.getElementById("nav-toggle");
const navbar = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
  toggle.classList.toggle("show-icon");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));

        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`a[href="#${id}"]`);
        activeLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach((section) => observer.observe(section));

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

/*----------------------*/
// VALIDACIÓN FORM
/*----------------------*/
const form = document.querySelector(".contact-form");
const inputs = document.querySelectorAll(".contact-form input");
const textArea = document.querySelector(".contact-form textarea");
const errorMsg = document.querySelector(".error-msg");

const expressions = {
  name: /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s']{3,40}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

const campos = {
  firstName: false,
  lastName: false,
  email: false,
  message: false,
};

const showError = (input) => {
  input.classList.add("invalid");
};

const clearError = (input) => {
  input.classList.remove("invalid");
};

const formValidation = (e) => {
  switch (e.target.name) {
    case "firstName":
      inputValidation(expressions.name, e.target, "firstName");
      break;
    case "lastName":
      inputValidation(expressions.name, e.target, "lastName");
      break;
    case "email":
      inputValidation(expressions.email, e.target, "email");
      break;
    case "message":
      textareaValidation(e.target, "message");
      break;
  }
};

const inputValidation = (expression, input, campo) => {
  if (expression.test(input.value.trim())) {
    clearError(input);
    campos[campo] = true;
  } else {
    showError(input);
    campos[campo] = false;
  }
};

const textareaValidation = (textarea, campo) => {
  const text = textarea.value.trim();
  const regex = /^[\wÁÉÍÓÚÜÑáéíóúüñ.,\s]+$/;

  if (!regex.test(text)) {
    showError(textarea);
    campos[campo] = false;
    return;
  }

  const validWords = text
    .split(/\s+/)
    .filter((p) => p.replace(/[.,]/g, "").length >= 2);

  if (validWords.length < 3) {
    showError(textarea);
    campos[campo] = false;
    return;
  }

  clearError(textarea);
  campos[campo] = true;
};

inputs.forEach((input) => {
  input.addEventListener("keyup", formValidation);
  input.addEventListener("blur", formValidation);
});

textArea.addEventListener("keyup", formValidation);
textArea.addEventListener("blur", formValidation);

form.addEventListener("submit", (e) => {
  if (
    campos["firstName"] &&
    campos["lastName"] &&
    campos["email"] &&
    campos["message"]
  ) {
    alert("Enviado!");
    e.preventDefault();
  } else {
    alert("Nope");
    e.preventDefault();
  }
});

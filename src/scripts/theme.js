/* Desenvolva sua lógica aqui ... */

export const darkMode = () => {
    const button = document.querySelector(".header__btn");
    const root = document.querySelector("html");
    const storage = localStorage.getItem("darkmode");
    if (storage === "true") {
      button.classList.toggle("header__btn--dark-mode");
      root.classList.toggle("dark-mode");
    }
    button.addEventListener("click", () => {
      button.classList.toggle("header__btn--dark-mode");
      root.classList.toggle("dark-mode");
      if (root.classList.contains("dark-mode")) {
        localStorage.setItem("darkmode", "true");
      } else {
        localStorage.setItem("darkmode", "false");
      }
    });
  };

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach(el => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('visible')
    }
  });
});

revealElements.forEach(el => observer2.observe(el));

const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch (e) { }
}

// Au chargement : pas de transition, donc pas d'animation parasite
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) { }
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (prefersDark ? "dark" : "light"));

// Au clic : on active la transition le temps du changement
document.querySelectorAll(".darkBtn").forEach((icon) => {
  icon.addEventListener("click", () => {
    root.classList.add("theme-transition");

    const isDark = root.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "light" : "dark");

    setTimeout(() => root.classList.remove("theme-transition"), 400);
  });
});

// //effet halo

// const haloCards = document.querySelectorAll('.halo-card');

// haloCards.forEach(card => {
//   card.addEventListener('mousemove', (e) => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     card.style.setProperty('--mouse-x', `${x}px`);
//     card.style.setProperty('--mouse-y', `${y}px`);
//   });
// });


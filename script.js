
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


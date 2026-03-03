const revealEls = document.querySelectorAll('.reveal');
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.mobile-toggle');

if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${i * 40}ms`;
  io.observe(el);
});

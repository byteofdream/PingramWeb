const form = document.querySelector('#contact-form');
const notice = document.querySelector('#form-notice');

if (form && notice) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    notice.classList.add('show');
    form.reset();
    setTimeout(() => notice.classList.remove('show'), 4000);
  });
}

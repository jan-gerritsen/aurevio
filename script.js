// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navElement = document.querySelector('#nav');
if (navToggleButton && navElement) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navElement.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Footer year
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

// Contact form validation and fake submit
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const statusEl = form.querySelector('.form-status');
    const fields = ['name', 'email', 'message'];
    let isValid = true;
    for (const fieldName of fields) {
      const input = form.querySelector(`#${fieldName}`);
      const error = form.querySelector(`.error[data-for="${fieldName}"]`);
      if (!input || !error) continue;
      let message = '';
      if (!input.value || (input instanceof HTMLInputElement && input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) {
        message = fieldName === 'email' ? 'Enter a valid work email.' : 'This field is required.';
        isValid = false;
      }
      error.textContent = message;
    }

    if (!isValid) {
      if (statusEl) statusEl.textContent = 'Please fix the highlighted fields.';
      return;
    }

    if (statusEl) statusEl.textContent = 'Sending…';
    // Simulate async submit; integrate your backend or service here
    await new Promise((r) => setTimeout(r, 900));
    if (statusEl) statusEl.textContent = 'Thanks! We\'ll be in touch within one business day.';
    form.reset();
  });
}


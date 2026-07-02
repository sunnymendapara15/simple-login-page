const form = document.querySelector('.login-form');
const statusMessage = document.querySelector('.status-message');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value.trim();
  const password = form.password.value;

  if (!email || !password) {
    statusMessage.textContent = 'Please fill in both fields.';
    statusMessage.classList.add('error');
    statusMessage.classList.remove('success');
    return;
  }

  statusMessage.textContent = 'Login simulated — check the console for the captured input.';
  statusMessage.classList.remove('error');
  statusMessage.classList.add('success');

  console.table({ email, password: password ? '••••••••' : '' });
  form.reset();
});

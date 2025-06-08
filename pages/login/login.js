function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  const mockUser = {
    email: 'admin@elasclub.com',
    password: '123456'
  };

  if (!email || !password) {
    errorMessage.textContent = 'Preencha todos os campos.';
    return;
  }

  if (email === mockUser.email && password === mockUser.password) {
    errorMessage.style.color = 'green';
    errorMessage.textContent = 'Login bem-sucedido! Redirecionando...';

    setTimeout(() => {
      window.location.href = 'admin-dashboard.html'; // Página de destino fictícia
    }, 1500);
  } else {
    errorMessage.textContent = 'Credenciais inválidas.';
  }
}

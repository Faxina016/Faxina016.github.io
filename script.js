// Scroll suave ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Botão interativo para copiar o e-mail
const emailBtn = document.getElementById('emailBtn');
if (emailBtn) {
  emailBtn.addEventListener('click', () => {
    const email = "pedro.faxinas@gmail.com"; // Substitua pelo seu e-mail real
    navigator.clipboard.writeText(email);
    alert('E-mail copiado para a área de transferência!');
  });
}
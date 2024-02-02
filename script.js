<script>
  function validateEmail() {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('error-message');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value)) {
      // Email válido
      errorMessage.textContent = '';
    } else {
      // Email inválido
      errorMessage.textContent = 'Formato de email inválido';
    }
  }

  function validateForm() {
    validateEmail(); // Chama a função de validação do e-mail

    // Adicione aqui mais validações ou ações que você deseja realizar antes de enviar o formulário
    
    return false; // Isso impede o envio automático do formulário
  }
</script>
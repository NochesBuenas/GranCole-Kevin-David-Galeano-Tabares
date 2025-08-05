// Inicializa los iconos de Lucide
lucide.createIcons();

// Obtener referencias a los elementos del formulario
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Manejar el envío del formulario
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simple validación y mensaje en consola para esta versión base
    if (username && password) {
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
        // En una aplicación real, aquí se enviaría la información a un servidor
        // y se manejaría la respuesta (éxito/error de autenticación).
        console.log('Intento de inicio de sesión...');
    } else {
        console.log('Por favor, ingresa tu usuario y contraseña.');
    }
});

// Funcionalidad para alternar la visibilidad de la contraseña
togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Cambiar el icono del ojo
    const iconElement = this.querySelector('i');
    if (type === 'password') {
        iconElement.setAttribute('data-lucide', 'eye');
    } else {
        iconElement.setAttribute('data-lucide', 'eye-off');
    }
    lucide.createIcons(); // Vuelve a renderizar los iconos
});

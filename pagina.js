document.addEventListener("DOMContentLoaded", function () {
    const investButtons = document.querySelectorAll(".produto-card button");

    investButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Você está investindo nesse produto!");
        });
    });
});

// Verifique se o usuário está autenticado
const usuarioAutenticado = false; // Altere isso conforme sua lógica de autenticação

if (!usuarioAutenticado) {
    // Redireciona para a página de login
    window.location.href = 'pages/teste.html';
}

if (usuario === "admin" && senha === "12345") {
    localStorage.setItem("logado", "true");
    window.location.href = 'teste.html';
}

if (localStorage.getItem("logado") !== "true") {
    window.location.href = 'login.html';  // Redireciona de volta para o login
}
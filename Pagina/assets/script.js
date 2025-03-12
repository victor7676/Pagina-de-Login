// Entrada de variáveis
const Login = document.querySelector('#EntryLogin');
const Password = document.querySelector('#EntryPass');
const Button = document.querySelector('#Entrybtn');

const Register_Nome = document.querySelector('#RegisterNome');
const Register_Email = document.querySelector('#RegisterEmail');
const Register_Senha = document.querySelector('#RegisterSenha');
const Register_Botao = document.querySelector('#RegisterBtn');
// Entrada de variáveis

// Função para validar o login
function Check() {
    if (!db) {
        console.error("Banco de dados não inicializado.");
        return;
    }
    var transaction = db.transaction(["usuarios"], "readonly");
    var store = transaction.objectStore("usuarios");
    var index = store.index("email");
    var request = index.get(Login.value);
    var index = store.index("email");
    var request = index.get(Login.value);

    request.onsuccess = function(event) {
        var user = event.target.result;
        if (user && user.senha === Password.value) {
            console.log("Login bem-sucedido!");
            alert("Login bem-sucedido!");
            // Redirecionar ou executar ação de login bem-sucedido
        } else {
            console.error("Email ou senha incorretos.");
            alert("Email ou senha incorretos.");
        }
    };

    request.onerror = function(event) {
        console.error("Erro ao buscar o usuário:", event.target.error);
    };
}
    
// Função para validar o login

// Função para registrar usuário
function registrar() {
    if (!db) {
        console.error("Banco de dados não inicializado.");
        return;
    }

    var transaction = db.transaction(["usuarios"], "readwrite");
    var store = transaction.objectStore("usuarios");

    var usuario = {
        nome: Register_Nome.value,
        email: Register_Email.value,
        senha: Register_Senha.value
    };

    var request = store.add(usuario);

    request.onsuccess = function(event) {
        console.log("Usuário adicionado com sucesso!");
    };

    request.onerror = function(event) {
        console.error("Erro ao adicionar o usuário:", event.target.error);
        alert("Esse e-mail já está cadastrado");
    };
}

// Adiciona eventos aos botões após garantir que o banco de dados está inicializado
document.addEventListener('DOMContentLoaded', (event) => {
    if (Button) {
        Button.addEventListener('click', () => {
            Check();
        });
    }

    if (Register_Botao) {
        Register_Botao.addEventListener('click', () => {
            registrar();
            document.getElementById("registerforma").style.display = "none";
            document.getElementById("container").style.display = "block";


        });
    }
});

// Script para alternar entre formulários de login e registro
document.getElementById("registro").addEventListener("click", function() {
    document.getElementById("container").style.display = "none";
    document.getElementById("registerforma").style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", function() {
    document.getElementById("container").style.display = "block";
    document.getElementById("registerforma").style.display = "none";
});
//Entrada de variáveis
const Login = document.querySelector('#EntryLogin');
const Password = document.querySelector('#EntryPass');
const Button = document.querySelector('#Entrybtn');


const Register_Nome = document.querySelector('#RegisterNome');
const Register_Email = document.querySelector('#RegisterEmail');
const Register_Senha = document.querySelector('#RegisterSenha');
const Register_Botao = document.querySelector('#RegisterBtn');
//Entrada de variáveis


//função para validar o login
function Check() {
    if (!db) {
        console.error("Banco de dados não inicializado.");
        return;
    }

    var transaction = db.transaction(["usuarios"], "readonly");
    var store = transaction.objectStore("usuarios");
    var request = store.get(Login.value);
    var request = store.get(Password.value);
}
    









if (Button) {
    Button.addEventListener('click', () => {
        Check();
    });
}
//função para validar o login






//script para o botão de registro
document.getElementById("registro").addEventListener("click", function() {
    document.getElementById("container").style.display = "none";
    document.getElementById("registerforma").style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", function() {
    document.getElementById("container").style.display = "block";
    document.getElementById("registerforma").style.display = "none";
});
//script para o botão de registro







// Função para registrar usuário
let db; // Variável global para armazenar o banco de dados
function registrar() {
    if (!db) {
        console.error("Banco de dados não inicializado.");
        return;
    }

    var transaction = db.transaction(["usuarios"], "readwrite"); // Inicia uma transação
    var store = transaction.objectStore("usuarios"); // Pega a store

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
        alert("Esse e-mail já esta cadastrado");
    };
}

// Adiciona evento ao botão
if (Register_Botao) {
    Register_Botao.addEventListener('click', () => {
        registrar();
    });
}
// Função para registrar usuário
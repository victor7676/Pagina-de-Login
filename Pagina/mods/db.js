const Register_Nome = document.querySelector('#RegisterNome');
const Register_Email = document.querySelector('#RegisterEmail');
const Register_Senha = document.querySelector('#RegisterSenha');
const Register_Botao = document.querySelector('#RegisterBtn');

let db; // Variável global para armazenar o banco de dados

// Abrindo o banco de dados
var request = window.indexedDB.open("DBteste", 3);
// Abrindo o banco de dados

//Mensagem de erro abertura do banco de dados
request.onerror = function(event) {
    console.log("Erro ao abrir o banco de dados");
};

request.onsuccess = function(event) {
    db = request.result; // Armazena o banco de dados na variável global
    console.log("Banco de dados aberto com sucesso");
};
//Mensagem de erro abertura do banco de dados



//Estrutura do banco de dados
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    if (!db.objectStoreNames.contains("usuarios")) {
        var objectStore = db.createObjectStore("usuarios", { keyPath: "id", autoIncrement: true });
        objectStore.createIndex("nome", "nome", { unique: false });
        objectStore.createIndex("email", "email", { unique: true });
        objectStore.createIndex("senha", "senha", { unique: false });
    }
};
//Estrutura do banco de dados



// Função para registrar usuário
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



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







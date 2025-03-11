//Entrada de variáveis
const Login = document.querySelector('#EntryLogin');
const Password = document.querySelector('#EntryPass');
const Button = document.querySelector('#Entrybtn');
//Entrada de variáveis


//função para validar o login
function Check() {
    if (Login.value === 'admin' && Password.value === 'admin') {
        alert('Login bem-sucedido');
    } else {
        alert('Falha no login');
    }
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

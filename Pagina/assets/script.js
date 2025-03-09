//Entrada de variables
const Login = document.querySelector ('#EntryLogin');
const Password = document.querySelector ('#EntryPass');
const Button = document.querySelector ('#Entrybtn');

const Register_Nome = document.querySelector ('#RegisterNome');
const Register_Email = document.querySelector ('#RegisterEmail');
const Register_Senha = document.querySelector ('#RegisterSenha');
//Entrada de variables


//funcion para validar el login
function Check () {
    if (Login.value === 'admin' && Password.value === 'admin') {
        alert ('Login Successful');
    } else {
        alert ('Login Failed');
    }
}
if(Button){
    Button.addEventListener ('click', () => {
        Check ();
    });
}
//funcion para validar el login



//script para el boton de registro
document.getElementById("registro").addEventListener("click", function(){
    document.getElementById("container").style.display = "none";
    document.getElementById("registerforma").style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", function(){
    document.getElementById("container").style.display = "block";
    document.getElementById("registerforma").style.display = "none";
});
//script para el boton de registro


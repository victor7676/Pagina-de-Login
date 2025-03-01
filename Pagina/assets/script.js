const Login = document.querySelector ('#EntryLogin');
const Password = document.querySelector ('#EntryPass');
const Button = document.querySelector ('#Entrybtn');

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
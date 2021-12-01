let eye = document.querySelector('.eye'),
    inputPassword = document.querySelector('#input-password'),
    enabled = false;

function toggle() {
    if(enabled) {
        inputPassword.setAttribute('type', 'password');
        eye.style.color = '#FE8F8F';
        enabled = false;
    }else {
        inputPassword.setAttribute('type', 'text');
        eye.style.color = '#FF5C58';
        enabled = true;
    }
}

eye.addEventListener('click', toggle);
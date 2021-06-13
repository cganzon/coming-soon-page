let btn = document.querySelector('.btn');
let email = document.querySelector('.email');
let errorMessage = document.querySelector('.email-error-message');
let errorIcon = document.querySelector('.error-icon');

btn.addEventListener('click', e => {
    e.preventDefault();
    let emailValue = email.value;
    if(validateEmail(emailValue)) {
        email.classList.remove('email-error');
        errorMessage.classList.remove('show-error');
        errorIcon.classList.remove('show-error');
    } else {
        email.classList.add('email-error');
        errorMessage.classList.add('show-error');
        errorIcon.classList.add('show-error');
    };
});

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('password-confirm');
const emailInput = document.getElementById('email');

const passwordError = document.getElementById('password-error');
const passwordConfirmError = document.getElementById('password-confirm-error');
const emailError = document.getElementById('email-error');

passwordInput.addEventListener('input', function () {
    const passwordValue = passwordInput.value;

    if (passwordValue.length >= 8 || passwordValue.length === 0) {
        passwordError.style.display = 'none';
        passwordInput.setCustomValidity('');
    }
    else {
        passwordError.style.display = 'block';
        passwordInput.setCustomValidity('Invalid password');
    };
});

passwordConfirmInput.addEventListener('input', function () {
    const passwordValue = passwordInput.value;
    const passwordConfirmValue = passwordConfirmInput.value;

    if (passwordValue === passwordConfirmValue || passwordConfirmValue.length === 0) {
        passwordConfirmError.style.display = 'none';
        passwordConfirmInput.setCustomValidity('');
    }
    else {
        passwordConfirmError.style.display = 'block';
        passwordConfirmInput.setCustomValidity('Mismatching Password');
    };
});

emailInput.addEventListener('input', function () {
    const emailValue = emailInput.value;
    const containsAtSign = /\@/.test(emailValue);

    if (containsAtSign || emailValue.length === 0) {
        emailError.style.display = 'none';
        emailInput.setCustomValidity('');
    }
    else {
        emailError.style.display = 'block';
        emailInput.setCustomValidity('Enter a valid email with @');
    };
});

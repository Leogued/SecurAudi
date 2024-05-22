document.addEventListener('DOMContentLoaded', function () {
    const menuButtons = document.querySelectorAll('.menu-button');
    const form = document.querySelector('form');

    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            const menu = this.nextElementSibling;
            const isVisible = menu.style.display === 'block';

            document.querySelectorAll('.sub-menu').forEach(subMenu => {
                subMenu.style.display = 'none';
            });

            if (!isVisible) {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const errorMessages = [];
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const regle = document.querySelectorAll('.regle input[type="checkbox"]:checked');

        if (!validateEmail(email.value)) {
            errorMessages.push('Veuillez entrer une adresse email valide.');
        }

        if (password.value.length < 8) {
            errorMessages.push('Le mot de passe doit contenir au moins 8 caractères.');
        }

        if (password.value !== confirmPassword.value) {
            errorMessages.push('Les mots de passe ne correspondent pas.');
        }

        if (regle.length === 0) {
            errorMessages.push('Veuillez sélectionner au moins une règle.');
        }

        const errorList = document.getElementById('errorList');
        errorList.innerHTML = '';

        if (errorMessages.length > 0) {
            errorMessages.forEach(message => {
                const li = document.createElement('li');
                li.textContent = message;
                errorList.appendChild(li);
            });
        } else {
            form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

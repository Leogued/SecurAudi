const sign_up_btn = document.querySelector ("#sign-up-btn")
const sign_in_btn = document.querySelector ("#sign-in-btn")
const container = document.querySelector(".container")


sign_up_btn.addEventListener("click", () =>{
    container.classList.add("sign-up-mode")
});

sign_in_btn.addEventListener("click", () =>{
    container.classList.remove("sign-up-mode")
});


const signUpForm = document.getElementById("sign-up-form");
const emailInput = document.getElementById('email');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

signUpForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le formulaire de se soumettre par défaut

    // Supprimer les messages d'erreur précédents
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // Valider les champs du formulaire
    if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        return; // Arrête l'exécution de la fonction
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        return; // Arrête l'exécution de la fonction
    }

    // Si toutes les validations sont passées, le formulaire peut être soumis
    signUpForm.submit();
});

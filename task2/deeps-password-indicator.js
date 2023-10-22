document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const passwordStrengthIndicator = document.getElementById("password-strength");

    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        let passwordStrength = "Weak";

        if (password.length >= 8) {
            passwordStrength = "Strong";
        } else if (password.length >= 6) {
            passwordStrength = "Medium";
        }

        passwordStrengthIndicator.textContent = `Password Strength: ${passwordStrength}`;
    });
});
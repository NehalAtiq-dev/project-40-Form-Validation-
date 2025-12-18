    const form = document.getElementById('registrationForm');
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');
        const successBox = document.getElementById('successBox');

        function validateName() {
            const name = nameInput.value.trim();
            const errorElement = document.getElementById('nameError');
            
            if (name === "") {
                errorElement.textContent = "Name is required..";
                nameInput.classList.add('invalid');
                return false;
            } else if (name.length < 3) {
                errorElement.textContent = "Name must be at least 3 characters long.";
                nameInput.classList.add('invalid');
                return false;
            } else {
                errorElement.textContent = "";
                nameInput.classList.remove('invalid');
                return true;
            }
        }

        function validateEmail() {
            const email = emailInput.value.trim();
            const errorElement = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {
                errorElement.textContent = "Email is required..";
                emailInput.classList.add('invalid');
                return false;
            } else if (!emailPattern.test(email)) {
                errorElement.textContent = "Kripya ek sahi email format dalein.";
                emailInput.classList.add('invalid');
                return false;
            } else {
                errorElement.textContent = "";
                emailInput.classList.remove('invalid');
                return true;
            }
        }

        function validatePassword() {
            const password = passwordInput.value;
            const errorElement = document.getElementById('passwordError');

            if (password.length < 8) {
                errorElement.textContent = "Password must be at least 8 characters long.";
                passwordInput.classList.add('invalid');
                return false;
            } else {
                errorElement.textContent = "";
                passwordInput.classList.remove('invalid');
                return true;
            }
        }

        function validateForm(event) {
            event.preventDefault();

            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();

            if (isNameValid && isEmailValid && isPasswordValid) {
                successBox.style.display = 'block';
                console.log("Form Data Submitted:", {
                    name: nameInput.value,
                    email: emailInput.value
                });
                form.reset();
                setTimeout(() => successBox.style.display = 'none', 5000);
            } else {
                successBox.style.display = 'none';
            }
        }

        form.addEventListener('submit', validateForm);

        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        passwordInput.addEventListener('input', validatePassword);

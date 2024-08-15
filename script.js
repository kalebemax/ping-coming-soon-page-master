function verify() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = document.getElementById('txt');

    if (!emailValue) {
        emailInput.classList.add('invalid');
        errorMessage.textContent = "Email address is required.";
    } else if (!emailRegex.test(emailValue)) {
        emailInput.classList.add('invalid');
        errorMessage.textContent = "Please provide a valid email address.";
    } else if (emailValue) {
        emailInput.classList.remove('invalid');
        errorMessage.textContent = ''
    } 
        
} 


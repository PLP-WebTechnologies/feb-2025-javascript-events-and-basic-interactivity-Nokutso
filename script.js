//BUTTON EFFECT
const magic_button = document.getElementById('magicBtn');

magic_button.addEventListener('click', () => {
    alert("✨ You clicked the magic button! ✨");
});
  
//HOVER EFFECT
const hoverBox = document.getElementById('hoverBox');

hoverBox.addEventListener('mouseover', () => hoverBox.style.backgroundColor = 'darksalmon');
hoverBox.addEventListener('mouseout', () => hoverBox.style.backgroundColor = 'lightblue');

//KEYPRESS DETECTION
const keyInput = document.getElementById('keyInput');
const keyDisplay = document.getElementById('keyDisplay');

keyInput.addEventListener('keyup', (e) => {
    keyDisplay.textContent = `You pressed: ${e.key}`;
    keyDisplay.style.color = 'antiquewhite';
});

//DOUBLE-CLICK SECRET
const secret_button = document.getElementById('secretBtn');
const secret_message = document.getElementById('secretMsg');

secret_button.addEventListener('dblclick', () => {
    secret_message.style.display = 'block';
});

//TABS FUNCTION
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}

//FORM VALIDATION
document.getElementById('myForm').addEventListener('submit', function(e) {

e.preventDefault();

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const message = document.getElementById('formMessage');

const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const passwordValid = password.length >= 8;

if (!emailValid) {
    message.textContent = "Invalid email format.";
    message.style.color = "red";
} else if (!passwordValid) {
    message.textContent = "Password must be at least 8 characters.";
    message.style.color = "red";
} else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
}
});

// Bonus: Real-time password feedback
document.getElementById('password').addEventListener('input', function() {
const feedback = document.getElementById('formMessage');
if (this.value.length < 8) {
    feedback.textContent = "Password too short.";
    feedback.style.color = "orange";
} else {
    feedback.textContent = "Looking good!";
    feedback.style.color = "green";
}
});
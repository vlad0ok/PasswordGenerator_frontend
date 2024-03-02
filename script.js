const slider = document.getElementById("mySlider");
const output = document.getElementById("sliderValue");
const resultInput = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");

output.innerHTML = slider.value; 

slider.oninput = function() {
    output.innerHTML = this.value; 
}

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

generateBtn.addEventListener("click", function() {
    const passwordLength = parseInt(slider.value);
    const generatedPassword = generatePassword(passwordLength);
    resultInput.value = generatedPassword;
});

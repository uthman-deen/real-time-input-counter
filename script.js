const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");
const maxLength = 100;

textInput.addEventListener("input", () => {
    if (textInput.value.length > maxLength) {
        textInput.value = textInput.value.trim().slice(0, maxLength);
    }

    const length = textInput.value. length;

    charCount.textContent = `Character Count: ${length}/${maxLength}`;

    if (length === maxLength) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "green";
    }
});
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

function resetValues(inp) {
  inp.style.color = "#666";
  inp.style.fontSize = "16px";
}

document
  .querySelector(".app-form-button:first-of-type")
  .addEventListener("click", function (event) {
    nameInput.value = "NAME";
    resetValues(nameInput);
    emailInput.value = "EMAIL";
    resetValues(emailInput);
    messageInput.value = "MESSAGE";
    resetValues(messageInput);
  });



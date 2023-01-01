const contactForm = document.querySelector(".app-form");
const formGroups = document.querySelectorAll(".app-form .app-form-group");
const serviceId = "service_umv4p9x";
const templateId = "template_dshiv9t";
const formControls = document.querySelectorAll(".app-form-control");
const messageElements = document.getElementById("message");

function resetValues() {
  for (const group of formGroups) {
    const inp = group.querySelector(".app-form-control");
    inp.style.color = "#666";
    inp.style.fontSize = "16px";
    inp.value = "";
  }
}

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: messageElements.value,
  };
  emailjs.send(serviceId, templateId, params).then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    messageElements.value = "";
    alert("Message Sent Successfully");
  });
}

document
  .querySelector(".app-form-button:first-of-type")
  .addEventListener("click", function (event) {
    resetValues();
  });

document
  .querySelector(".app-form-button:last-of-type")
  .addEventListener("click", function (event) {
    sendMail();
    resetValues();
  });

for (const control of formControls) {
  control.addEventListener("click", () => {
    control.style.color = "#ddd";
    control.style.fontSize = "14px";
  });
}

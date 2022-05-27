const sectionButton = document.querySelector("#section-button");
const alertCloseButton = document.querySelector("#alert-closeButton");
const alertResetButton = document.querySelector("#alert-resetButton");
const alertMessageCounter = document.querySelector("#alert-messageCounter");
const alert = document.querySelector(".alert");
const alertShadow = document.querySelector(".alert__shadow");

sectionButton.addEventListener("click", () => {
  toggleAlert();
});
alertShadow.addEventListener("click", () => {
  toggleAlert();
});
alertCloseButton.addEventListener("click", () => {
  toggleAlert();
});
alertResetButton.addEventListener("click", () => {
  resetCounter();
});

//Set initial state of alert
let showAlert = false;
let showReset = false;
let alertClickCounter = 0;
alertClickCounter = sessionStorage.getItem("alertClickCounter");

function toggleAlert() {
  if (!showAlert) {
    alert.classList.add("show");
    alertShadow.classList.add("show");
    alertClickCounter++;
    alertMessageCounter.textContent = `${alertClickCounter} times`;
    sessionStorage.setItem("alertClickCounter", alertClickCounter);
    showAlert = true;

    if (alertClickCounter >= 5) {
      alertResetButton.classList.add("show");
    } else {
      alertResetButton.classList.remove("show");
    }
  } else {
    alert.classList.remove("show");
    alertShadow.classList.remove("show");
    alertResetButton.classList.remove("show");
    showAlert = false;
  }
}

function resetCounter() {
  alertClickCounter = 0;
  sessionStorage.setItem("alertClickCounter", alertClickCounter);
  toggleAlert();
}

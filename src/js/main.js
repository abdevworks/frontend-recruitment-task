const sectionTemp = document.querySelector(".sectionTemplate");
const wrapper = document.querySelector(".wrapper");
const sectionButton = document.querySelector("#section-button");
const alertCloseButton = document.querySelector("#alert-closeButton");
const alertResetButton = document.querySelector("#alert-resetButton");
const alertMessageCounter = document.querySelector("#alert-messageCounter");
const alert = document.querySelector(".alert");
const alertShadow = document.querySelector(".alert__shadow");

function addMoreSections(section, sectionId) {
  const sectionButton = section.querySelector("#section-button");
  const alertCloseButton = section.querySelector("#alert-closeButton");
  const alertResetButton = section.querySelector("#alert-resetButton");
  const alertMessageCounter = section.querySelector("#alert-messageCounter");
  const alert = section.querySelector(".alert");
  const alertShadow = section.querySelector(".alert__shadow");

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

  // Set initial state of alert
  let showAlert = false;
  let showReset = false;
  let alertClickCounter = 0;
  alertClickCounter = sessionStorage.getItem(`${sectionId}+alertClickCounter`);

  function toggleAlert() {
    if (!showAlert) {
      alert.classList.add("show");
      alertShadow.classList.add("show");
      alertClickCounter++;
      alertMessageCounter.textContent = `${alertClickCounter} times`;
      sessionStorage.setItem(`${sectionId}+alertClickCounter`, alertClickCounter);
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
    sessionStorage.setItem(`${sectionId}+alertClickCounter`, alertClickCounter);
    toggleAlert();
  }
  wrapper.appendChild(section);
}

const section = sectionTemp.content.cloneNode(true);
addMoreSections(section,"sectionOne");
// const sectionTwo = sectionTemp.content.cloneNode(true);
// addMoreSections(sectionTwo, "sectionTwo");

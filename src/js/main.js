import SECTIONS from "./SectionData.js";

const sectionTemp = document.querySelector(".sectionTemplate");
const wrapper = document.querySelector(".wrapper");


function addMoreSections(section, sectionData) {
  const sectionImage = section.querySelector(".section__left");
  const sectionTitle = section.querySelector(".section__title");
  const sectionDescription = section.querySelector(".section__description");
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

  sectionImage.srcset = sectionData.image.srcset;
  sectionImage.src = sectionData.image.src;
  sectionImage.alt = sectionData.image.alt;
  sectionTitle.textContent = sectionData.title
  sectionDescription.textContent = sectionData.description;

  // Set initial state of alert
  let showAlert = false;
  let showReset = false;
  let alertClickCounter = 0;
  alertClickCounter = sessionStorage.getItem(`alertClickCounter${sectionData.id}`);

  function toggleAlert() {
    if (!showAlert) {
      alert.classList.add("show");
      alertShadow.classList.add("show");
      alertClickCounter++;
      alertMessageCounter.textContent = `${alertClickCounter} times`;
      sessionStorage.setItem(
        `alertClickCounter${sectionData.id}`,
        alertClickCounter
      );
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
    sessionStorage.setItem(`alertClickCounter${sectionData.id}`, alertClickCounter);
    toggleAlert();
  }

  wrapper.appendChild(section);
}

SECTIONS.forEach(sectionData => {
  const section = sectionTemp.content.cloneNode(true);
  addMoreSections(section, sectionData);
})
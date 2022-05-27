const sectionButton = document.querySelector("#section-button");
const alertCloseButton = document.querySelector("#alert-closeButton");
const alert = document.querySelector(".alert");
const alertShadow = document.querySelector(".alert__shadow");

sectionButton.addEventListener("click", () => {
    toggleAlert();
});
alertShadow.addEventListener("click", () => {
    toggleAlert();
})
alertCloseButton.addEventListener("click", () => {
    toggleAlert();
})

//Set initial state of alert
let showAlert = false;

function toggleAlert(){
    if(!showAlert) {
        alert.classList.add('show');
        alertShadow.classList.add('show');
        showAlert = true;
    }else{
        alert.classList.remove('show');
        alertShadow.classList.remove('show');
        showAlert = false;
    }
} 
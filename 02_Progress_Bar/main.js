const steps = document.querySelectorAll(".step");
const colorBar = document.querySelector(".color-bar");
const prevBtn = document.querySelector(".js-prev-button");
const nextBtn = document.querySelector(".js-next-button");

let currentStep = 0;

prevBtn.addEventListener("click", (e) => {
  if (currentStep === 1) {
    e.target.setAttribute("disabled", true);
  }
  currentStep--;
  updateDOM(currentStep);
});

nextBtn.addEventListener("click", (e) => {
  if (currentStep >= 3) return;
  prevBtn.removeAttribute("disabled");
  currentStep++;
  updateDOM(currentStep);
});

function updateDOM(currentStep) {
  console.log("currentStep", currentStep);
  removeColorBorderClasses();
  applyColorBorderClasses(currentStep);
  replaceStepClass(currentStep);
}

//helper functions
function removeColorBorderClasses() {
  steps.forEach((step, index) => {
    if (index === 0) return; //do not remove first class
    step.classList.remove("color-border");
  });
}

function applyColorBorderClasses(currentStep) {
  steps.forEach((step, index) => {
    if (index <= currentStep) step.classList.add("color-border");
  });
}

function replaceStepClass(currentStep) {
  colorBar.className = "bar color-bar";
  colorBar.classList.add(`step-${currentStep + 1}`);
}

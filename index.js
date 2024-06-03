const originalForm = document.querySelector("#input-el").innerHTML;

function popUp(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#text-input");
  if (!inputElement.value.trim()) {
    alert("Please fill in all the fields");
  } else {
    let inputElContainer = document.querySelector("#input-el");
    inputElContainer.innerHTML = "You've Checked in Successfully!!";
    let buttonElement = document.querySelector("#submit");
    buttonElement.textContent = "Done";
    buttonElement.removeEventListener("click", popUp);
    buttonElement.addEventListener("click", restoreForm);
  }
}
function restoreForm(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#input-el");
  inputElement.innerHTML = originalForm;
  let buttonElement = document.querySelector("#submit");
  buttonElement.textContent = "Submit";
  buttonElement.removeEventListener("click", restoreForm); // Remove the restoreForm event listener
  buttonElement.addEventListener("click", popUp); // Add the popUp event listener
}

let buttonElement = document.querySelector("#submit");
buttonElement.addEventListener("click", popUp);

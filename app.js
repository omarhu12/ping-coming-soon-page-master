const form = document.querySelector("form");

const email = document.getElementById("email");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmail();
});

email.addEventListener("input", function () {
  removeError();
});

function removeError() {
  const emailValue = email.value;
  if (emailValue !== "") {
    setSuccessFor(email);
  }
}

function checkEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    setErrorFor(email);
  } else if (emailValue !== "") {
    setSuccessFor(email);
  }
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  let formRemove = input.parentElement;
  formRemove.className = "form-control";
}

document.addEventListener('DOMContentLoaded', function() {

// When the user presses the .signin button, display the modal window
  var signinButton = document.querySelector(".signin");
  var modalWindow = document.querySelector(".modal");

    signinButton.addEventListener('click', function () {
      modalWindow.style.display = "block";
    });

// When the user presses the .close button, hide the modal window
  var closeButton = document.querySelector(".close");

  closeButton.addEventListener('click', function() {
    modalWindow.style.display = "none";
  });
// When the user presses the .submit button, add an .error class to both input elements
  var submitButton = document.querySelector(".submit");
  var textUserField = document.querySelector("#user");
  var textPasswordField = document.querySelector("#pass");

  submitButton.addEventListener('click', function () {
    textUserField.className = "error";
    textPasswordField.className = "error";
  });

// When the user puts their cursor in one of the input fields, remove the .error class
  textUserField.addEventListener('click', function () {
    this.className = " ";
  });

  textPasswordField.addEventListener('click', function () {
    this.className = " ";
  });

// (Bonus) Allow the user to click the .modal to close itself
  // var getStarted = document.querySelector(".modal");
  // getStarted.addEventListener("click", function () {
  //     modalWindow.style.display = "none";
  // });
});

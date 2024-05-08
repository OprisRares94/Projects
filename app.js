window.onload = () => {
  checkInputs();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (
      !fullName.classList.contains("error") &&
      !emailAdress.classList.contains("error") &&
      !phoneNumber.classList.contains("error") &&
      !subject.classList.contains("error")
    ) {
      console.log("OK");
      sendEmail();

      form.reset();
    } else {
      console.log("NOk");
    }
  });
};

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const emailAdress = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const subject = document.getElementById("subject");

sendEmail = () => {
  const bodyMessage = `Full Name: ${fullName.value}<br> 
    EmailAdress: ${emailAdress.value}<br>
    Phone Number: ${phoneNumber.value}<br>
    Subject: ${subject.value}`;
  Email.send({
    SecureToken: "",
    Host: "smtp.elasticemail.com",
    Username: "rares_opris@yahoo.com",
    Password: "39959276BB93650DF72773071E2E6B5501D3",
    To: "rares_opris@yahoo.com",
    From: "rares_opris@yahoo.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Email Sent!",
        icon: "success",
      });
    }
    console.log(message);
  });
};

checkEmail = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!emailAdress.value.match(emailRegex)) {
    emailAdress.classList.add("error");
    emailAdress.parentElement.classList.add("error");

    if (emailAdress.value != "") {
      errorTxtEmail.innerText = "Enter a valid email Adress";
    } else {
      errorTxtEmail.innerText = "Email Adress can't be blank";
    }
  } else {
    emailAdress.classList.remove("error");
    emailAdress.parentElement.classList.remove("error");
  }
};

checkPhone = () => {
  constphoneRegex = /^\D\d{2,4}\s\d{2,6}\s\d{2,6}\s\d{2,6}/;
  const errorPhone = document.querySelector(".error-txt.phone-numb");

  if (!phoneNumber.value.match(errorPhone)) {
    phoneNumber.classList.add("error");
    phoneNumber.parentElement.classList.add("error");

    if (phoneNumber.value != "") {
      errorPhone.innerText = "Example Phone Number: +40xx xxx xxx";
    } else {
      errorPhone.innerText = "Phone Number can not be blank";
    }
  } else {
    phoneNumber.classList.remove("error");
    phoneNumber.parentElement.classList.remove("error");
  }
};

checkInputs = () => {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
      checkPhone();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
      checkPhone();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
};

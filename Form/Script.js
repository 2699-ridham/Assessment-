const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const dateOfBirth = document.getElementById("dob");
const maleCheckbox = document.getElementById("maleCheckbox");
const femaleCheckbox = document.getElementById("femaleCheckbox");
const profession = document.getElementById("profession");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const form = document.getElementById("form");
const formDetails = document.getElementById("form-details");
const select = document.getElementById("countries");
var valid;


form.addEventListener('submit', (e) => {
    valid = true;
    e.preventDefault();
    validateInputs();
    if(valid){
        popUpFormDetails();  
    }
})

//error in input of form
const setError = (ele, msg) => {
    const inputControl = ele.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerHTML = msg;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

//success after validation completes
const setSuccess = (ele) => {
    const inputControl = ele.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

//after submit reset the form
const resetForm = () => {
    const ele = form;
    const inputControl = ele.querySelectorAll(".input-control");

    inputControl.forEach((item) => {
        const errorDisplay = item.querySelector('.error');
        errorDisplay.innerHTML = '';
        item.classList.remove('error');
        item.classList.remove('success');
    })
    firstName.value = "";
    lastName.value = "";
    dateOfBirth.value = "";
    profession.value = "";
    email.value = "";
    mobile.value = "";
    select.selectedIndex = 0;
    if (maleCheckbox.checked) maleCheckbox.checked = false;
    else femaleCheckbox.checked = false;
}

//inputs of form display through pop-up;
const popUpFormDetails = () => {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const dob = document.getElementById("dateofbirth");
    const pro = document.getElementById("pro");
    const em = document.getElementById("em");
    const mob = document.getElementById("mob");
    const gender = document.getElementById("gender");
    const country = document.getElementById("country");

    fname.innerHTML = "First Name: " + firstName.value;
    lname.innerHTML = "Last Name: " + lastName.value;
    dob.innerHTML = "Date of Birth: " + dateOfBirth.value;
    pro.innerHTML = "Profession: " + profession.value;
    em.innerHTML = "Email: " + email.value;
    mob.innerHTML = "Mobile: " + mobile.value;
    if(select.options[select.selectedIndex].text !== "Choose Your Country"){
        country.innerHTML = "Country: " + select.options[select.selectedIndex].text;
    }
    if (maleCheckbox.checked) {
        gender.innerHTML = "Gender: " + maleCheckbox.value;
    } else {
        if (femaleCheckbox.checked) {
            gender.innerHTML = "Gender: " + femaleCheckbox.value;
        }
    }

    formDetails.classList.add("open-popup");
    form.classList.add("blur");
}

//pop-up closing and reset the form
function closePopUp() {
    formDetails.classList.remove("open-popup");
    form.classList.remove("blur");
    resetForm();
}

//email validation
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//form inputs validation
const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const professionValue = profession.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const maleCheckboxValue = maleCheckbox.checked;
    const femaleCheckboxValue = femaleCheckbox.checked;
    const dateOfBirthValue = dateOfBirth.value;


    //firstName
    if (firstNameValue === '') {
        setError(firstName, "First Name can't be empty");
        valid = false;
    } else if (firstNameValue.length < 5) {
        setError(firstName, "First Name should be atleast of 5 characters");
        valid = false;
    } else {
        setSuccess(firstName);
    }

    //lastName
    if (lastNameValue === '') {
        setError(lastName, "Last Name can't be empty");
        valid = false;
    } else {
        setSuccess(lastName);
    }

    //gender
    if (maleCheckboxValue == false && femaleCheckboxValue == false) {
        setError(maleCheckbox, "Please specify your gender");
        valid = false;
    } else {
        setSuccess(maleCheckbox);
    }

    //profession
    if (professionValue === '') {
        setError(profession, "Kindly enter the profession");
        valid = false;
    } else {
        setSuccess(profession);
    }

    //email
    if (emailValue === '') {
        setError(email, "Email can not be empty");
        valid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide the valid email");
        valid = false;
    } else {
        setSuccess(email);
    }

    //mobile
    if (mobileValue === '') {
        setError(mobile, "Please provide the Mobile");
        valid = false;
    } else {
        setSuccess(mobile);
    }

    //date of birth
    if (dateOfBirthValue === '') {
        setError(dateOfBirth, "Please enter the DOB");
        valid = false;
    } else {
        setSuccess(dateOfBirth);
    }

    //country
    if (select.options[select.selectedIndex].text == "Choose Your Country") {
        setError(select, "Please mention your country");
        valid = false;
    }
}
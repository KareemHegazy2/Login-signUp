const togglePassBtn = document.getElementById("togglePassBtn");

togglePassBtn.addEventListener("click", () => {
    // التحقق من نوع الحقل الحالي
    const isPassword = pass.getAttribute("type") === "password";

    if (isPassword) {
        pass.setAttribute("type", "text");
        togglePassBtn.classList.add("active"); // إظهار علامات الساعة وتوهجها
    } else {
        pass.setAttribute("type", "password");
        togglePassBtn.classList.remove("active"); // إخفاء علامات الساعة
    }
});



// Validate Functions

function validate_name(name) {
    name = name.trim();
    let name_pattern = /^[a-zA-Z\s]{3,15}$/;
    return name_pattern.test(name);
}
function validate_email(email) {
    email = email.trim();
    let email_pattern = /^\w+@[a-zA-Z]+\.(com|edu|org)$/;
    return email_pattern.test(email);
}
function validate_number(number) {
    number = number.trim();
    let number_pattern = /^\+2(010|011|012|015)\d{8}$/;
    return number_pattern.test(number);
}
function validate_pass(password) {
    password = password.trim();
    let password_pattern = /^[a-zA-Z]+@\d+$/;
    return password_pattern.test(password);
}



// catch elements & Event Listener

form = document.forms[0];
former = document.getElementById("form-error");
formValue = false;


Name = document.getElementById("name");
Nameer = document.getElementById("name-error");
NameValue = false

email = document.getElementById("email");
emailer = document.getElementById("email-error");
emailValue = false;

number = document.getElementById("number");
numberer = document.getElementById("number-error");
numberValue = false;

pass = document.getElementById("pass");
passer = document.getElementById("pass-error");
passValue = false;


Name.addEventListener("input", (e) => {
    if (validate_name(Name.value)) {
        Name.style.border = "4px solid green";
        Nameer.style.display = "none";
        NameValue = true;
    }
    else {
        Nameer.style.display = "block";
        Name.style.border = "4px solid red";
        NameValue = false;
    }
})
email.addEventListener("input", (e) => {
    if (validate_email(email.value)) {
        email.style.border = "4px solid green";
        emailer.style.display = "none";
        emailValue = true;
    }
    else {
        emailer.style.display = "block";
        email.style.border = "4px solid red";
        emailValue = false;
    }
})
number.addEventListener("input", (e) => {
    if (validate_number(number.value)) {
        number.style.border = "4px solid green";
        numberer.style.display = "none";
        numberValue = true;
    }
    else {
        numberer.style.display = "block";
        number.style.border = "4px solid red";
        numberValue = false;
    }
})
pass.addEventListener("input", (e) => {
    if (validate_pass(pass.value)) {
        pass.style.border = "4px solid green";
        passer.style.display = "none";
        passValue = true;
    }
    else {
        passer.style.display = "block";
        pass.style.border = "4px solid red";
        passValue = false;
    }
})

form.addEventListener("submit" , (e)=>{
    if(NameValue & emailValue & numberValue & passValue){
        e.preventDefault();
        former.style.display = "none";
// بنخزن البيانات عشان نعرف نتحكم فيها
            const data = {
                name: Name.value,
                email: email.value,
                number:number.value,
                password:pass.value
            }
            // حولنا البيانات لـ أسترينج عشان نقدر نبعتها
            const jsondata = JSON.stringify(data);
            // بنبعت البيانات
            const xhr = new XMLHttpRequest();


            xhr.open("POST", "https://6ab193d69751d2b03e6d5aaa.mockapi.io/project/users");

            // بنعدل نوع البيانات عشان مش بيقبل من فورم
            xhr.setRequestHeader("content-type", "application/json");


            xhr.send(jsondata);

            xhr.addEventListener("readystatechange", (e) => {
                if (xhr.readyState == 4) {
                     document.location.assign("../Login/login.html");
                    

                }
            })
        
        
    }
    else{
        e.preventDefault();
        former.style.display = "inline-block";
    }
})













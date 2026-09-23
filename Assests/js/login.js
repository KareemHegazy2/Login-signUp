const passInput = document.getElementById("login-pass");
const togglePassBtn = document.getElementById("togglePassBtn");

// تفعيل إظهار وإخفاء الباسورد مع أيقونة الساعة
togglePassBtn.addEventListener("click", () => {
    const isPassword = passInput.getAttribute("type") === "password";

    if (isPassword) {
        passInput.setAttribute("type", "text");
        togglePassBtn.classList.add("active");
    } else {
        passInput.setAttribute("type", "password");
        togglePassBtn.classList.remove("active");
    }
});

const email = document.querySelector("#login-email");

const pass = document.querySelector("#login-pass");

const form = document.forms[0];
const former = document.querySelector("#form-error")

const rememberMe = document.querySelector("#rememberMe");

let data = []; // استخدام let للسماح بإعادة التعيين

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://6ab193d69751d2b03e6d5aaa.mockapi.io/project/users');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        data = JSON.parse(xhr.responseText); // إسناد مباشر للمتغير الخارجي
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // البحث عن مستخدم يطابق الإيميل وكلمة المرور
    const userFound = data.find(user => user.email === email.value && user.password === pass.value);

    if (userFound) {
        const id = userFound.id;
        document.location.assign(`index.html?id=${id}`);
        if (rememberMe.checked) {
            
            const name = userFound.name;
            const avatar = userFound.avatar;

            localStorage.setItem("name", name)
            localStorage.setItem("id", id);
            localStorage.setItem("email", email.value);
            localStorage.setItem("avatar", avatar);
        }

    } else {
        former.style.display = "inline-block";
    }
});

// const msg = document.getElementById("disp-msg")
// const loginbtn = document.getElementById("loginBtn")

// loginbtn.addEventListener("click", loginSuccess);

// function loginSuccess() {
//     msg.innerHTML = "Login Successful!!"
// }



let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

let textbox = document.getElementById("textbox")

let msgBox = document.getElementById("msgBox")

textbox.addEventListener("input", changeText)

function changeText() {
    msgBox.innerHTML = textbox.value.toUpperCase()
}

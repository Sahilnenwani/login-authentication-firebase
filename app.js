const loginbtn=document.getElementById('login');
const registerbtn=document.getElementById('register');
const btnexchange=document.getElementById("btn")

const loginemail=document.getElementById("login-email")
const loginpass=document.getElementById("login-password")
const regemail=document.getElementById("register-email")
const regpass=document.getElementById("register-password")
const regname=document.getElementById("register-Name")
const regContact=document.getElementById("register-number")





let register=()=>{
    btnexchange.style.left="110px";
    loginbtn.classList.add('hide');
    registerbtn.classList.remove('hide')
}
let login=()=>{
    btnexchange.style.left="0";
    loginbtn.classList.remove('hide');
    registerbtn.classList.add('hide')

    firebase.auth().createUserWithEmailAndPassword(loginemail.value, loginpass.value)
  .then((result) => { 
    console.log("succesfuly logined")
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    
  });
}

console.log(firebase.auth)
console.log(firebase.database)
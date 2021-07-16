const loginbtn=document.getElementById('login');
const registerbtn=document.getElementById('register');
const btnexchange=document.getElementById("btn")

const loginemail=document.getElementById("login-email")
const loginpass=document.getElementById("login-password")
const regemail=document.getElementById("register-email")
const regpass=document.getElementById("register-password")
const regname=document.getElementById("register-Name")
const regContact=document.getElementById("register-number")

const regDatabtn=document.getElementById("registerbtn")
const loginuserbtn=document.getElementById("loginbtn")


regDatabtn.addEventListener('click',()=>{
  event.preventDefault();
  let key = firebase.database().ref().push().key;
  var firebasedataofreg={
      name:regname.value,
      email:regemail.value,
      Contact:regContact.value,
      key:key
  }
 
  firebase.database().ref("User-Account/"+key).set(firebasedataofreg);
  // firebase.database.ref()

  firebase.auth().createUserWithEmailAndPassword(regemail.value, regpass.value)
  .then((result) => { 
    // console.log("succesfuly registerd")
    // console.log(result)
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // console.log(errorMessage)
    
  });
  regname.value="";
  regemail.value="";
  regContact.value="";
  regpass.value="";
})

loginuserbtn.addEventListener('click',()=>{
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(loginemail.value, loginpass.value)
  .then((result) => {
    
   setTimeout(() => {
    var newpath=  "https://sahilnenwani.github.io/Mode-changer/"
    return window.location.replace(newpath); 
   }, 2000);
    
    // const Toast = Swal.mixin({
    //   toast: true,
    //   position: 'top-end',
    //   showConfirmButton: false,
    //   timer: 3000,
    //   timerProgressBar: true,
    //   didOpen: (toast) => {
    //     toast.addEventListener('mouseenter', Swal.stopTimer)
    //     toast.addEventListener('mouseleave', Swal.resumeTimer)
    //   }
    // })
    
    // Toast.fire({
    //   icon: 'success',
    //   title: 'Signed in successfully'
    // })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  loginemail.value=""
  loginpass.value=""

})
      

let register=()=>{
    btnexchange.style.left="110px";
    loginbtn.classList.add('hide');
    registerbtn.classList.remove('hide')
}
let login=()=>{
    btnexchange.style.left="0";
    loginbtn.classList.remove('hide');
    registerbtn.classList.add('hide')

    
}
  
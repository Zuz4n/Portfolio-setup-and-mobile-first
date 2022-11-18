var fullname = document.getElementById('name');
var email = document.getElementById('email');
var text = document.getElementById('textarea');
var form2 = document.getElementById('signup');

const formData = {
userName: '',
userEmail: '',
text: '',
}

function populateStorage() {
  formData.userName=form2.userName.value;
  formData.userEmail=form2.userEmail.value;
  formData.text=form2.text.value;
  localStorage.setItem('formData', JSON.stringify(formData));
  
  setStyles();
}

console.log(localStorage);

function setStyles() {
  if (localStorage.getItem("formData")===null){
    formData.userName='';
    formData.userEmail='';
    formData.text='';

  }else{
    let data=JSON.parse(localStorage.getItem("formData"));
    formData.userName=data.userName;
    formData.userEmail=data.userEmail;
    formData.text=data.text;
    form2.userName.value = formData.userName;
    form2.userEmail.value = formData.userEmail;
    form2.text.value = formData.text;
  }
  }
 
  setStyles();

fullname.onchange = populateStorage;
email.onchange = populateStorage;
text.onchange = populateStorage;

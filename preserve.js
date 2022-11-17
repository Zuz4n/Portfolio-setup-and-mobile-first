var fullname = document.getElementById('name');
var email = document.getElementById('email');
var text = document.getElementById('textarea');

if(!Storage.length) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('textarea', document.getElementById('textarea').value);

  
  setStyles();
}
function setStyles() {
  var currentname = localStorage.getItem('name');
  var currentmail = localStorage.getItem('email');
  var currentext = localStorage.getItem('textarea');

  document.getElementById ('name').value = currentname;
  document.getElementById('email').value = currentmail;
  document.getElementById('textarea').value = currentext;

}

fullname.onchange = populateStorage;
email.onchange = populateStorage;
text.onchange = populateStorage;
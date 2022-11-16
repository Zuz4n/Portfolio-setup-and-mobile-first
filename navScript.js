function myFunction() {
    document.getElementById("hideHamburguer").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.hamburguer')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // function validarEmail(){

  //   var txtmail = document.getElementsByName("email");
  //   var regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/ 

  //   if (!regex.test(txtmail)) {
  //       document.getElementById("mssg").innerHTML = "Format is not valid";
  //   } else {
  //     document.getElementById("mssg").innerHTML = "";
  //   }
  
  // }

  const form = document.querySelector("#signup");
  const EMAIL_INVALID = "Please enter a correct email address format";

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    let emailValid = validateEmail(form.elements["email"], EMAIL_INVALID);
  
    if (emailValid) {
      form.submit();
    }
  });

  function validateEmail(input, invalidMsg) {
   
    // validate email format
    const emailRegex =/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;
    const email = input.value.trim();
    if (!emailRegex.test(email)) {
      return showError(input, invalidMsg);
    }
    return true;
  }
  function showError(input, message) {
    return showMessage(input, message, false);
  }
  

function showMessage(input, message, type) {
	// get the <small> element and set the message
	const msg =document.getElementById("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
} 
 
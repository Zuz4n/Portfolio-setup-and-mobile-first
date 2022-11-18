
    document.getElementById("hideHamburguer").classList.toggle("show");
  
  
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

    const emailRegex =/^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;
    const email = input.value.trim();
    if (emailRegex.test(email)) {
      return showError(input, invalidMsg);
    }
    return true;
  }
  function showError(input, message) {
    return showMessage(input, message, false);
  }
  
function showMessage(input, message, type) {

	const msg =document.getElementById("small");
	msg.innerText = message;

	input.className = type ? "success" : "error";
	return type;
} 
 

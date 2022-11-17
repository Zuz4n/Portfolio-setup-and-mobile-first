
function preserve() {

document.getElementsByClassName ("b4")

const preservedata = 
    {
      name: "#name",
      email: "#email",
      text: "#textarea"
    }
  
const storedata = JSON.stringify(preservedata)
localStorage.setItem(preservedata,storedata)

}
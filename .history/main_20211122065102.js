let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
function eventFunctionSubmit(e) {
  e.preventDefault();
  console.log("it works?");
}
const person = {
  name: "sujan dari",
  age: 25,
};

window.localStorage.setItem("user", JSON.stringify(person));

//// @ts-check

let button = document.querySelector(".formSec");
button.addEventListener("submit", eventFunctionSubmit);
let sitename = document.getElementById("sitenameid");
let url = document.getElementById("urlid");
// console.log(input.value);
// const person = {
//   name: "sujan dari",
//   age: 25,
// };
let hello = localStorage.getItem("data");
let retrivedData = JSON.parse(hello);
console.log("retrieved", retrivedData);

let arrayForData = [];
// arrayForData.push(newObj);
if (hello != null) {
  retrivedData.forEach((element) => {
    arrayForData.push(element);
  });
} else {
  arrayForData = [];
}

console.log("arrayfordata", arrayForData);
// if(hello  !=  null){
//   arrayForData.push
// }else{}
// if(localStorage.getItem)
function eventFunctionSubmit(e) {
  e.preventDefault();
  // localStorage.setItem("user", JSON.stringify(person));
  // localStorage.setItem("arr", JSON.stringify(arrayForData));
  console.log("it works?");
  let site = { sitenamekey: sitename.value, urlkey: url.value };
  arrayForData.push(site);
  // console.log(sitename.value);
  // console.log(url.value);
  // console.log(arrayForData);
  localStorage.setItem("data", JSON.stringify(arrayForData));
}
// let hello = localStorage.getItem("data");

console.log("hello", JSON.parse(hello));

// const list = document.createElement("li");
// const textNode = document.createTextNode(arrayForData[4].sitenamekey);
// const textNode1 = document.createTextNode(arrayForData[3].sitenamekey);

// list.appendChild(textNode);

// const ulist = document.querySelector(".ulclass");
// ulist.appendChild(list);

let div = document.createElement("div");
let p = document.createElement("p");
div.appendChild("some text", p);

console.log(div.childNodes);

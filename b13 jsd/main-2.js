var demoId = document.querySelector("#demo")
console.log(demoId);

console.log(document.querySelector("demo"));

var demoClass = document.querySelectorAll(".demo");
console.log(demoClass);

demoClass = Array.from(demoClass);
console.log(demoClass.push(123));
console.log(demoClass);

var btnModal = document.querySelector("body [data-toggle='modal']");
console.log(btnModal);
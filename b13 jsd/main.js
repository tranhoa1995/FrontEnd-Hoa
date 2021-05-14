var demoId = document.getElementById("demo")
console.log(demoId);

var arrNumber = [1, 2, 3, 4];
var demoClass = document.getElementsByClassName("demo")
console.log(demoClass);

var demoClassArray = Array.from(demoClass);
     demoClassArray.push("123");
     console.log(demoClassArray);

arrNumber.push(5);
console.log(arrNumber);

// console.log(demoClass)[0];
// console.log(demoClass)[1];
// console.log("length demoClass = ", demoClass.length);

for (var index = 0 ; index < demoClass.length; index ++) {
    console.log("phan tu thu" , index , "la: ",demoClass[index]);
}
   




var div = document.getElementsByTagName("div")
console.log("div = ", div);


var h1 = document.getElementsByTagName("h1");
console.log("h1 = ", h1);

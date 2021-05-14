var firstName = "john";
var age = 10;
console.log("age = " , 16);
console.log("age >=20" , age >= 20);
console.log("age >=30" , age <30);
console.log("!(age < 30)" , !(age < 30));

console.log("age >= 20 && age < 30" , age >= 20 &&  age < 30 )
console.log("age >= 20 || age < 30" , age >= 20 ||  age < 30 );

if(age < 13) {
    console.log(firstName + ' la mot cau hoc sinh');
} else if (age >= 13 && age <= 18) {
    console.log(firstName + ' la mot cau be tuoi teen');
} else if (age > 18 && age < 30 ) {
    console.log(firstName + 'la mot nguoi dan ong trung nien');
} else {
    console.log(firstName + ' la mot nguoi dan ong truong thanh');
}

var job = 'designer';

switch (job) {
    case 'designer':
          console.log(firstName + ' la mot designer'); 
          break;
    case 'worker':
        console.log(firstName + 'la mot worker ')
        break;
    case 'teacher':
         console.log(firstName + ' la mot teacher');
           break;
    default:
        console.log(firstName + ' la mot nguoi co cong viec nao do??');
        break;
}

console.log("=========switch(age) ==========")
switch(age){
    case age < 13:
       console.log(firstName + ' la mot cau hoc sinh');
       break;
    case age >= 13 && age <= 18:
          console.log(firstName + 'la mot cau be tuoi teen');
        break;
    case age > 18 && age < 30:
        console.log(firstName + 'la mot nguoi dan ong trung nien');
         break;
    default:
        console.log(firstName + ' la mot nguoi dan ong truong thanh');

         break;
}
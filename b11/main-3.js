var yearJohn = 0;
debugger;
function TinhTuoi(year) {
    // hàng loạt thao tác tính toán ....
    return 2019 - year;
}
function ThayDoiNamSinh() {
    yearJohn = 1990;
}


// ThayDoiNamSinh();  //Loi goi ham , funcition call
// var age = TinhTuoi(yearJohn) ;
// console.log("Tuoi John = " , age);

// cach2

var TinhTuoi2 = function(year) {

    return 2019 - year;
}
var ThayDoiNamSinh2= function(year){
    yearJohn = 1990 ;
}
// ThayDoiNamSinh2();
// var age =TinhTuoi2(yearJohn);
// console.log("Tuoi John2 = " , age);

// cach 3
var TinhTuoi3 = (year) => {
   
    return 2019 - year;
}
var ThayDoiNamSinh3 = () => {
    yearJohn = 1991;
}
ThayDoiNamSinh3();
var age =TinhTuoi3(yearJohn);
console.log("Tuoi John3 = ", age);



function printContent(FirstName, job) {
    switch (job){
        case 'teacher':
            console.log(FirstName + ' la mot giao vien!');
            break;
        case 'designer':
            console.log(FirstName + ' la mog nguoi thiet ke! ');
        default:
            console.log(FirstName + ' lam cong viec nao do! ')
            break;
    }
}

printContent('John', 'designer')
printContent('John', 'teacher')
printContent('John', 'worker')
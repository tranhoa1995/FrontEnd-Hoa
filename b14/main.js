var index1 = 1;
var index2 = 3 ;



async function change(){
    var src1 = `../b14/image/dice${index1}@2x.png`;
    var src2 = `../b14/image/dice${index2}@2x.png`;
    index1 = getRandomInt(1,7);
    index2 = getRandomInt(1,7);

    document.querySelector("#img-1").src = src1;
    document.querySelector("#img-2").src = src2;
   
   
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  
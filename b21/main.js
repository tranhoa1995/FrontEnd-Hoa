var index1 = 1;
var index2 = 3 ;


async function change() {
    // var src1 = `../b21/dice${index1}@2x.png`;
    // var src2 = `../b21/dice${index1}@2x.png`;
    index1 = getRandomInt(1,6);
    index2 = getRandomInt(1,6);

  console.log(`index 1:  ${index1} index 2: ${index2}`);

}
//Khai báo 1 object để quản lý trò chơi
//Object gồm 2 thuộc tính: player1 và player2 để chứa 2 tag lấy ra theo id
//Hàm run để in ra kiểm tra
const RollGame = {
    player1:document.querySelector('#player1'), //lưu tag
    player1Point: document.querySelector('#player1Point'),
    player1Total: document.querySelector('#player1Total'),
    player1PointScore:0,//lưu điểm
    player1TotalScore:0,//lưu điểm


    player2:document.querySelector('#player2'),//lưu tag
    player2Point: document.querySelector('#player1Point'),
    player2Total: document.querySelector('#player1Total'),
    player2PointScore:0,//lưu điểm
    player2TotalScore:0,

    finalScore:0,
    btnNewGame: document.querySelector('#btnNewGame'),//Lưu nút newgame
    btnRoll:document.querySelector('#btnRoll'),
    btnHold:document.querySelector('#Hold'),
    currentPlayer: '', //Lưu người chơi hiện tại

    //Gọi hàm start để khởi động game
    start(){
        //Gọi hàm cấu hình
       this.setting();  

    },

    //Khai báo hàm cấu hình
    setting(){

        // Viết hàm cho sự kiện click của nút new game
        this.btnNewGame.addEventListener('click',function(){
            player1.classList.remove('active');
            player2.classList.remove('active');
            this.currentPlayer ='player1';  //Khi nhấn nút NEW GAME thì User 1 là người chơi đầu tiên
             document.getElementById(this.currentPlayer).classList.add('active');

             //Điểm tổng và điểm tạm thời Reset về lại số 0
            player1Total.textContent='0';
            player2Total.textContent='0';
            player1Point.textContent='0';
            player2Point.textContent='0';
       //Biến thì khai báo lên trên, hàm viết dưới. (Lưu ý) 

       //Trong hàm có 1 hàm chạy (nếu là app giống như vầy)
       //Còn ko thì chỉ cần viết hàm rồi khi nào cần dùng thì gọi lại (còn gọi là thư viện)


            player1TotalScore=0;
            player2TotalScore=0;
            player1PointScore=0;
            player2PointScore=0;
            
            
            finalScore = document.querySelector('#finalScore').value;
            if(finalScore >0 )
            {
                alert(`Bắt đầu trò chơi với điểm chiến thắng là ${finalScore}`);
                btnRoll.focus();
            }
            else
            {
                alert(`Bạn chưa nhập điểm tối đa để chiến thắng ${finalScore}`);
                document.querySelector('#finalScore').focus();
            }

        });

        // Viết hàm cho nút Roll
        this.btnRoll.addEventListener('click',function(){
            //Mỗi lần nhất nút -> Random ngẫu nhiên 2 con số từ 1 -> 6
            Random1 = RollGame.getRandomInt(1,6);
            Random2 =  RollGame.getRandomInt(1,6);


            alert(this.currentPlayer);


            if((Random1===1) || (Random2===1) || (Random1===6) || (Random2===6)){
                alert(`Player: ${this.currentPlayer}| Điểm: ${Random1} - ${Random2}. Bạn bị mất lượt!`);
                if(this.currentPlayer=='player1')
                    this.currentPlayer='player2';
                else
                     this.currentPlayer='player1';
            }
            else
            {
                alert(`Player: ${this.currentPlayer}| Điểm: ${Random1} - ${Random2}.`);
            }


        });
       
    },
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      },
    sprinerRun(){
        var spin1 = document.querySelector('#dice-1 .spinner');
        var spin2 = document.querySelector('#dice-2 .spinner');
        
        i=1;
        setInterval(()=>{
            spin1.classList.add(`dice-${i}`);
            if (i==6)
            i=1;
            else
                i++;
        },1000);
    }
}

// Chạy game
RollGame.start();
// RollGame.sprinerRun();


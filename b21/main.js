//Khai báo 1 object để quản lý trò chơi
//Object gồm 2 thuộc tính: player1 và player2 để chứa 2 tag lấy ra theo id
//Hàm run để in ra kiểm tra

//Biến thì khai báo lên trên, hàm viết dưới. (Lưu ý) 
//Trong hàm có 1 hàm chạy (nếu là app giống như vầy)
//Còn ko thì chỉ cần viết hàm rồi khi nào cần dùng thì gọi lại (còn gọi là thư viện)
const RollGame = {
    player1: document.querySelector('#player1'), //lưu tag
    player1Point: document.querySelector('#player1Point'),
    player1Total: document.querySelector('#player1Total'),
    player1PointScore: 0,//lưu điểm
    player1TotalScore: 0,//lưu điểm


    player2: document.querySelector('#player2'),//lưu tag
    player2Point: document.querySelector('#player2Point'),
    player2Total: document.querySelector('#player2Total'),
    player2PointScore: 0,//lưu điểm
    player2TotalScore: 0,

    dice1Point: 0,
    dice2Point: 0,
    finalScore: 0,
    btnNewGame: document.querySelector('#btnNewGame'),//Lưu nút newgame
    btnRoll: document.querySelector('#btnRoll'),
    btnHold: document.querySelector('#btnHold'),
    currentPlayer: '', //Lưu người chơi hiện tại

    //Gọi hàm start để khởi động game
    start() {
        //Gọi hàm cấu hình
        this.setting();
    },

    //Khai báo hàm cấu hình
    setting() {

        // Viết hàm cho sự kiện click của nút new game
        this.btnNewGame.addEventListener('click', function () {
            RollGame.resetGame();

            setTimeout(() => {
                RollGame.finalScore = Number(document.querySelector('#finalScore').value);
                if (RollGame.finalScore > 0) {
                    alert(`The game begins! \n The first person to reach the ${RollGame.finalScore} score will be the winner. \n ${RollGame.currentPlayer.toLocaleUpperCase()} is the first to play.`);
                    btnRoll.disabled = false;
                    btnHold.disabled = false;
                    document.querySelector('#finalScore').readOnly = true;
                    btnRoll.focus();
                }
                else {
                    alert(`Please enter the 'Final score' before starting a new game!`);
                    document.querySelector('#finalScore').focus();
                }
            }, 500);
        });

        // Viết hàm cho nút Roll
        this.btnRoll.addEventListener('click', function () {
            //Xóa điểm củ
            document.querySelector('#dice-1 .spinner').classList.remove(`dice-${RollGame.dice1Point}`);
            document.querySelector('#dice-2 .spinner').classList.remove(`dice-${RollGame.dice2Point}`);

            var dice1 = document.getElementById('dice-1');
            var dice2 = document.getElementById('dice-2');

            //Quay xúc sắc
            dice1.classList.add('dice-run-one');
            dice2.classList.add('dice-run-one');

            //Random ngẫu nhiên 2 con số từ 1 -> 6
            Random1 = RollGame.getRandomInt(1, 6);
            Random2 = RollGame.getRandomInt(1, 6);


            //Hiện xúc xắc theo số sau 4 giây
            setTimeout(() => {

                //Ngừng quay
                dice1.classList.remove('dice-run-one');
                dice2.classList.remove('dice-run-one');

                //Hiện thông báo điểm sau 0.5 giây
                setTimeout(() => {
                    RollGame.setScore(RollGame.currentPlayer, Random1 + Random2);

                    setTimeout(() => {
                        if ((Random1 === 1) || (Random2 === 1) || (Random1 === 6) || (Random2 === 6)) {
                            var lastPlayer = RollGame.currentPlayer;
                            RollGame.setTotal(RollGame.currentPlayer);
                            if (!RollGame.winner()) {
                                RollGame.changePlayer();
                                alert(`${lastPlayer.toLocaleUpperCase()} score ${Random1} + ${Random2}. You lost turn! \n The next turn is for ${RollGame.currentPlayer.toLocaleUpperCase()} `);
                            }
                        }
                    }, 100)
                }, 500);
                document.querySelector('#dice-1 .spinner').classList.add(`dice-${Random1}`);
                document.querySelector('#dice-2 .spinner').classList.add(`dice-${Random2}`);
            }, 2000);
            RollGame.dice1Point = Random1;
            RollGame.dice2Point = Random2;
        });

        this.btnHold.addEventListener('click', () => {

            this.setTotal(RollGame.currentPlayer);
            var lastPlayer = RollGame.currentPlayer;
            if (!RollGame.winner()) {
                RollGame.changePlayer();
                alert(`${lastPlayer.toLocaleUpperCase()} is choose to skip! \n The next turn is for ${RollGame.currentPlayer.toLocaleUpperCase()} `);
            }
        });
    },
    getRandomInt: (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    },
    resetGame: () => {
        RollGame.changePlayer('player1');

        //Điểm tổng và điểm tạm = 0
        RollGame.player1Total.textContent = '0';
        RollGame.player2Total.textContent = '0';
        RollGame.player1Point.textContent = '0';
        RollGame.player2Point.textContent = '0';

        RollGame.player1TotalScore = 0;
        RollGame.player2TotalScore = 0;
        RollGame.player1PointScore = 0;
        RollGame.player2PointScore = 0;

        RollGame.player1.classList.remove('winner');
        RollGame.player2.classList.remove('winner');

        RollGame.btnRoll.disabled = true;
        RollGame.btnHold.disabled = true;
        document.querySelector('#finalScore').readOnly = false;

    },
    setScore: (player, score) => {
        if (player == 'player1') {
            RollGame.player1PointScore += score;
            RollGame.player1Point.textContent = RollGame.player1PointScore;
        }
        else {
            RollGame.player2PointScore += score;
            RollGame.player2Point.textContent = RollGame.player2PointScore;
        }
    },
    setTotal: (player) => {
        if (player == 'player1') {
            RollGame.player1TotalScore += RollGame.player1PointScore;
            RollGame.player1Total.textContent = RollGame.player1TotalScore;
            RollGame.player1PointScore = 0;
            RollGame.player1Point.textContent = RollGame.player1PointScore;

        }
        else {
            RollGame.player2TotalScore += RollGame.player2PointScore;
            RollGame.player2Total.textContent = RollGame.player2TotalScore;
            RollGame.player2PointScore = 0;
            RollGame.player2Point.textContent = RollGame.player2PointScore;
        }
    },
    changePlayer: (player) => {
        if (player != null) {
            RollGame.currentPlayer = player;
        }
        else

            if (RollGame.currentPlayer == 'player1') {
                RollGame.currentPlayer = 'player2';
            }
            else {
                RollGame.currentPlayer = "player1";
            }
        RollGame.player1.classList.remove('active');
        RollGame.player2.classList.remove('active');

        document.getElementById(RollGame.currentPlayer).classList.add('active');
    },
    winner: () => {
        if ((RollGame.player1TotalScore >= RollGame.finalScore) || (RollGame.player2TotalScore >= RollGame.finalScore)) {
            if (RollGame.currentPlayer == 'player1') {
                RollGame.player1.classList.add('winner');
            }
            else {
                RollGame.player2.classList.add('winner');
            }
            alert(`Congratulations! ${RollGame.currentPlayer.toLocaleUpperCase()} is the winner`);
            RollGame.btnRoll.disabled = true;
            RollGame.btnHold.disabled = true;
            return true;
        }
        else {
            return false
        }
    }
}

// // Chạy game
RollGame.start();
// // RollGame.sprinerRun();

var scoreJohn = ( 89 + 120 + 103) / 3,
    scoreMark = ( 116 + 94 + 123) / 3,
    scoreMary = ( 97 + 134 + 105) / 3;
// test case
// scoreJohn = scoreMary
scoreMark = 150;
// scoreJohn = 150;
scoreMary = 150;

    console.log("scoreJohn = ", scoreJohn);
    console.log("scoreMark = ", scoreMark);
    console.log("scoreMary = ", scoreMary)


    if (scoreJohn > scoreMark && scoreJohn > scoreMary) {
        console.log("đội của John thắng với số điểm = ", scoreJohn);
    } else if ( scoreMark > scoreJohn && scoreMark > scoreMary) {
         console.log("đội của Mark thắng với số điểm = ", scoreMark);
    } else if (scoreMary > scoreJohn && scoreMary > scoreMark) {
        console.log(" đội của Mary thắng với số điẻm = ", scoreMary);
    }else if (scoreJohn === scoreMark && scoreMark === scoreMary)
         console.log("ba đội hoà nhau với số điểm là = " , scoreJohn);
    
     else if(scoreJohn === scoreMark && scoreMark === scoreMary){
        console.log(" đội của John và Mark hoà nhau với số điểm = " , scoreJohn);
    }  else if (scoreJohn === scoreMary){
        console.log(" đội của John và Mary hoà nhau với số điểm = " , scoreJohn);
    }  else if (scoreMark === scoreMary){
        console.log(" đội của John và  Mark hoà nhau với số điểm = " , scoreMark);
    } else {
        console.log("ba đội hoà nhau với số điểm là = " , scoreJohn);
    }
        

         
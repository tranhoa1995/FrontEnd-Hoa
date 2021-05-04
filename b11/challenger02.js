var scoreJohn = ( 89 + 120 + 103) / 3,
    scoreMark = ( 116 + 94 + 123) / 3,
    scoreMary = ( 97 + 134 + 105) / 3;

    console.log("scoreJohn = ", scoreJohn);
    console.log("scoreMark = ", scoreMark);
    console.log("scoreMary = ", scoreMary)

    if (scoreJohn > scoreMark && scoreJohn > scoreMary) {
        console.log("đội của John thắng với số điểm = ", scoreJohn);
    } else if ( scoreMark > scoreJohn && scoreMark > scoreMary) {
         console.log("đội của Mark thắng với số điểm = ", scoreMark);
    } else if (scoreMary > scoreJohn && scoreMary > scoreMark) {
        console.log(" đội của Mary thắng với số điẻm = ", scoreMary)
    }
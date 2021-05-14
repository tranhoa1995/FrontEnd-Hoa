var index = 1;



function change(){
    var src = "http://127.0.0.1:5500/New%20folder/ball" + index + "@2x.png";
    document.querySelector("#img").src = src;
    if(index==5){
        index=1;
    }
    else{
        index++;
    }

}

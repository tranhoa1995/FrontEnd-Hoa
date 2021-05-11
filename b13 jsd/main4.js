function handeClick() {
    console.log("click")
}

var colorSkinId = document.getElementById("color-skin");

function changeStyleColor(href) {
    // console.log(href);
    colorSkinId.setAttribute("href", href);
}
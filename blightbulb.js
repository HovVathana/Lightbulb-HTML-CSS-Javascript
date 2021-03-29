function lightbulb(value) {
    var pic;
    
    if (value==1){
        pic="off.png"
    } else {
        pic="on.png"
    }

    var x = document.getElementById("off")
    x.src = pic
}
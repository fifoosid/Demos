/**
 * Created by Filip Siderov on 09-Jul-17.
 */
"use strict;"
function changeLamp(curr) {
    var pic, currentPic = document.getElementById("bulb").getAttribute('src');
    if(curr === 1)
    {
        if(currentPic === "../Images/pic_bulbon.gif")
        {
            alert("Bulb is already on!");
            return;
        }
        pic = "../Images/pic_bulbon.gif";
    }
    else
    {
        if(currentPic === "../Images/pic_bulboff.gif")
        {
            alert("Bulb is already off");
        }
        pic = "../Images/pic_bulboff.gif";
    }

    document.getElementById("bulb").src = pic;
}

function isOn(){
    var pic = document.getElementById("bulb").getAttribute('src');

    if (pic === "../Images/pic_bulboff.gif")
    {
        return 1;
    }
    else
    {
        return 0;
    }

}

function pic() {
    return document.getElementById("bulb").getAttribute('src');
}
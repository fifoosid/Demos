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



function SecondDemoClick()
{
    var element = document.getElementById("timeToPlay").value;
    var enteredTime = element.split(":");
    var enteredH = enteredTime[0];
    var enteredM = enteredTime[1];


    var currDate = new Date();
    var currH = currDate.getHours();
    var currM = currDate.getMinutes();




    var when = enteredH + ":" + enteredM;
    var now = currH + ":" + currM;

    checkTime(when, now);

}

function checkTime(_when, _now)
{
  if(_when === _now)
  {
    clearInterval(inter);
    var linkForUse = document.getElementById("linkToPlay").value;
    OpenInNewTabInBrowser(linkForUse);
  }
  else
  {
   clearInterval(inter);
   var inter = setInterval(checkTime, 1 * 1000);
  }
}


function OpenInNewTabInBrowser(url)
{
  var win = window.open(url, '_blank');
  win.focus();
}

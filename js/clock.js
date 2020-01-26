// JavaScript Document
var flag;
var dateFlag;

function startTime() {
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
    var pointHM = document.getElementById('pointHM');
    var pointMS = document.getElementById('pointMS');
     
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    if (dateFlag == null) {
        date();


        dateFlag = 1;

    }
    if (flag == null || flag == 0) {

        pointHM.style.color = "#FF1D25";
        pointMS.style.color = "#FF1D25";

        flag = 1;

    } else {

        flag = 0;
        
        pointHM.style.color = "#7D1213";
        pointMS.style.color = "#7D1213";
    }
    var t = setTimeout(startTime, 500);

}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

function date() {
    var date = document.getElementById('date');
    var d = new Date();
    var days = ["Pazar", "Pazartesi", "Salı", "Carsamba", "Persembe", "Cuma", "Cumartesi"];
    var year=d.getFullYear().toString();
 

    date.innerHTML = days[d.getDay()] + "," + d.getDate() + "." + (d.getMonth()+1) + "." + year.substring(2, 4)
}

/*
**For set exact place 
**for clock
*/

var curTimeId = document.getElementById('curTimeId');

const element = document.querySelector('.curTime');
const style = getComputedStyle(element)


if(!getCookie("marginTop"))
var marginTop = style.marginTop ;
else var marginTop=getCookie('marginTop');

if(!getCookie('marginLeft'))
var marginLeft = style.marginLeft;
else var marginLeft=getCookie('marginLeft');


curTimeId.style.marginTop=marginTop;
curTimeId.style.marginLeft=marginLeft;

console.log(marginLeft+" "+marginTop);

console.log(parseInt("40px", 10) + 1 + "px"); // 2em;

function moveCurTimeID(direction , value){
    if(direction == 1){
        marginTop=parseInt(marginTop, 10) + value + "px";
        curTimeId.style.marginTop=marginTop;
    }
     if(direction == 0){
        marginLeft=parseInt(marginLeft, 10) + value + "px";
        curTimeId.style.marginLeft=marginLeft;
    }
    console.log("marginLeft= "+marginLeft + " marginTop= "+marginTop);
    setCookie("marginTop",marginTop);
    setCookie("marginLeft",marginLeft );


}

function moveup() {
  
  moveCurTimeID(1,-10);
}

function movedown() {
   
  moveCurTimeID(1,10);
}

function moveleft() {
   
  moveCurTimeID(0,-10);
}

function moveright() {
  
  moveCurTimeID(0,10);
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        moveup();
    }
    else if (e.keyCode == '40') {
        // down arrow
        movedown();
    }
    else if (e.keyCode == '37') {
       // left arrow
       moveleft();
    }
    else if (e.keyCode == '39') {
       // right arrow
       moveright();
    }

     
    


}

 
 /*
 **Cokie functions
 */


function setCookie(name, value) {
  document.cookie = name+"=" + value +";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

 
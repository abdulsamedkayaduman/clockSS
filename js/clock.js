/*
** Author	:Abdulsamed Kayaduman
** Date 	:26.01.2020	
** Type 	:JavaScript Document
*/

var flag;
var dateFlag;
var urlGet = 'http://abdulsamed.me/ipblock/getmargin?user=';
var urlPost = 'http://abdulsamed.me/ipblock/setmargin';
var urlString =window.location.href;
var urlParse = new URL(urlString);
var username = urlParse.searchParams.get("user");
var marginTop = "200px" ;
var marginLeft = "200px";
console.log(username);


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



var getRequest = new XMLHttpRequest(); 
getRequest.open('GET', urlGet+username, true);
getRequest.send();

 getRequest.onload = function () {
 	console.log(this.response);
 	var data = JSON.parse(this.response)
 	console.log("request.onload");
 	 
   //request.onreadystatechange = function() {
 	console.log("request.onreadystatechange");
  if (this.readyState == 4 && this.status == 200) {
    data.forEach(function(object) {
      console.log(object.margin_left+"  , "+object.margin_top+"  ,  "+object.cdate);
      marginTop = object.margin_top+"px" ;
	  marginLeft = object.margin_left+"px";
	  curTimeId.style.marginTop=marginTop;
      curTimeId.style.marginLeft=marginLeft;
      console.log(marginLeft+" "+marginTop);
	});
  }
}







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
    else if (e.keyCode == '13') {
       // right arrow
       setMargin(parseInt(marginTop, 10),parseInt(marginLeft, 10));
    }     
    


}

 
 /*
 **Cokie functions
 */



 
 /*
 ** Api Post data
 */


 function setMargin(marginTop,marginLeft){
 	var xhr = new XMLHttpRequest();
	xhr.open("POST", urlPost, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
    "username": username,
    "margintop":marginTop,
    "marginleft":marginLeft

	}));
 }
 



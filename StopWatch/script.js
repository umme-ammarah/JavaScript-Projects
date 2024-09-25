var hr=0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false

function start(){
    timer = true;
    stopwatch();

}

function stop(){
     document.getElementById("start").innerHTML="Resume"
    timer = false;
 

}
 function reset(){
    document.getElementById("start").innerHTML="Start"

    timer = false;
     hr=0;
 min = 0;
 sec = 0;
 count = 0;

 document.getElementById("hr").innerHTML = "00";
 document.getElementById("min").innerHTML = "00";
document.getElementById("sec").innerHTML= "00";
document.getElementById("counter").innerHTML= "00";

}

function stopwatch(){
    if(timer==true){
        count += 1;
        setTimeout("stopwatch()",10)
       document.getElementById("counter").innerHTML= count;

        if(count == 100){
            sec +=  1;
            count = 0;
       document.getElementById("sec").innerHTML= sec;
        
        }
        if(sec == 60){
            min+=  1;
            sec = 0;
            document.getElementById("min").innerHTML = min;

        }
        if(min== 60){
            hr +=  1;
            sec = 0;
            min = 0;
            document.getElementById("hr").innerHTML = hr;

        }

        if(sec<10){
            document.getElementById("sec").innerHTML = "0" + sec
        }
        
        if(min<10){
            document.getElementById("min").innerHTML = "0" + min
        }
        if(hr<10){
            document.getElementById("hr").innerHTML = "0" +hr
        }
        
    }
}
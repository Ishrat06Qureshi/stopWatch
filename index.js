

window.onload = function () {
 var  seconds = document.getElementById('seconds');
 var tens = document.getElementById('tens');
 var appendSeconds = 0;
 var appendTens  = 0;
 var buttonStart = document.getElementById('start-button');
 var buttonStop = document.getElementById('stop-button');
 var buttonReset = document.getElementById('reset-button');
 var interval ;

function incrementSecondsAndTens () {
    if(appendTens >= 100) {
        appendSeconds = appendSeconds +1;
        appendTens =0;
        seconds.innerHTML = appendSeconds < 10 ? '0'+appendSeconds : appendSeconds; 
    }
    if(appendTens<100){
        appendTens = appendTens + 1;
        tens.innerHTML =   appendTens <10 ? '0' + appendTens : appendTens;
    }
    
}

buttonStart.onclick = function () {
     clearInterval(interval);
    interval = setInterval(incrementSecondsAndTens , 10);
   }
buttonStop.onclick = function() {
    clearInterval(interval)
    
}
buttonReset.onclick = function(){
    
    clearInterval(interval)
    appendSeconds = 0;
    appendTens = 0;
    seconds.innerHTML = '00';
    tens.innerHTML = '00';

}

}
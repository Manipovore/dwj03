var timer;

function initTime(){
    var cadreReserve = document.getElementById("reserve");
    cadreReserve.style.display = 'block';
    var time = 20 * 60 * 1000;
    reservation = true;
    timer = setInterval( function(){
        time -= 1000;
        var min = Math.floor(time / (60 * 1000));
        //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
        var sec = Math.floor((time - (min * 60 * 1000)) / 1000);  //correct
        document.getElementById("timer").innerHTML = min + " : " + sec;
    }, 1000);
    if( time <= 0 ){
       stopReserve();
    }
}


function stopTime(){
    if(window.sessionStorage.length > 0){
        resetValid();
    }  
     reservation = false;
     clearInterval(timer);
     document.getElementById("reserve").style.display = 'none';
     view_station.resetMarker();
}
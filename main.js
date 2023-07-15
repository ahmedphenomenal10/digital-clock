setInterval(( function(){

    /* to get id in html */
    let hours = document.getElementById("hours"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    ampm = document.getElementById("ampm");

    let hh = document.getElementById("hh"),
    mm = document.getElementById("mm"),
    ss = document.getElementById("ss");

    let h = new Date().getHours(),
    m = new Date().getMinutes(),
    s = new Date().getSeconds(),
    am ="AM";
    if(h >=12){
        am = "PM";
    }

    if (h > 12){
        h -= 12;
    }
    if(m < 10){
        m="0"+m;
    }
    if(h < 10){
        h="0"+h;
    }
    if(s < 10){
        s = "0"+s;
    }
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) /12;
    mm.style.strokeDashoffset = 440 - (440 * m) /60;
    ss.style.strokeDashoffset = 440 - (440 * s) /60;
}))
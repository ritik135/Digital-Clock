let digitalClock = () => {
  let time = new Date();

  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let ampm = (hour<12) ? "AM" : "PM" ;
  if(hour==0){
    hour=12;
  }
  if(hour>12){
    hour=hour%12;
  }

  hour = (hour<10) ? "0" + hour : hour ;
  min = (min<10) ? "0" + min : min ;
  sec = (sec<10) ? "0" + sec : sec ;

  document.getElementById("hours").innerHTML = hour ;
  document.getElementById("minutes").innerHTML = min ;
  document.getElementById("seconds").innerHTML = sec ;
  document.getElementById("ampm").innerHTML = ampm ;

  setTimeout(digitalClock,500);
}

digitalClock();

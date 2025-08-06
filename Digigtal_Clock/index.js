function digitalClock(){
  let clock = document.getElementById('clock');
  const currentDate = new Date();
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let second = currentDate.getSeconds();
  let meridian = hour >= 12 ? "PM":"AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  let hr = String(hour).padStart(2,"0");
  let min = String(minute).padStart(2,"0");
  let sec = String(second).padStart(2,"0");
  let showTime = `${hr}:${min}:${sec} ${meridian}`;
  clock.textContent = showTime;
}

setInterval(() => {
  digitalClock();
}, 1000);
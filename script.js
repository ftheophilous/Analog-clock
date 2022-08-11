const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const hour = document.querySelector('.hour');


const fullDateBox = document.querySelector(".full-date");
const dayBox = document.querySelector(".day-of-week");
const dateArray = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];


setInterval(()=> {
    const date = new Date();
    const secDeg = date.getSeconds()/60 * 360 - 90;
    const minDeg = date.getMinutes()/60 * 360 - 90;
    const hourDeg = date.getHours()/12 * 360 - 90 + date.getMinutes()*29.5/59;
    sec.style.transform = `rotate(${secDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
    const day = date.getDay();
    dayBox.innerHTML = `<span style="background-color: white; color: black; padding: 3px 3px; font-variant: none; font-family: times;">${dateArray[day]}</span><span style="color: white;">${date.getDate()}</span>`;
    // const month = date.getMonth() + 1;
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May",
                       "Jun", "jul", "Aug", "Sep", "Oct",
                       "Nov", "Dec"];
    fullDateBox.innerHTML = `<span style="background-color: white; color: black; padding: 3px 3px; font-variant: none; font-family: Arial;">${monthArray[date.getMonth()]}</span>
<span style="color: white;">${date.getFullYear()}</span>`;

}, 1000);


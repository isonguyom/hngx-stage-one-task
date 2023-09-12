let dayOfTheWeek = document.querySelector(".day-of-week")
let currentUtcTime = document.querySelector(".utc-time")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayD = new Date();
let day = days[dayD.getDay()];

const utcD = new Date();
let utcMs = utcD.getUTCMilliseconds();

dayOfTheWeek.innerHTML = day
currentUtcTime.innerHTML = utcMs
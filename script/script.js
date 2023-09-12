let dayOfTheWeek = document.querySelector(".day-of-week")
let currentUtcTime = document.querySelector(".utc-time")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];

dayOfTheWeek.innerHTML = day
currentUtcTime.innerHTML = new Date().getUTCMilliseconds
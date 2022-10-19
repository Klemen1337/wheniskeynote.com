function startTimer() {
  function setTime() {
    const now = new Date();
    let delta = Math.abs(eventDate - now) / 1000;

    // Calculate days
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // Calculate hours
    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // Calculate minutes
    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // Calculate seconds
    const seconds = Math.round(delta % 60);

    // Set values
    document.getElementById('event-date-days').innerText = days < 10 ? "0" + days : days;
    document.getElementById('event-date-hours').innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById('event-date-minutes').innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById('event-date-seconds').innerText = seconds < 10 ? "0" + seconds : seconds;
  }

  setTime();
  
  // Update time interval
  setInterval(function () {
    setTime();
  }, 1000);
}

function formatDate () {
  return eventDate.toLocaleString();
}

// Event details
const eventName = 'Far out.';
const eventDate = new Date('2022-09-07T10:45:01.000Z');

// Check if event is in future
const hasNewEvent =  new Date() < eventDate;

// Show correct state
document.getElementById('event').style.display = hasNewEvent ? "block" : "none";
document.getElementById('no-event').style.display = hasNewEvent ?  "none" : "block";

if (hasNewEvent) {
  document.getElementById('event-name').innerText = eventName;
  document.getElementById('event-date-string').innerText = formatDate();
  startTimer();
} else {
  document.getElementById('last-event').innerText = `Last event was on ${formatDate()} named '${eventName}'`;
}
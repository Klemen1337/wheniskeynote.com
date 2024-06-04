const { createApp, ref } = Vue
      
const app = createApp({
  setup() {
    function formatDate (date) {
      return date.toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' });
    }

    const pastEvents = window.pastEvents;
    const event = window.event;
    const hasNewEvent =  new Date() < event.date;
    const eventDate = formatDate(window.event.date);

    document.body.classList.add(event.class);

    return {
      formatDate,
      hasNewEvent,
      pastEvents,
      eventDate,
      event
    }
  },
  template: `
    <!-- Logo -->
    <video autoplay muted loop playsinline class="logo" :poster="'./assets/' + event.videoPoster">
        <source :src="'./assets/' + event.video" type="video/mp4">
    </video>

    <!-- Event state -->
    <div v-if="hasNewEvent" id="event">
      <h1 id="event-name">{{ event.name }}</h1>
      <EventTimer />
      <p id="event-date-string">{{ eventDate }}</p>
    </div>

    <!-- No event state -->
    <div v-if="!hasNewEvent" id="no-event">
        <h1>No event confirmed at this time</h1>
        <p id="last-event">Last event was {{ formatDate(pastEvents[0].date) }} named "{{ pastEvents[0].name }}"</p>
    </div>

    <!-- Footer -->
    <footer>Help us keep this website up to date by making a pull request on <a href="https://github.com/Klemen1337/wheniskeynote.com" target="_blank" alt="Github">GitHub</a></footer>
  `
});


app.component('EventTimer', {
  setup() {
    const days = ref("00");
    const hours = ref("00");
    const minutes = ref("00");
    const seconds = ref("00");

    function setTime() {
      const now = new Date();
      let delta = Math.abs(window.event.date - now) / 1000;
  
      // Calculate days
      const d = Math.floor(delta / 86400);
      delta -= d * 86400;
  
      // Calculate hours
      const h = Math.floor(delta / 3600) % 24;
      delta -= h * 3600;
  
      // Calculate minutes
      const m = Math.floor(delta / 60) % 60;
      delta -= m * 60;
  
      // Calculate seconds
      const s = Math.round(delta % 60);
  
      // Set values
      days.value = d < 10 ? "0" + d : d;
      hours.value = h < 10 ? "0" + h : h;
      minutes.value = m < 10 ? "0" + m : m;
      seconds.value = s < 10 ? "0" + s : s;
      console.log({ days, hours, minutes, seconds })
    }
  
    setTime();
    
    // Update time interval
    setInterval(function () {
      setTime();
    }, 1000);
    
    return { days, hours, minutes, seconds }
  },
  template: `
    <div class="event-date">
        <div class="event-box">
            <small>Days</small>
            <div id="event-date-days">{{ days }}</div>
        </div>
        <div class="event-box">
            <small>Hours</small>
            <div id="event-date-hours">{{ hours }}</div>
        </div>
        <div class="event-box">
            <small>Minutes</small>
            <div id="event-date-minutes">{{ minutes }}</div>
        </div>
        <div class="event-box">
            <small>Seconds</small>
            <div id="event-date-seconds">{{ seconds }}</div>
        </div>
    </div>
  `
})

app.mount('#app');
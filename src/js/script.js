const { createApp, ref, toRefs } = Vue
      
const app = createApp({
  setup() {
    const days = ref("00");
    const hours = ref("00");
    const minutes = ref("00");
    const seconds = ref("00");
    const index = ref(0);
    const events = window.events;
    const event = ref({});
    const hasNewEvent = ref(true);

    function formatDate (date) {
      return date.toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' });
    }

    function prev () {
      if (index.value - 1 < 0) return;
      index.value -= 1;
      selectEvent(index.value);
    }

    function next () {
      if (index.value + 1 >= events.length) return;
      index.value += 1;
      selectEvent(index.value);
    }

    function selectEvent (index) {
      event.value = events[index];

      if (!event.value.videoPoster) event.value.videoPoster = "animation-1-poster.png";
      if (!event.value.video) event.value.video = "animation-1.mp4";
      if (!event.value.name) event.value.name = "Apple Event";

      document.body.className = "";
      document.body.classList.add(event.value.class);

      setTime();
    }

    function setTime() {
      const now = new Date();
      let delta = (event.value.date - now) / 1000;
  
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
      days.value = d < 10 && d > 0 ? "0" + d : d;
      hours.value = h < 10 ? "0" + h : h;
      minutes.value = m < 10 ? "0" + m : m;
      seconds.value = s < 10 ? "0" + s : s;
    }

    document.addEventListener("keydown", function(e) {
      if (e.key == "ArrowLeft") prev();
      if (e.key == "ArrowRight") next();
    });

    selectEvent(index.value);
    setTime();
    
    // Update time interval
    setInterval(function () {
      setTime();
    }, 1000);

    return {
      index,
      next,
      prev,
      formatDate,
      hasNewEvent,
      events,
      event,
      days, 
      hours, 
      minutes, 
      seconds
    }
  },
  template: `
    <!-- Logo -->
    <video autoplay muted loop playsinline class="logo" :poster="'./assets/' + event.videoPoster" :key="index">
        <source :src="'./assets/' + event.video" type="video/mp4">
    </video>

    <!-- Event state -->
    <div v-if="hasNewEvent" id="event">
      <h1 id="event-name">{{ event.name }}</h1>
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
      <p id="event-date-string">{{ formatDate(event.date) }}</p>
    </div>

    <!-- No event state -->
    <div v-if="!hasNewEvent" id="no-event">
        <h1>No event confirmed at this time</h1>
        <p id="last-event">Last event was {{ formatDate(events[0].date) }} named "{{ events[0].name }}"</p>
    </div>

    <!-- Navigation buttons -->
    <button class="btn-nav btn-next" v-if="index <= events.length" @click="next()">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
      </svg>
    </button>

    <button class="btn-nav btn-prev" v-if="index > 0" @click="prev()">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
      </svg>
    </button>

    <!-- Footer -->
    <footer>Help us keep this website up to date by making a pull request on <a href="https://github.com/Klemen1337/wheniskeynote.com" target="_blank" alt="Github">GitHub</a></footer>
  `
});

app.mount('#app');
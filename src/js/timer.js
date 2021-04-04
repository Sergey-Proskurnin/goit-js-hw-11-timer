import { String } from "core-js";

function pad(value) {
    return String(value).padStart(2, '0')
}
function padDays(value) {
    return String(value).padStart(3, '0')
}

function getTimeComponents(time) {
  const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

const refs = {
    spanDay: document.querySelector('[data-value="days"]'),
    spanHours: document.querySelector('[data-value="hours"]'),
    spanMins: document.querySelector('[data-value="mins"]'),
    spanSecs: document.querySelector('[data-value="secs"]')
}

// const CountdownTimer = {  

// }
const timer = {
  start() {
    // const startTime = Date.now();
    setInterval(() => {
        // console.log(new Date('Jul 17, 2019').getTime());
        const finalDate = new Date('Jul 17, 2021').getTime()
      const currentTime = Date.now();
    //   const deltaTime = currentTime - startTime;
      const velTime = finalDate - currentTime;
      
      const time = getTimeComponents(velTime);
      updateClockface(time)
    //   console.log(`${ days}:${hours}:${mins}:${secs}`);
    }, 1000);
  },
};
timer.start();

function updateClockface({ days, hours, mins, secs }) {
    refs.spanDay.textContent = `${days}`;
    refs.spanHours.textContent = `${hours}`;
    refs.spanMins.textContent = `${mins}`;
    refs.spanSecs.textContent = `${secs}`;

}

// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

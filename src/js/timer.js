export default class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
  }
  start() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  padDays(value) {
    return String(value).padStart(3, '0');
  }
  getTimeComponents(time) {
    const days = this.padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  updateTime() {
    const finalDate = this.targetDate.getTime();
    const currentTime = Date.now();
    const velTime = finalDate - currentTime;
    const time = this.getTimeComponents(velTime);
    this.onTick(time);
  }
}

// ------------------------------option without class-----------------------------------------------
// function pad(value) {
//   return String(value).padStart(2, '0');
// }
// function padDays(value) {
//   return String(value).padStart(3, '0');
// }
// function getTimeComponents(time) {
//   const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { days, hours, mins, secs };
// }
// const refs = {
//   spanDay: document.querySelector('[data-value="days"]'),
//   spanHours: document.querySelector('[data-value="hours"]'),
//   spanMins: document.querySelector('[data-value="mins"]'),
//   spanSecs: document.querySelector('[data-value="secs"]'),
// };
// const timer = {
//   start(date) {
//     updateTime(date);
//     setInterval(() => {
//       updateTime(date);
//     }, 1000);
//   },
// };
// timer.start('Jul 17, 2021');
// function updateTime(dateSale) {
//   const finalDate = new Date(dateSale).getTime();
//   const currentTime = Date.now();
//   const velTime = finalDate - currentTime;
//   const time = getTimeComponents(velTime);
//   updateClockface(time);
// }
// function updateClockface({ days, hours, mins, secs }) {
//   refs.spanDay.textContent = `${days}`;
//   refs.spanHours.textContent = `${hours}`;
//   refs.spanMins.textContent = `${mins}`;
//   refs.spanSecs.textContent = `${secs}`;
// }
//--------------------------------------for educational purposes----------------------------------------------

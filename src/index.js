import './styles.css';
import CountdownTimer from './js/timer'

const refs = {
    spanDay: document.querySelector('[data-value="days"]'),
    spanHours: document.querySelector('[data-value="hours"]'),
    spanMins: document.querySelector('[data-value="mins"]'),
    spanSecs: document.querySelector('[data-value="secs"]'),
  };

  function updateClockface({ days, hours, mins, secs }) {
    refs.spanDay.textContent = `${days}`;
    refs.spanHours.textContent = `${hours}`;
    refs.spanMins.textContent = `${mins}`;
    refs.spanSecs.textContent = `${secs}`;
  }
  
  const time = new CountdownTimer({
      selector: '#timer-1',
      targetDate: new Date('Jul 17, 2021'),
      onTick: updateClockface
    });
  
    time.start()





import refs from './refs';
import timeClock from '../templates/tеmplate-clock.hbs';
import CountdownTimer from './timer'

function updateClockface({ days, hours, mins, secs }) {
    refs.spanDay.innerHTML = `<span>${days}</span>`;
    refs.spanHours.innerHTML = `<span>${hours}</span>`;
    refs.spanMins.innerHTML = `<span>${mins}</span>`;
    refs.spanSecs.innerHTML = `<span>${secs}</span>`;
  }
  const clock = timeClock()
  refs.timerContainer.insertAdjacentHTML('afterbegin', clock)
  
  const time = new CountdownTimer({
      selector: '#timer-1',
      targetDate: new Date('Jul 17, 2021'),
      onTick: updateClockface
    });
    
      time.start()
        const body = document.querySelector('body');
        const input = document.querySelector('.theme-switch__toggle');
        const spanDay = document.querySelector('[data-value="days"]');
        const spanHours = document.querySelector('[data-value="hours"]');
        const spanMins = document.querySelector('[data-value="mins"]');
        const spanSecs = document.querySelector('[data-value="secs"]');
        const timerContainer = document.querySelector('.timer');
      
        module.exports = {
            body,
            input,
            spanDay,
            spanMins,
            spanSecs,
            timerContainer,
            spanHours,
          };
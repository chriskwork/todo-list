function updateTime() {
    // Current time
    const now = new Date();

    const clock = document.querySelector('.clock');
    const spainDateElement = clock.querySelector('.time-main .date');
    const spainHoursElement = clock.querySelector('.time-main .hours');
    const koreaDateElement = clock.querySelector('.time-korea .date');
    const koreaHoursElement = clock.querySelector('.time-korea .hours');

    // Spain time
    const formatterSpain = new Intl.DateTimeFormat('es-ES', {
        timeZone: 'Europe/Madrid',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
    });

    const spainTimeData = formatterSpain.format(now).split(',');

    spainDateElement.textContent = spainTimeData.slice(0, 2);
    spainHoursElement.textContent = spainTimeData[2];

    // Korea time
    const formatterKorea = new Intl.DateTimeFormat('es-ES', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
    });

    const koreaTimeData = formatterKorea.format(now).split(',');

    koreaDateElement.textContent = koreaTimeData.slice(0, 2);
    koreaHoursElement.textContent = koreaTimeData[2];
}

// Update every minute
setInterval(updateTime, 60000);

updateTime();

// https://worldtimeapi.org/ for sync real-time

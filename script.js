function countdown() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);

    const currentTime = now.getTime();
    const newYearTime = newYear.getTime();

    const timeLeft = newYearTime - currentTime;

    if (timeLeft <= 0) {
        document.querySelector('.countdown-container').innerHTML = `
            <h1 class="rainbow-text">Happy New Year!</h1>
        `;
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(countdown, 1000);
countdown(); // Initial call to display the countdown immediately

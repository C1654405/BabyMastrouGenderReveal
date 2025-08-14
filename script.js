
function updateCountdown() {
    const eventDate = new Date('September 6, 2025 20:00:00 GMT+0300').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        window.location.href = 'reveal.html';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

function vote(option) {
    let boyVotes = parseInt(localStorage.getItem('boyVotes')) || 0;
    let girlVotes = parseInt(localStorage.getItem('girlVotes')) || 0;

    if (!localStorage.getItem('hasVoted')) {
        if (option === 'boy') boyVotes++;
        if (option === 'girl') girlVotes++;
        localStorage.setItem('boyVotes', boyVotes);
        localStorage.setItem('girlVotes', girlVotes);
        localStorage.setItem('hasVoted', 'true');
    }

    document.getElementById('boyVotes').innerText = boyVotes;
    document.getElementById('girlVotes').innerText = girlVotes;
}

window.onload = () => {
    document.getElementById('boyVotes').innerText = localStorage.getItem('boyVotes') || 0;
    document.getElementById('girlVotes').innerText = localStorage.getItem('girlVotes') || 0;
};

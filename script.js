const urlParams = new URLSearchParams(window.location.search);
const day = urlParams.get('day');
const dday = new Date(day);
const now = new Date();
const diffTime = Math.abs(dday - now);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const countdownText = document.getElementById('countdown-text');
countdownText.innerHTML = `${diffDays}`;

// ✈
// Function to close the side banners smoothly
function closeBanner(bannerId) {
    const banner = document.getElementById(bannerId);
    if (banner) {
        banner.classList.add('hide');
        setTimeout(() => {
            banner.style.display = 'none';
        }, 500); // Matches the CSS transition time
    }
}

// Countdown Timer for the giveaway
const giveawayDate = new Date('March 30, 2025 23:59:59').getTime();
const countdownElement = document.getElementById('countdown');

const updateCountdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = giveawayDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000)) / 1000);
        countdownElement.innerHTML = `Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownElement.innerHTML = "Giveaway Closed!";
        clearInterval(updateCountdown);
    }
}, 1000);

// Popup display logic
setTimeout(() => {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    if (popup && overlay) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }
}, 10000);

// Close popup
const closePopupBtn = document.getElementById('closePopup');
if (closePopupBtn) {
    closePopupBtn.addEventListener('click', () => {
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('overlay');
        if (popup && overlay) {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
}

// Ad trigger logic
function triggerAd() {
    console.log('CTA button clicked: Ad triggered.');
}

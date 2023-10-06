// Check if a visitor count cookie exists; if not, initialize it to 0.
let visitorCount = parseInt(getCookie("visitorCount")) || 0;

// Increment the visitor count on each page load.
visitorCount++;
setCookie("visitorCount", visitorCount);

// Function to set a cookie with a specified name and value.
function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

// Function to get the value of a cookie by name.
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Animate the counting process
const countElement = document.getElementById("count");
const startCount = 0;
const endCount = visitorCount;
const duration = 2000; // Animation duration in milliseconds
const step = Math.ceil((endCount - startCount) / (duration / 1000)); // Calculate increment per second

function animateCount() {
    let currentCount = startCount;

    const timer = setInterval(function () {
        currentCount += step;
        countElement.textContent = currentCount.toLocaleString(); // Format the count with commas
        if (currentCount >= endCount) {
            clearInterval(timer);
        }
    }, 1000);
}

animateCount(); // Start the counting animation when the page loads

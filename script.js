// script.js

// Get the video element
const video = document.getElementById('myVideo');

// Function to toggle play/pause
function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Function to toggle loop
function toggleLoop() {
    video.loop = !video.loop;
    console.log('Loop is now', video.loop ? 'enabled' : 'disabled');
}

// Add event listeners for play/pause and loop toggle
document.addEventListener('keydown', (event) => {
    if (event.key === ' ') { // Spacebar to play/pause
        togglePlayPause();
    } else if (event.key === 'l') { // 'L' key to toggle loop
        toggleLoop();
    }
});

// Example of updating video controls dynamically (optional)
video.addEventListener('play', () => {
    console.log('Video is playing');
});

video.addEventListener('pause', () => {
    console.log('Video is paused');
});

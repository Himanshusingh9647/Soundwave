// Select elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const songGrid = document.querySelector('.song-grid');
const videoModal = document.querySelector('.video-modal');
const videoPlayer = document.getElementById('video-player');
const closeButton = document.querySelector('.close-button');

// Add event listeners
searchButton.addEventListener('click', searchSongs);
searchInput.addEventListener('input', searchSongs);
songGrid.addEventListener('click', playSong);
closeButton.addEventListener('click', closeVideoModal);

// Function to search songs
function searchSongs() {
    const searchTerm = searchInput.value.toLowerCase();
    const songCards = document.querySelectorAll('.song-card');

    songCards.forEach((card) => {
        const songTitle = card.querySelector('h3').textContent.toLowerCase();

        if (songTitle.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to play song
function playSong(e) {
    if (e.target.classList.contains('play-button')) {
        const songCard = e.target.parentElement.parentElement;
        const videoUrl = songCard.getAttribute('data-video');

        // Set the video source and display the modal
        videoPlayer.src = videoUrl;
        videoModal.style.display = 'block';
        videoPlayer.play();

        // Automatically request full-screen
        setTimeout(() => {
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            } else if (videoPlayer.webkitRequestFullscreen) { // For Safari
                videoPlayer.webkitRequestFullscreen();
            } else if (videoPlayer.msRequestFullscreen) { // For IE/Edge
                videoPlayer.msRequestFullscreen();
            }
        }, 500);
    }
}

// Function to close video modal
function closeVideoModal() {
    videoModal.style.display = 'none';
    videoPlayer.src = '';
    videoPlayer.pause();
    document.exitFullscreen(); // Exit full-screen mode
}

// JavaScript to handle full-screen video play in a new tab with autoplay
document.querySelectorAll('.song-card').forEach(card => {
    card.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video');
        const newTab = window.open('', '_blank');
        newTab.document.write(`
            <html>
            <head><title>Video Player</title></head>
            <body style="margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: black;">
                <video src="${videoUrl}" autoplay controls style="width: 100%; height: 100vh;">
                    Your browser does not support the video tag.
                </video>
            </body>
            </html>
        `);
        newTab.document.close();
    });
});

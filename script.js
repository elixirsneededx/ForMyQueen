document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const audioPlayer = document.getElementById('audioPlayer');
    const toggleButton = document.getElementById('toggleButton');
    const timeBox = document.getElementById('timeBox');
    const timeText = document.getElementById('timeText');
    const quoteElement = document.getElementById('quote');
    const quoteContainer = document.getElementById('quoteContainer');
    
    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = 'Pause Music';
        } else {
            audioPlayer.pause();
            playButton.textContent = 'Play Music';
        }
    });

    toggleButton.addEventListener('click', () => {
        toggleDialog();
    });

    function toggleDialog() {
        if (document.body.classList.contains('blackout')) {
            document.body.classList.remove('blackout');
            quoteContainer.style.display = 'none';
        } else {
            document.body.classList.add('blackout');
            quoteElement.innerHTML = `You light up my life, my love. <br> 
                                     Every moment with you is a blessing. <br> 
                                     I am forever grateful for your love.`;
            quoteContainer.style.display = 'block';
        }
    }

    function updateTime() {
        const now = new Date();
        timeText.textContent = now.toLocaleTimeString();
    }

    setInterval(updateTime, 1000);
    updateTime();
});

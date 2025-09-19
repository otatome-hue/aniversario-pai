const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const iconPlay = document.getElementById('iconPlay');
const iconPause = document.getElementById('iconPause');
const seekBar = document.getElementById('seekBar');
const time = document.getElementById('time');

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        iconPlay.style.display = "none";
        iconPause.style.display = "block";
    } else {
        audio.pause();
        iconPlay.style.display = "block";
        iconPause.style.display = "none";
    }
});

audio.addEventListener('timeupdate', () => {
    seekBar.max = Math.floor(audio.duration);
    seekBar.value = Math.floor(audio.currentTime);
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);
    if (seconds < 10) seconds = '0' + seconds;
    time.textContent = `${minutes}:${seconds}`;
});

seekBar.addEventListener('input', () => {
    audio.currentTime = seekBar.value;
});

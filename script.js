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
        startPhotos();
    } else {
        audio.pause();
        iconPlay.style.display = "block";
        iconPause.style.display = "none";
        stopPhotos();
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

const photoContainer = document.getElementById("photo-container");

// lista de fotos que vão aparecer
const photos = [
    "img/image1.png",
    "img/image2.png",
    "img/image3.png",
    "img/image4.png",
    "img/image5.png",
    "img/image6.png",
    "img/image7.png",
    "img/image8.png",
    "img/image9.png",
    "img/image10.png",
    "img/image11.png",
    "img/image12.png",
    "img/image13.png",
    "img/image14.png",
    "img/image15.png",
    "img/image16.png",
    "img/image17.png",
    "img/image18.png",
    "img/image19.png",
    "img/image20.png",
    "img/image21.png",
    "img/image22.png",
    "img/image23.png",
    "img/image24.png",
    "img/image25.png",
    "img/image26.png",
    "img/image27.png",
];


let photoInterval;

function startPhotos() {
    let index = 0;
    showPhoto(photos[0]); // primeira já aparece

    photoInterval = setInterval(() => {
        index = (index + 1) % photos.length;
        if (index == 26) {
            showFinalPhoto(photos[index]);
            stopPhotos();
            clearInterval(photoInterval);
        } else {
            showPhoto(photos[index]);
        }
    }, 6400);

    console.log(index);
}

function stopPhotos() {
    clearInterval(photoInterval);
}

function showPhoto(src) {
    const img = document.createElement("img");
    img.src = src;

    // posição aleatória na tela
    img.style.left = Math.random() * 80 + "%";
    img.style.top = Math.random() * 60 + "%";
    img.classList.add("normal")

    photoContainer.appendChild(img);

    // remover depois de 12s (tempo da animação)
    setTimeout(() => {
        img.remove();
    }, 12000);
}

function showFinalPhoto(src) {
    const img = document.createElement("img");
    img.src = src;

    // cobre toda a tela
    img.style.position = "fixed";
    img.style.left = "0";
    img.style.top = "0";
    img.style.width = "100vw";
    img.style.height = "100vh";
    img.style.objectFit = "cover";
    img.style.zIndex = "9999";
    img.style.opacity = "0";
    img.style.transition = "opacity 2s ease-in-out";

    photoContainer.appendChild(img);

    // fade-in suave
    requestAnimationFrame(() => {
        img.style.opacity = "1";
    });
}


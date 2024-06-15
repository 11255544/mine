document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const songSelect = document.getElementById('songSelect');
    
    const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
    let songIndex = 0;

    function loadSong(song) {
        audio.src = song;
    }

    function playSong() {
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    }

    function pauseSong() {
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }

    function prevSong() {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSong(songs[songIndex]);
        playSong();
    }

    function nextSong() {
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songs[songIndex]);
        playSong();
    }

    playButton.addEventListener('click', () => {
        const isPlaying = playButton.innerHTML === '<i class="fas fa-pause"></i>';
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    prevButton.addEventListener('click', prevSong);
    nextButton.addEventListener('click', nextSong);

    songSelect.addEventListener('change', (e) => {
        loadSong(e.target.value);
        playSong();
    });

    // Load the first song by default
    loadSong(songs[songIndex]);
});

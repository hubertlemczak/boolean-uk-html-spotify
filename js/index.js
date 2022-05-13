var song = document.getElementById('mySong');
song.volume = 0.1;

const play = document.getElementById('play');
const pause = document.getElementById('pause');
const audio = document.getElementById('mySong');

play.addEventListener('click', () => {
  pause.classList.add('active');
  audio.play();
});
pause.addEventListener('click', () => {
  pause.classList.remove('active');
  audio.pause();
});

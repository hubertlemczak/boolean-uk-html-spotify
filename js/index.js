var song = document.getElementById('mySong');
song.volume = 0.1;

const play = document.getElementById('play');
const pause = document.getElementById('pause');

play.addEventListener('click', () => {
  pause.classList.add('active');
});
pause.addEventListener('click', () => {
  pause.classList.remove('active');
});

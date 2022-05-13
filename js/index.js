var song = document.getElementById('mySong');
song.volume = 0.1;

function toggleItem(button) {
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (e) {
      var current = this;
      for (var i = 0; i < button.length; i++) {
        if (current != button[i]) {
          button[i].classList.remove('active');
        } else if (current.classList.contains('active') === true) {
          current.classList.remove('active');
        } else {
          current.classList.add('active');
        }
      }
      e.preventDefault();
    });
  }
}
toggleItem(document.querySelectorAll('.footer-button'));

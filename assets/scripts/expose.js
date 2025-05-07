// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeImage = document.querySelector('#volume-controls img');
  const hornImage = document.querySelector('img');
  const playButton = document.querySelector('button');
  const volumeControl = document.getElementById('volume');
  

  let audio = new Audio();
  audio.volume = 50 /100; 

  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornImage.alt = selectedHorn;
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  playButton.addEventListener('click', () => {
    audio.play();
  });

  volumeControl.addEventListener('input', (event) => {
    const volumeNow = Number(event.target.value);
    if (volumeNow === 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
      volumeImage.alt = 'Volume level 0';
      audio.volume = 0;
    } else if (volumeNow < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
      volumeImage.alt = 'Volume level 1';
      audio.volume = volumeNow / 100;
    } else if (volumeNow < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
      volumeImage.alt = 'Volume level 2';
      audio.volume = volumeNow / 100;
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
      volumeImage.alt = 'Volume level 3';
      audio.volume = volumeNow / 100;  
    }
  });
}
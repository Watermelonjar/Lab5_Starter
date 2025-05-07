// explore.js

window.addEventListener('DOMContentLoaded', init);

function init () {
  const voiceSelect = document.getElementById('voice-select');
  const inputText   = document.getElementById('text-to-speak');
  const readButton  = document.querySelector('button');
  const faceImage   = document.querySelector('img');
  const synth       = window.speechSynthesis;

  let voices = [];

  function populateVoiceList () {
    voices = synth.getVoices();
    if (!voices.length) return;        
    voiceSelect.innerHTML = '';        

    const placeholder = document.createElement('option');
    placeholder.textContent = 'Select a voice';
    placeholder.disabled = placeholder.selected = true;
    voiceSelect.appendChild(placeholder);

    voices.forEach((v, i) => {
      const opt = document.createElement('option');
      opt.textContent = `${v.name} (${v.lang})`;
      opt.value = i;
      voiceSelect.appendChild(opt);
    });
  }

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  } else {
    setTimeout(populateVoiceList, 0);
  }

  readButton.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (!text) return;              

    const idx = parseInt(voiceSelect.value, 10);
    const utter = new SpeechSynthesisUtterance(text);

    if (!Number.isNaN(idx) && voices[idx]) {
      utter.voice = voices[idx];
    }

    faceImage.src = 'assets/images/smiling-open.png';
    faceImage.alt = 'Smiling face';

    utter.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Neutral face';
    });

    synth.speak(utter);
  });
}

const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error-para');

    if (!speechSynth.speaking && !enteredText.trim().length) {
        error.textContent = 'Nothing to Convert! Enter text in the text area.';
    }
    
    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        convertBtn.textContent = "Sound is Playing...";
        
        newUtter.onend = function() {
            convertBtn.textContent = "Play Converted Sound";
        };
    }
});

pauseBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    if (speechSynth.speaking && !speechSynth.paused) {
        speechSynth.pause();
        convertBtn.textContent = "Paused";
    }
});

resumeBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    if (speechSynth.paused) {
        speechSynth.resume();
        convertBtn.textContent = "Sound is Playing...";
    }
    setTimeout(() => {
        convertBtn.textContent = "Play Converted Sound"
    }, 5000);
})
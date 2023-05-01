const startButton = document.getElementById('start-button');
const transcription = document.getElementById('transcription');

// initialize the SpeechRecognition API
const recognition = new webkitSpeechRecognition();

// set the recognition settings
recognition.continuous = true;
recognition.lang = 'en-US';

// when the user speaks, check if it matches a color or Baymax and change the background if it does
recognition.onresult = function(event) {
  const transcript = event.results[event.results.length - 1][0].transcript;
  transcription.textContent += ' ' + transcript;
  
  // convert the transcript to lowercase for easier matching
  const keyword = transcript.toLowerCase();
  
  // check if the keyword matches a known color or Baymax and change the background if it does
  if (keyword === 'green') {
    document.body.style.backgroundColor = 'green';
    localStorage.setItem('background-color', 'green');
    localStorage.removeItem('background-image');
  } else if (keyword === 'blue') {
    document.body.style.backgroundColor = 'blue';
    localStorage.setItem('background-color', 'blue');
    localStorage.removeItem('background-image');
  } else if (keyword === 'red') {
    document.body.style.backgroundColor = 'red';
    localStorage.setItem('background-color', 'red');
    localStorage.removeItem('background-image');
  } else if (keyword === 'baymax') {
    document.body.style.backgroundImage = "url('https://media.tenor.com/rhyzuyeZRLwAAAAC/disney-baymax.gif')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('background-image', 'https://media.tenor.com/rhyzuyeZRLwAAAAC/disney-baymax.gif');
    localStorage.removeItem('background-color');
  }else if (keyword === 'i') {
    document.body.style.backgroundImage = "url('https://media.tenor.com/Qixy6rxsxxUAAAAC/hoshino-ai-oshi-no-ko.gif')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    localStorage.setItem('background-image', 'https://media.tenor.com/Qixy6rxsxxUAAAAC/hoshino-ai-oshi-no-ko.gif');
    localStorage.removeItem('background-color');
  }

  // add more color options or keywords here as desired
}

// start recording when the user clicks the button
startButton.addEventListener('click', function() {
  recognition.start();
});

// set the background color or image based on the stored value in local storage
const storedColor = localStorage.getItem('background-color');
if (storedColor) {
  document.body.style.backgroundColor = storedColor;
}

const storedImage = localStorage.getItem('background-image');
if (storedImage) {
  document.body.style.backgroundImage = "url('" + storedImage + "')";
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
}

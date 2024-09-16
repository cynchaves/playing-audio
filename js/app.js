// Add event listener to <element>
// Listen for click on cached <element> and on a click:
  // make sure an image has been selected
    // Get the element id and use it to create an Audio instance/element!
    // Fix its volume
    // Play the audio element!

const catImg = document.querySelector('#cat');
const catSound = new Audio('../playing-audio-in-the-browser-starter-code/assets/audio/cat.mp3');

const dogImg = document.querySelector('#dog');
const dogSound = new Audio('../playing-audio-in-the-browser-starter-code/assets/audio/dog.mp3')

catImg.addEventListener('click', () => {
    catSound.volume = .05;
    catSound.play();
});

dogImg.addEventListener('click', () => {
    dogSound.volume = .05;
    dogSound.play();
});

const notCatDiv = document.querySelector('#not-cat');
notCatDiv.addEventListener('click', (event) => {
    if (event.target.id !== 'cat') {
        let audioElement = new Audio(`../playing-audio-in-the-browser-starter-code/assets/audio/${event.target.id}.mp3`);
    audioElement.volume = .05;
    audioElement.play();
    };
});

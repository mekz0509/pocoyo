
const pocoyoImage = document.getElementById('pocoyoImage');
const danceButton = document.getElementById('danceButton');
const friendsButton = document.getElementById('friendsButton');
const laughButton = document.getElementById('laughButton');
const playButton = document.getElementById('playButton');
const studyButton = document.getElementById('studyButton');
const singButton = document.getElementById('singButton');


let currentAudio = null;


function setImageWithTimeout(imageSrc, audioSrc, durationInSeconds) {

    stopAudio();

    pocoyoImage.src = imageSrc;


    setTimeout(function () {
        pocoyoImage.src = 'images/base.png';
        stopAudio();  
    }, durationInSeconds * 1000); 


    playAudio(audioSrc, durationInSeconds);
}


function playAudio(audioSrc, durationInSeconds) {
    const audio = new Audio(`sounds/${audioSrc}.mp3`);


    audio.addEventListener('canplaythrough', function() {
        audio.play();

  
        currentAudio = audio;

        setTimeout(function () {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio = null;
            }
        }, durationInSeconds * 1000); 
    });

  
    audio.load();
}


function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
}


danceButton.addEventListener('click', () => {
    setImageWithTimeout('images/dance.gif', 'dance', 8);
});

friendsButton.addEventListener('click', () => {
    setImageWithTimeout('images/friends.gif', 'friends', 12);
});

laughButton.addEventListener('click', () => {
    setImageWithTimeout('images/laugh.gif', 'laugh', 8);
});

playButton.addEventListener('click', () => {
    setImageWithTimeout('images/play.gif', 'play', 18);
});

studyButton.addEventListener('click', () => {
    setImageWithTimeout('images/study.gif', 'study', 8);
});

singButton.addEventListener('click', () => {
    setImageWithTimeout('images/sing.gif', 'sing', 30);
});

// Add keypress event listeners to trigger button actions
document.addEventListener('keypress', (event) => {
    const key = event.key.toLowerCase();
    switch (key) {
        case 'd':
            danceButton.click();
            break;
        case 'f':
            friendsButton.click();
            break;
        case 'l':
            laughButton.click();
            break;
        case 'p':
            playButton.click();
            break;
        case 's':
            studyButton.click();
            break;
        case 'g':
            singButton.click();
            break;
    }
});

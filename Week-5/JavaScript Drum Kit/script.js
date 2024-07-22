// First Button

function audioBoom(){
    let audio = document.getElementById("audio-boom");
    audio.play();
    audio.currentTime = 0;
    triggerAnimation(document.getElementById("button-boom"));
};

function audioFirstKey(event){
    let audio = document.getElementById("audio-boom");
    let key = event.code;
    if(key === 'KeyA'){
        audio.play();
        audio.currentTime = 0;
        triggerAnimation(document.getElementById("button-boom"));
    }  
}


document.addEventListener('keydown', audioFirstKey);


// Second Button

function audioHihat(){
    let audio = document.getElementById("audio-hihat");
    audio.play();
    audio.currentTime = 0;
    triggerAnimation(document.getElementById("button-hihat"));
};

function audioSecKey(event){
    let audio = document.getElementById("audio-hihat");
    let key = event.code;
    document.getElementById("audio-hihat");
    if(key === 'KeyS'){
        audio.play();
        audio.currentTime = 0;
        triggerAnimation(document.getElementById("button-hihat"));
    }
}

document.addEventListener('keydown', audioSecKey);



// Third Button

function audioOpenhat(){
    let audio = document.getElementById("audio-openhat");
    audio.play();
    audio.currentTime = 0;
    triggerAnimation(document.getElementById("button-openhat"));
};

function audioThirdKey(event){
    let audio = document.getElementById("audio-openhat");
    let key = event.code;
    document.getElementById("audio-openhat");
    if(key === 'KeyD'){
        audio.play();
        audio.currentTime = 0;
        triggerAnimation(document.getElementById("button-openhat"));
    }
};

document.addEventListener('keydown', audioThirdKey);

// Fourth Button

function audioRide(){
    let audio = document.getElementById("audio-ride");
    audio.play();
    audio.currentTime = 0;
    triggerAnimation(document.getElementById("button-ride"));
}

function audioFourthKey(event){
    let audio = document.getElementById("audio-ride");
    let key = event.code;
    document.getElementById("audio-ride");
    if(key === 'KeyF'){
        audio.play();
        audio.currentTime = 0;
        triggerAnimation(document.getElementById("button-ride"));
    }
}

document.addEventListener('keydown', audioFourthKey);

// Fifth Button

function audioSnare(){
    let audio = document.getElementById("audio-snare");
    audio.play();
    audio.currentTime = 0;
    triggerAnimation(document.getElementById("button-snare"));
}

function audioFifthKey(event){
    let audio = document.getElementById("audio-snare");
    let key = event.code;
    document.getElementById("audio-snare");
    if(key === 'KeyG'){
        audio.play();
        audio.currentTime = 0;
        triggerAnimation(document.getElementById("button-snare"));
    }
}

document.addEventListener('keydown', audioFifthKey);

// Sixth Button

function audioTink(){
    let audio = document.getElementById("audio-tink");
    audio.play();
    audio.currentTime = 0;
    triggerAnimation(document.getElementById("button-tink"));
}

function audioSeventhKey(event){
    let audio = document.getElementById("audio-tink");
    let key = event.code;
    document.getElementById("audio-tink");
    if(key === 'KeyH'){
        audio.play();
        audio.currentTime = 0;
        triggerAnimation(document.getElementById("button-tink"));
    }
}

document.addEventListener('keydown', audioSeventhKey);
// Seventh Button

function audioTom(){
    let audio = document.getElementById("audio-tom");
    audio.play();
    audio.currentTime = 0;
    triggerAnimation(document.getElementById("button-tom"));
}

function audioSixthKey(event){
    let audio = document.getElementById("audio-tom");
    let key = event.code;
    document.getElementById("audio-tom");
    if(key === 'KeyJ'){
        audio.play();
        audio.currentTime = 0;
        triggerAnimation(document.getElementById("button-tom"));
    }
}


document.addEventListener('keydown', audioSixthKey);
fg

// Key Effects

function triggerAnimation(button){
    button.classList.add("active");
    setTimeout(() => {
        button.classList.remove("active");
    }, 1000);
}
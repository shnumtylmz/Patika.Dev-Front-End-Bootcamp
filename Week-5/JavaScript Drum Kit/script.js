// First Button

function audioBoom(){
    let audio = document.getElementById("audio-boom");
    audio.play();
    audio.currentTime = 0;
};

function audioFirstKey(event){
    let audio = document.getElementById("audio-boom");
    let key = event.code;
    document.getElementById("audio-boom");
    if(key === 'KeyA'){
        audio.play();
        audio.currentTime = 0;
    }
}

document.addEventListener('keydown', audioFirstKey);

// Second Button

function audioHihat(){
    let audio = document.getElementById("audio-hihat");
    audio.play();
    audio.currentTime = 0;
};

function audioSecKey(event){
    let audio = document.getElementById("audio-hihat");
    let key = event.code;
    document.getElementById("audio-hihat");
    if(key === 'KeyS'){
        audio.play();
        audio.currentTime = 0;
    }
}

document.addEventListener('keydown', audioSecKey);



// Third Button

function audioOpenhat(){
    let audio = document.getElementById("audio-openhat");
    audio.play();
    audio.currentTime = 0;
};

function audioThirdKey(event){
    let audio = document.getElementById("audio-openhat");
    let key = event.code;
    document.getElementById("audio-openhat");
    if(key === 'KeyD'){
        audio.play();
        audio.currentTime = 0;
    }
};

document.addEventListener('keydown', audioThirdKey);

// Fourth Button

function audioRide(){
    let audio = document.getElementById("audio-ride");
    audio.play();
    audio.currentTime = 0;
}

function audioFourthKey(event){
    let audio = document.getElementById("audio-ride");
    let key = event.code;
    document.getElementById("audio-ride");
    if(key === 'KeyF'){
        audio.play();
        audio.currentTime = 0;
    }
}

document.addEventListener('keydown', audioFourthKey);

// Fifth Button

function audioSnare(){
    let audio = document.getElementById("audio-snare");
    audio.play();
    audio.currentTime = 0;
}

function audioFifthKey(event){
    let audio = document.getElementById("audio-snare");
    let key = event.code;
    document.getElementById("audio-snare");
    if(key === 'KeyG'){
        audio.play();
        audio.currentTime = 0;
    }
}

document.addEventListener('keydown', audioFifthKey);

// Sixth Button

function audioTom(){
    let audio = document.getElementById("audio-tom");
    audio.play();
    audio.currentTime = 0;
}

function audioSixthKey(event){
    let audio = document.getElementById("audio-tom");
    let key = event.code;
    document.getElementById("audio-tom");
    if(key === 'KeyH'){
        audio.play();
        audio.currentTime = 0;
    }
}


document.addEventListener('keydown', audioSixthKey);


// FINISH

document.addEventListener('keydown', function(e){
    
    if(event.key === 'KeyA'){
        let key = event.code;
        let button = this.documentElementById("button-boom");
        button.classList.add("button:active");
        setTimeout(function(){
            button.classList.remove("button:active");
            button.click();
        }, 100);
    }
})
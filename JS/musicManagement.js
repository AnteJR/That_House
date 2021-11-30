/*
    LES FONCTIONS SUIVANTES GÈRENT LA MUSIQUE ET LES SONS
*/

/*
    PLAYKEYUP() JOUE UN SON DE CLAVIER ALÉATOIRE
*/
function playKeyType(){
    let monAudioNbr = Math.round(Math.random()*7)+1;
    document.getElementById("key"+monAudioNbr).muted = false;
    document.getElementById("key"+monAudioNbr).play();
}

function playMusic(condition){
    muteAll();
    document.getElementById(condition).muted = false;
    document.getElementById(condition).play();
    console.log(document.getElementById(condition).id)
}

function muteAll(){
    let mesMusiques = document.querySelectorAll(".monAudio");
    mesMusiques.forEach((e) => {
        e.muted = true;
    })
}
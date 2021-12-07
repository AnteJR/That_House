/*
    LES FONCTIONS SUIVANTES GÈRENT LA MUSIQUE ET LES SONS
*/

/*
    PLAYKEYUP() JOUE UN SON DE CLAVIER ALÉATOIRE
*/
function playKeyType() {
    let monAudioNbr = Math.round(Math.random() * 7) + 1;
    document.getElementById("key" + monAudioNbr).muted = false;
    document.getElementById("key" + monAudioNbr).volume = 0.2;
    document.getElementById("key" + monAudioNbr).play();
}

/*
    CETTE FONCTION LANCE LA MUSIQUE APPROPRIÉE
*/
function playMusic(condition) {
    muteAll();
    document.getElementById(condition).muted = false;
    document.getElementById(condition).play();
}

/*
    CETTE FONCTION MUTE TOUTES LES MUSIQUES. ELLE EST APPELÉE
    PAR PLAYMUSIC() POUR TOUT MUTER AVANT DE LANCER LE BON MORCEAU
*/
function muteAll() {
    let mesMusiques = document.querySelectorAll(".monAudio");
    mesMusiques.forEach((e) => {
        e.muted = true;
        e.pause();
    })
}

function hoverButton() {
    document.getElementById("btnHover").muted = false;
    document.getElementById("btnHover").play();
}

function clickButton() {
    document.getElementById("btnPress").muted = false;
    document.getElementById("btnPress").play();
}
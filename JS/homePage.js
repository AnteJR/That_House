/*
    CETTE FONCTION CHARGE LA PAGE D'ACCUEIL. CECI EST POUR
    PERMETTRE DE LANCER LES MUSIQUES ET LES SONS SANS PASSER
    PAR UN HEADER HTTP.
*/
function homePage(){
    // un peu de style
    gameDiv.style.textAlign = "center";
    document.getElementById("screenBottom").style.display = "none";
    document.getElementById("titleGame").style.fontSize = "2em";

    // on insère le texte à afficher
    gameDiv.innerHTML = `<br />
        <div class= "wobblyTxt textDiv whiteText">That House</div>
        <div class= "textDiv whiteText"> is a text-based adventure game about grief and the acceptance of one's own mortality.</div><br />
        <div class= "textDiv whiteText">This game has been developped in the context of a course on digital publishing given by Isaac Pante at the University of Lausanne, in Fall 2021.</div><br /><br />
        <input type="button" value="play game" class="buttonGo" id="buttonStartGame"/>`;

    // on crée un eventListener pour que le bouton mène au menu du jeu
    document.getElementById("buttonStartGame").addEventListener("click", function(){
        clickButton();
        document.getElementById("titleGame").style.fontSize = "1.25em";
        myGameTxt.isMenu = false;
        gameLaunch();
    });
}

homePage()
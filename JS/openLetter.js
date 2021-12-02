/*
    CETTE FONCTION SERT À L'AFFICHAGE DE LA LETTRE, DISPONIBLE DANS LA DERNIÈRE
    SCÈNE DE L'ACTE 5 ET OBLIGATOIRE À LIRE. ELLE MODIFIE LE STYLE ET LE RÉTABLIT
    UNE FOIS LA LETTRE LU.
*/
function openLetter(){
    playMusic("reading");

    // établissement du style de la page
    document.body.style.animation = "none"
    document.body.style.color = "rgb(3, 15, 26)";
    document.body.style.opacity = 1;
    document.getElementById("commandInput").value = "";
    document.getElementById("flickerDiv").style.display = "none";
    document.getElementsByClassName("gameContainer")[0].style.borderWidth = "0px";
    document.getElementById("boxAlert").style.display = "none";
    document.getElementById("screenBottom").style.display = "none";
    document.getElementById("titleGame").style.display = "none";

    gsapLetter(document.body);

    // sélectionne le texte à insérer dans la div #gameDiv et le fait (+ un bouton)
    let monTxt = myGameTxt.scenes[myGameTxt.currentScene].items[0].useTxtOpen;
    monTxt += myGameTxt.username + `</div><br/><input type="button" value="proceed" class="buttonGoBack" id="buttonGoBack"/>`;
    gameDiv.innerHTML = monTxt;

    // réduit la taille des caractères paragraphes pour cette occasion
    let mesParagraphes = document.querySelectorAll('.textDiv');
    mesParagraphes.forEach(e => {
        e.style.fontSize = "0.75em";
    });

    // on ajoute un EventListener au bouton pour revenir en arrière, en réétablissant notamment le style précédent
    document.getElementById("buttonGoBack").addEventListener("click", function(){
        clickButton();
        document.body.style.animation = "textShadowWhite 1.033s infinite"
        document.body.style.color = "white";
        document.body.style.opacity = 1;
        document.getElementById("flickerDiv").style.display = "block";
        document.getElementsByClassName("gameContainer")[0].style.borderWidth = "5px";
        document.getElementById("screenBottom").style.display = "block";
        document.getElementById("titleGame").style.display = "block";
        
        gsapLetterBack(document.body);
        myGameTxt.scenes[myGameTxt.currentScene].items[0].lookingAtLetter = false;
        actOne();
        playMusic("acceptance");
    });
    
    document.getElementById("buttonGoBack").addEventListener("mouseover", () => {
        hoverButton();
    });
}
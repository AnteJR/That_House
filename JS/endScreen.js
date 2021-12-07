/*
    LA FONCTION ENDSCREEN AFFICHE D'ABORD UNE SUITE DE TEXTES,
    PUIS LE GÉNÉRIQUE DE FIN.
 */
function endScreen(i) {
    playMusic("end");

    // on set les styles nécessaires, en désaffichang notamment la plupart de l'interface
    document.getElementById("boxAlert").style.display = "none";
    document.getElementById("screenBottom").style.display = "none";
    document.getElementById("titleGame").style.display = "none";
    document.getElementById("gameScreen").style.marginTop = "10%";
    document.getElementById("gameScreen").style.textAlign = "center";

    // on affiche le texte correspondant et un bouton à la value correspondante, qu'on inscrit dans la div #gameDiv
    let monTxt = myGameTxt.scenes[myGameTxt.currentScene].items[1].acceptTxtLetterOpen;
    let txtToDisplay = `<div class="textDiv bigTextDiv">` + monTxt[0][i];
    txtToDisplay += `</div><br/><br/><input type="button" value="${monTxt[1][i]}" class="buttonGoForward" id="buttonMoveForward"/>`
    gameDiv.innerHTML = txtToDisplay;

    // on implémente un eventListener au bouton
    document.getElementById("buttonMoveForward").addEventListener("click", function () {
        i++

        backgroundFlash();

        // si i est inférieur à 5, on relance la fonction endScreen()
        if (i <= 5) endScreen(i);

        // sinon, on lance le générique de fin
        else {
            document.getElementById("gameScreen").style.marginTop = "25px";
            txtToDisplay = `<div class="textDiv bigTextDiv">`;

            // petit bonus : si on a récuépérer le livre dans la scène 5, on a droit à une texte supplémentaire dans le générique
            if (myGameTxt.scenes[4].items[3].tookTheBook == true) {
                txtToDisplay += `"You speak of a world I knew</div><br/><div class="textDiv bigTextDiv">Before we lost the air</div><br/><div class="textDiv bigTextDiv">We all know the lie</div><br/><div class="textDiv bigTextDiv">Let it die</div><br/><div class="textDiv bigTextDiv">You speak of Paradise</div><br/><div class="textDiv bigTextDiv">Like it exists forever</div><br/><div class="textDiv bigTextDiv">They all made you believe</div><br/><div class="textDiv bigTextDiv">But I don't think I want to</div><br/><div class="textDiv bigTextDiv">Well, what's the point of life</div><br/><div class="textDiv bigTextDiv">If we can't be together?</div><br/><div class="textDiv bigTextDiv">I need you here with me</div><br/><div class="textDiv bigTextDiv">I need you to remember"</div><br/><div class="textDiv bigTextDiv">-Thornill</div><br/><br/><div class="textDiv bigTextDiv">`;
            }

            // dans tous les cas, on affiche le générique, avec un bouton pour revenir au menu home et vider le localStorage
            txtToDisplay += `Developpement: Joël Rimaz</div><br/><br/><div class="textDiv bigTextDiv">Under the direction of: Isaac Pante</div><br/><br/><div class="textDiv bigTextDiv">For the course "Digital Publications"</div><br/><br/><div class="textDiv bigTextDiv">University of Lausanne</div><br/><input type="button" value="back to menu" class="buttonGoForward" id="buttonBackHome"/>`;
            gameDiv.innerHTML = txtToDisplay;
            document.getElementById("buttonBackHome").addEventListener("click", function () {
                clickButton();
                localStorage.clear();
                gameLaunch();
                document.getElementById("titleGame").style.display = "block";
                myGameTxt.isFinished = false;
            });

            document.getElementById("buttonBackHome").addEventListener("mouseover", () => {
                hoverButton();
            });
        }
    })
}
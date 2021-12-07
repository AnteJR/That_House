/*  
    CETTE FONCTION SERT À AFFICHER UNE NOUVELLE SCÈNE
    LE NOM ACTONE() EST DÛ AU FAIT QU'À L'ORIGINE JE PENSAIS
    DEVOIR FAIRE UNE FONCTION POUR CHAQUE ACTE DE L'HISTOIRE,
    MAIS LA CRÉATION DE L'OBJET JSON MYGAMETXT A CHANGÉ LA
    FAÇON DONT JE GÈRE LA CHOSE
*/
function actOne(isNewAct) {
    if (isNewAct) document.getElementById("totalScore").innerHTML = myGameTxt.nbrInputs;
    // on revient en haut de la page
    window.scrollTo(0, 0);

    // on vérifie les couleurs et l'accès aux fonctionnalités bonus, qui se débloquent à un nouvel acte
    inspectColor(parseInt(myGameTxt.currentAct));

    let thisAct = myGameTxt.currentAct;
    let maScene = myGameTxt.scenes[myGameTxt.currentScene];
    let monTxt = "";
    let mesTxt = maScene.texts

    // CONDITION PRINCIPALE : si c'est la 7ème scène (en partant de 0)
    if (myGameTxt.currentScene == 6) {
        // on aligne le texte au centre
        gameDiv.style.textAlign = "center";

        document.getElementById("screenBottom").style.display = "none";

        // on boucle doublement pour afficher le bon texte
        for (let i = 0; i < mesTxt.length; i++) {
            for (let j = 0; j < mesTxt[i].text.length; j++) {
                // si l'id du tableau "texts" correspond au numéro de l'acte actuel
                if (mesTxt[i].id == thisAct) {
                    // on inscrit le fait que ce soit un titre
                    if (mesTxt[i].text[j][1] == true) {
                        monTxt += `<br/><div class = "titleDiv whiteText">`;
                    }
                    // on inscrit le fait que ce soit un sous-titre
                    else {
                        monTxt += `<div class = "sadWobble textDiv whiteText">`;
                    }
                    // on inscrit du texte dans puis clos la div ouverte et au rajoute un retour
                    monTxt += mesTxt[i].text[j][0] + `</div><br/>`;
                }
            }
        }

        // au texte généré dans la boucle précédente, on ajoute un retour et un bouton, le tout est injecté dans l'innerHTML
        monTxt += `<br/><input type="button" value="proceed" class="buttonGo" id="buttonGo"/>`;
        gameDiv.innerHTML = monTxt;

        // on attribue un eventListener au bouton #buttonGo pour accéder à la scène 0 de l'acte actuel
        document.getElementById("buttonGo").addEventListener("click", function () {
            document.getElementById("screenBottom").style.display = "block";
            myGameTxt.currentScene = 0;
            actOne(true);
            clickButton();
            document.getElementById("scoreZ").style.display = "block";
            document.getElementById("scoreCurrent").innerHTML = (myGameTxt.mesInputs.length - myGameTxt.nbrInputs) * (-1);
        });

        document.getElementById("buttonGo").addEventListener("mouseover", () => {
            hoverButton();
        });
    }

    // CONDITION PRINCIPALE : si c'est la 8ème scène (en partant de 0)
    else if (myGameTxt.currentScene == 7) {
        gameDiv.style.textAlign = "center";
        monTxt = `<br/><div class="titleDiv whiteText">${myGameTxt.scenes[7].title}</div><br/><div class = "sadWobble textDiv whiteText">${myGameTxt.scenes[7].text1}</div><br/><div class = "sadWobble textDiv whiteText">${myGameTxt.scenes[7].text2}</div><br/><br/><form id="maForm" autocomplete="off"><input type="text" placeholder="~~enter your name here~~" class="inputCommand" id="monUsername"/><br/><br/><input type="submit" value="Confirm" class="buttonGo submitName" id="buttonStart"/></form>`;

        gameDiv.innerHTML = monTxt;

        // on attribue un eventListener au bouton #buttonStart pour accéder à la scène 0 de l'acte actuel
        document.getElementById("maForm").addEventListener("submit", function (e) {
            clickButton();
            e.preventDefault();
            if (document.getElementById("monUsername").value != "") {
                myGameTxt.username = document.getElementById("monUsername").value;
                localStorage.username = document.getElementById("monUsername").value;
                localStorage.act = 0;
                document.getElementsByClassName("bottomScreen")[0].style.display = "block";
                myGameTxt.currentScene = 6;
                actOne(true);
            }
        });

        document.getElementById("maForm").addEventListener("mouseover", () => {
            hoverButton();
        });
    }

    // CONDITION PRINCIPALE : si ce n'est pas la 7ème scène (en partant de 0) --> donc si c'est la scène 0 à 6
    else {

        // on aligne le texte à gauche
        gameDiv.style.textAlign = "left";

        // on boucle pour sélectionner le texte à afficher, selon un set de condition
        for (let i = 0; i < mesTxt.length; i++) {

            // si le texte est décrit comme regular
            if (mesTxt[i][1] == "regular") {
                // s'il est true ; c'est-à-dire, s'il est interactif
                if (mesTxt[i][2] == true) {
                    monTxt += `<div class = "wobblyTxt textDiv interactiveText whiteText">`;
                }
                // s'il est false ; c'est-à-dire, s'il n'est pas interactif
                else {
                    monTxt += `<div class = "textDiv whiteText">`;
                }
                monTxt += mesTxt[i][0] + `</div>`;
            }

            // si le texte est décrit comme angry, et si on est à l'acte 2 ou plus (en partant de 0)
            if (mesTxt[i][1] == "angry" && thisAct >= 1) {
                // s'il est true ; c'est-à-dire, s'il est interactif
                if (mesTxt[i][2] == true) {
                    monTxt += `<div class = "angerWobble textDiv iAmAnger interactiveText">`;
                }
                // s'il est false ; c'est-à-dire, s'il n'est pas interactif
                else {
                    monTxt += `<div class = "textDiv iAmAnger">`;
                }
                monTxt += mesTxt[i][0] + `</div>`;
            }

            // si le texte est décrit comme bargain, et si on est à l'acte 3 ou plus (en partant de 0)
            if (mesTxt[i][1] == "bargain" && thisAct >= 2) {
                // s'il est true ; c'est-à-dire, s'il est interactif
                if (mesTxt[i][2] == true) {
                    monTxt += `<div class = "bargainWobble textDiv iAmBargain interactiveText">`;
                }
                // s'il est false ; c'est-à-dire, s'il n'est pas interactif
                else {
                    monTxt += `<div class = "textDiv iAmBargain">`;
                }
                monTxt += mesTxt[i][0] + `</div>`;
            }

            // si le texte est décrit comme sad, et si on est à l'acte 4 ou plus (en partant de 0)
            if (mesTxt[i][1] == "sad" && thisAct >= 3) {
                // s'il est true ; c'est-à-dire, s'il est interactif
                if (mesTxt[i][2] == true) {
                    monTxt += `<div class = "sadWobble textDiv iAmDepression interactiveText">`;
                }
                // s'il est false ; c'est-à-dire, s'il n'est pas interactif
                else {
                    monTxt += `<div class = "textDiv iAmDepression">`;
                }
                monTxt += mesTxt[i][0] + `</div>`;
            }

            // si le texte est décrit comme accept, et si on est à l'acte 5 (en partant de 0)
            if (mesTxt[i][1] == "accept" && thisAct >= 4) {
                // s'il est true ; c'est-à-dire, s'il est interactif
                if (mesTxt[i][2] == true) {
                    monTxt += `<div class = "acceptanceWobble textDiv iAmAcceptance interactiveText">`;
                }
                // s'il est false ; c'est-à-dire, s'il n'est pas interactif
                else {
                    monTxt += `<div class = "textDiv iAmAcceptance">`;
                }
                monTxt += mesTxt[i][0] + `</div>`;
            }
        }
        // enfin, on insère le texte généré dans la div prévue pour les textes du jeu
        gameDiv.innerHTML = monTxt;
    }
}
/* CE DOCUMENT CONTIENT 4 FONCTIONS, DONT 2 IMBRIQUÉE DANS UNE AUTRE */

/*
    LA PREMIÈRE FONCTION EST APPELÉE QUAND ON VALIDE UN INPUT
    AVEC UNE COMMANDE. SON BUT EST DE RÉCUPÉRER LE CONTENU DE
    L'INPUT, L'INTERPRÉTER ET L'AFFICHER DANS UNE ALERT CUSTOM.
 */
let monInterval2;
function displayAlert(text){
    let monAlert = document.getElementById("boxAlert");
    let maDiv = document.getElementById("alertTxt");
    let command = text.split(" ");
    let textToDisplay = "";

    if(text.toLowerCase() != "use letter" && text.toLowerCase() != "accept screen") alertAppear(monAlert);

    // on affiche la div qui compose l'alert
    monAlert.style.display = "block";

    // on vide le contenu de l'alert si elle en avait
    maDiv.innerHTML = "";

    // on ajoute un addEventListener au bouton qui apparaît dans la div
    document.getElementById("alertButton").addEventListener("click", () => {
        document.getElementById("boxAlert").style.display = "none";
        maDiv.innerHTML = "";
        
        clickButton();
    });
    
    document.getElementById("alertButton").addEventListener("mouseover", () => {
        hoverButton();
    });

    // CONDITION SPÉCIALE : si on entre la commande "use letter" à la scène 6 de l'acte 5 (en partant de 0)
    if (myGameTxt.currentAct >= 4 && myGameTxt.currentScene >= 5 && text == "use letter"){
        // on lance la fonction openLetter(), qui a un affichage spécial
        myGameTxt.scenes[myGameTxt.currentScene].items[0].lookingAtLetter = true;
        myGameTxt.scenes[myGameTxt.currentScene].items[0].letterRead = true;
        openLetter();
    }
    // CONDITION SPÉCIALE : sinon on définit textToDisplay en appelant la fonction findText() avec comme argument la variable command
    else {
        textToDisplay = `<div class = "whiteText" id = "monTxtAlert">` + findText(command) + "</div";
    }

    maDiv.innerHTML = textToDisplay;
    let maDivTxt = document.getElementById("monTxtAlert");
    let monTxt = maDivTxt.textContent;
    maDivTxt.innerHTML = "";
    
    // set de variables utiles pour la fonction txtDisplay()
    let txtFrag = monTxt.split("");
    let i = txtFrag.length;
    let j = 0;
    let l = i;
    let interval = Math.round(Math.random()*25)+15;

    txtDisplay();
    playKeySound();

    /*
        LA FONCTION TXTTODISPLAY AFFICHE CARACTÈRE PAR CARACTÈRE
        LE TEXTE FRAGMENTÉ DE TXTFRAG, QUI A ÉTÉ GÉNÉRÉ PAR FINDTEXT().
    */
    function txtDisplay(){
        // on configure un timeout pour qu'il y a du temps entre l'affichage de chaque caractère
        setTimeout(function(){ 
            if (i>0){
                // on insère dans la maDiv le caractère, allant du premier au dernier
                maDivTxt.innerHTML += txtFrag[j];
                
                j++;
                i--;
                txtDisplay();
            }
        },interval);
    }

    function playKeySound(){
        clearInterval(monInterval2);
        monInterval2 = setInterval(() => {
            if(l>0){
                if(l%2 == 0){
                    let canPlaySound = false;
                    if(myGameTxt.currentScene != 5) {
                        canPlaySound = true;
                    }
                    else{
                        if(!myGameTxt.scenes[myGameTxt.currentScene].items[0].lookingAtLetter && !myGameTxt.isFinished) canPlaySound = true;
                    }
                    
                    if(canPlaySound) playKeyType();
                }
                l--
            }
            else{
                clearInterval(monInterval2);
            }
        }, interval)
    }
}

/* 
    LA DEUXIÈME FONCTIONS SERT À GÉNÉRER LE TEXTE QUI DEVRA
    ÊTRE AFFICHÉ DANS L'ALERT. LA FONCTION PREND COMME ARGUMENT
    COMMANDITEM, QUI EST L'ARRAY COMPOSÉ PAR LE SPLIT À L'ESPACEMENT
    DU CONTENU DE L'INPUT.
*/
function findText(commandItem){
    let textAlert = "";
    let maScene = myGameTxt.currentScene;
    let monItem = myGameTxt.scenes[maScene].items;
    let maCommande = commandItem[0].toLowerCase();

    // CONDITION PRINCIPALE : si maCommade est "leave"
    if (maCommande == "leave"){
        // on récupère le dernier objet de l'array d'objet monItem
        let leaveItem = monItem[(monItem.length-1)];

        // le texte à afficher dans l'alert est récupéré dans l'objet JSON myGameTxt
        textAlert = leaveItem.leftTrue;

        // CONDITION SECONDAIRE : si la scène vaut 0 et que l'on ne peut pas leave, on indique qu'on ne peut pas
        if (maScene == 0 && !leaveItem.canLeave){
            textAlert = leaveItem.leftFalse;
        }

        // CONDITION SECONDAIRE : si la scène vaut 0 ET que l'on peut leave ET que l'acte actuel est l'acte 1 ou 2 (en partant de 0)
        else if (maScene == 0 && leaveItem.canLeave && myGameTxt.currentAct <= 1){
            nextActPlease(1);
            playMusic("anger");
        }

        // CONDITION SECONDAIRE : si la scène vaut entre 1 et 3 (entre 2 et 4 en partant de 0)
        else if (maScene == 1 || maScene == 2 || maScene == 3){
            // on indique que la scène actuelle diminue d'1 ; on revient en arrière dans les scènes
            myGameTxt.currentScene = maScene-1;
            actOne();

            // CONDITION TERTIAIRE : si la scène vaut 3 et l'acte 1 (acte 2, scène 4 en partant de 0)
            if (maScene == 3 && myGameTxt.currentAct == 1){
                nextActPlease(2);
                playMusic("bargain");
            }
            // CONDITION TERTIAIRE : si la scène vaut 2 et l'acte 2 (acte 3, scène 3 en partant de 0)
            else if (maScene == 2 && myGameTxt.currentAct == 2){
                nextActPlease(3);
                playMusic("depression");
            }
        }

        // CONDITION SECONDAIRE : si la scène vaut 0 et que l'on ne peut pas leave
        else if (maScene == 4){
            // on indique que la scène actuelle diminue de 2 ; on revient en arrière dans les scènes
            myGameTxt.currentScene = maScene-2;
            actOne();
        }

        /*
            LA FONCTION NEXTACTPLEASE() PARAMÈTRE LE PASSAGE À UN NOUVEL ACTE.
        */
        function nextActPlease(newAct){
            myGameTxt.scenes[0].items[2].canLeave = false;

            // on incrémente le numéro de l'acte et set la scène à 6
            myGameTxt.currentAct = myGameTxt.currentAct+1;
            myGameTxt.currentScene = 6;

            // on désaffiche l'alert et on insère le texte normalement prévu à l'alert dans la div gameDiv, qui est centrée
            document.getElementById("boxAlert").style.display = "none";
            textAlert = `<br/><div class="textDiv whiteText">`+leaveItem.leftTrue
            textAlert += `</div><br/><br/><input type="button" value="save and continue" class="buttonGoForward" id="buttonNewAct"/>`
            gameDiv.innerHTML = textAlert;
            gameDiv.style.textAlign = "center";

            // on paramètre un eventListener pour le bouton, pour passer à l'acte suivant et sauvegarder dans le localStorage
            document.getElementById("buttonNewAct").addEventListener("click", function(){
                localStorage.act = newAct;
                actOne();
                clickButton();
            });
    
            document.getElementById("buttonNewAct").addEventListener("mouseover", () => {
                hoverButton();
            });
        }
    }

    // CONDITION PRINCIPALE : si maCommade est dif férente de "leave"
    else if (maCommande == "false") {
        textAlert = "There seems to be a problem with your input. Please try again."
    }

    // CONDITION PRINCIPALE : si maCommade est dif férente de "leave"
    else {
        // on parcours la liste des items pour trouver le bon. Une fois trouver, on a un set de conditions principales et secondaires
        monItem.forEach((e) => {
            if (e.name == commandItem[1].toLowerCase()){
                
                // si maCommande est "look"
                if (maCommande == "look"){

                    // si l'attribut isOpened est false, on affiche le texte standard
                    if (!e.isOpened) textAlert = e.lookTxt;

                    // si l'attribut isOpened est true, on affiche le texte spécial
                    else if (e.isOpened){
                        textAlert = e.lookTxtOpen;

                        // en plus, ma scène vaut 2 et qu'on "look postcard", on change le paramètre canPressBtn au bon endroit
                        if (maScene == 2 && e.name == "postcard") monItem[e.useCanPressBtn].canPressBtn = true;
                    }

                    // si utiliser "look" débloque quelque chose, débloquer l'objet correspondant
                    if (e.lookOpens >= 0) monItem[e.lookOpens].isOpened = true;
                }
                
                // si maCommande est "use"
                else if (maCommande == "use"){

                    // si l'attribut isOpened est false, on affiche le texte standard
                    if (!e.isOpened) textAlert = e.useTxt;

                    // si l'attribut isOpened est true, on affiche le texte spécial
                    else if (e.isOpened){
                        textAlert = e.useTxtOpen;

                        // si useWin est true (si utiliser "use" fait passer à la scène suivante), passer à la scène suivante
                        if (e.useWin) {
                            myGameTxt.currentScene = maScene+1; 
                            actOne();
                        }

                        // set de condition speciales
                        if (maScene == 2 && e.name == "desk" && e.canPressBtn == true && e.gotKey == true){
                            textAlert = e.useTxtBtn; 
                            monItem[e.btnOpens].isOpened = true;
                        }
                        if (maScene == 2 && e.name == "desk" && e.gotKey == false) e.gotKey = true;
                        if (maScene == 3 && e.name == "bedlamp") monItem[4].isOpened = true;
                        if (maScene == 3 && e.name == "glass") myGameTxt.scenes[e.useGlassOpens[0]].items[e.useGlassOpens[1]].isOpened = true;
                        if (maScene == 4 && e.name == "altar") e.bledOut = true;
                        if (maScene == 4 && e.name == "book") e.tookTheBook = true;
                    }

                    // si utiliser "look" débloque quelque chose, débloquer l'objet correspondant
                    if (e.useOpens >= 0) monItem[e.useOpens].isOpened = true;
                }
                
                // si maCommande est "go"
                else if (maCommande == "go"){

                    // si l'attribut isOpened est false, on affiche le texte standard
                    if (!e.isOpened) textAlert = e.goTxt;

                    // si l'attribut isOpened est true, on affiche le texte spécial
                    else if (e.isOpened){
                        textAlert = e.goTxtOpen;

                        // si goWin est true (si utiliser "go" fait passer à la scène suivante), passer à la scène suivante
                        if (e.goWin){
                            myGameTxt.currentScene = maScene+1;
                            actOne();
                        }

                        // set de condition speciales
                        if (maScene == 1) myGameTxt.scenes[0].items[2].canLeave = true;
                        if (maScene == 2 && e.name == "bookshelf" && e.isOpened == true && e.isDoorOpen == true){
                            textAlert = e.goTxtDoorOpen
                            myGameTxt.currentScene = maScene+2;
                            actOne();
                        }
                    }
                }
                
                // si maCommande est "hit", on affiche son texte
                else if (maCommande == "hit" && myGameTxt.currentAct >= 1){
                    textAlert = e.hitTxt;

                    // si hitWin est true (si utiliser "hit" fait passer à la scène suivante), passer à la scène suivante
                    if (e.hitWin){
                        myGameTxt.currentScene = maScene+1;
                        actOne();
                    }

                    // set de condition speciales
                    if (maScene == 2 && e.name == "desk") e.useOpens = 0;
                    if (maScene == 3 && e.name == "bedlamp") monItem[4].isOpened = true;

                    // si utiliser "hit" débloque quelque chose, débloquer l'objet correspondant
                    if (e.hitOpens >= 0) monItem[e.hitOpens].isOpened = true;
                }
                
                // si maCommande est "inspect", on affiche son texte
                else if (maCommande == "inspect" && myGameTxt.currentAct >= 2){
                    textAlert = e.inspectTxt;

                    // si utiliser "inspect" débloque quelque chose, débloquer l'objet correspondant
                    if (e.inspectOpens >= 0){
                        monItem[e.inspectOpens].isOpened = true;
                    }
                }
                
                // si maCommande est "wait", on affiche son texte
                else if (maCommande == "wait" && myGameTxt.currentAct >= 3){
                    textAlert = e.waitTxt;

                    // set de condition speciales
                    if (maScene == 2 && e.name == "bookshelf") e.isDoorOpen = true;
                    if (maScene == 4 && e.name == "altar" && e.bledOut == true){
                        if (myGameTxt.currentAct == 3){
                            playMusic("acceptance");
                            myGameTxt.scenes[0].items[2].canLeave = false;
                
                            // on incrémente le numéro de l'acte et set la scène à 6
                            myGameTxt.currentAct = 4;
                            myGameTxt.currentScene = 6;
                
                            // on désaffiche l'alert et on insère le texte normalement prévu à l'alert dans la div gameDiv, qui est centrée
                            document.getElementById("boxAlert").style.display = "none";
                            textAlert = `<br/><div class="textDiv whiteText">` + e.waitTxtBledOut;
                            textAlert += `</div><br/><br/><input type="button" value="save and continue" class="buttonGoForward" id="buttonNewAct"/>`
                            gameDiv.innerHTML = textAlert;
                            gameDiv.style.textAlign = "center";
                
                            // on paramètre un eventListener pour le bouton, pour passer à l'acte suivant et sauvegarder dans le localStorage
                            document.getElementById("buttonNewAct").addEventListener("click", function(){
                                localStorage.act = myGameTxt.currentAct;
                                actOne();
                                clickButton();
                            });
    
                            document.getElementById("buttonNewAct").addEventListener("mouseover", () => {
                                hoverButton();
                            });
                        }
                        else if (myGameTxt.currentAct == 4){
                            textAlert = e.waitTxtBledOut;
                            myGameTxt.currentScene = myGameTxt.currentScene+1;
                            actOne();
                        }
                    }

                    // si utiliser "wait" débloque quelque chose, débloquer l'objet correspondant
                    if (e.waitOpens >= 0){
                        monItem[e.waitOpens].isOpened = true;
                    }
                }
                
                // si maCommande est "accept", on affiche son texte
                else if (maCommande == "accept" && myGameTxt.currentAct >= 4){
                    textAlert = e.acceptTxt;

                    // si acceptWin est true (si utiliser "accept" fait passer à la scène suivante), passer à la scène suivante
                    if (e.acceptWin){
                        myGameTxt.currentScene = maScene+1;
                        actOne();
                    }

                    // set de condition speciales
                    if (maScene == 2 && e.name == "bookshelf") e.isDoorOpen = true;
                    if (maScene == 4 && e.name == "altar"){
                        myGameTxt.currentScene = myGameTxt.currentScene+1;
                        actOne();
                    }
                    if (maScene == 5 && e.name == "screen" && monItem[0].letterRead == true){
                        endScreen(0);
                        myGameTxt.isFinished = true;
                    }
                }
                
                // si maCommande n'est pas reconnu
                else {
                    textAlert = "Command not recognized or unavailable.";
                }
            }
        });
                
        // si l'objet entré dans l'input ne correspond à aucun myGamTxt.scenes[myGametxt.currentScene].items
        if (textAlert == ""){
            textAlert = "Object not recognized";
        }
    }

    // return textAlert pour que cela puisse être utilisé dans la fonction displayAlert()
    return textAlert;
}
function displayAlert(text){
    let maDiv = document.getElementById("alertTxt");
    let monAlert = document.getElementById("boxAlert");

    /* ADDEVENTLISTENER POUR FERMER LA BOITE DE DIALOGUE */
    let monBtn = document.getElementById("alertButton");
    monBtn.addEventListener("click", () => {
        document.getElementById("boxAlert").style.display = "none";
        maDiv.innerHTML = "";
    })

    maDiv.innerHTML = "";
    monAlert.style.display = "block";

    /* TROUVER LE TEXTE A AFFICHER */
    let command = text.split(" ");
    let textToDisplay = findText(command);
    
    let txtFrag = textToDisplay.split("");
    let i = txtFrag.length;
    let j = 0;
    let interval = Math.round(Math.random()*25)+15;

    txtDisplay();

    function txtDisplay(){
        setTimeout(function(){
            if(i>0){
                maDiv.innerHTML += txtFrag[j];
                j++;
                i--;
                txtDisplay();
            }
        },interval);
    }
}

/* */
function findText(commandItem){
    let textAlert = "";
    let maScene = myGameTxt.currentScene;
    let monItem = myGameTxt.scenes[maScene].items;
    let maCommande = commandItem[0].toLowerCase();
    /* SI ON LEAVE, ON A UN SET DE CONDITIONS */
    if(maCommande == "leave"){
        let leaveItem = monItem[(monItem.length-1)];
        textAlert = leaveItem.leftTrue;
        if(maScene == 0 && !leaveItem.canLeave){
            textAlert = leaveItem.leftFalse;
        }
        else if(maScene == 0 && leaveItem.canLeave && myGameTxt.currentAct <= 1){
            myGameTxt.scenes[0].items[2].canLeave = false;
            myGameTxt.currentAct = myGameTxt.currentAct+1;
            myGameTxt.currentScene = 6;
            actOne();
        }
        if(maScene != 0 && (maScene == 1 || maScene == 2 || maScene == 3)){
            myGameTxt.currentScene = maScene-1;
            actOne();
        }
        else if(maScene == 4){
            myGameTxt.currentScene = maScene-2;
        }
    }
    else{
        /* PARCOURS LA LISTE DES ITEMS POUR TROUVER CELUI SELECTIONNE PAR LA COMMANDE */
        monItem.forEach((e) => {
            /* UNE FOIS TROUVÉ, ON REGARDE QUELLE COMMANDE A ÉTÉ ENTRÉE, AVEC DES CONDITIONS GÉNÉRIQUES ET SPÉCIFIQUES */
            if(e.name == commandItem[1].toLowerCase()){
                // SI ON LOOK
                if(maCommande == "look"){
                    if(!e.isOpened){
                        textAlert = e.lookTxt;
                    }
                    else if(e.isOpened){
                        textAlert = e.lookTxtOpen;
                        /* CONDITIONS SPECIALES */
                        if(maScene == 2 && e.name == "postcard"){
                            monItem[e.useCanPressBtn].canPressBtn = true;
                        }
                    }
                    if(e.lookOpens >= 0){
                        monItem[e.lookOpens].isOpened = true;
                    }
                }
                // SI ON USE
                else if(maCommande == "use"){
                    if(!e.isOpened){
                        textAlert = e.useTxt;
                    }
                    else if(e.isOpened){
                        textAlert = e.useTxtOpen;
                        if(e.useWin == true){
                            myGameTxt.currentScene = maScene+1;
                            actOne();
                        }
                        /* CONDITIONS SPECIALES */
                        if(maScene == 2 && e.name == "desk" && e.canPressBtn == true && e.gotKey == true){
                            textAlert = e.useTxtBtn;
                            monItem[e.btnOpens].isOpened = true;
                        }
                        if(maScene == 2 && e.name == "desk" && e.gotKey == false){
                            e.gotKey = true;
                        }
                        if(maScene == 3 && e.name == "bedlamp"){
                            monItem[4].isOpened = true;
                        }
                        if(maScene == 3 && e.name == "glass"){
                            myGameTxt.scenes[e.useGlassOpens].itmes[e.useGlassOpens].isOpened = true;
                        }
                    }
                    if(e.useOpens >= 0){
                        monItem[e.useOpens].isOpened = true;
                    }
                }
                // SI ON GO
                else if(maCommande == "go"){
                    if(!e.isOpened){
                        textAlert = e.goTxt;
                    }
                    else if(e.isOpened){
                        textAlert = e.goTxtOpen;
                        if(e.goWin == true){
                            myGameTxt.currentScene = maScene+1;
                            actOne();
                        }
                        /* CONDITION SPECIALE */
                        if(maScene == 1){
                            myGameTxt.scenes[0].items[2].canLeave = true;
                        }
                        if(maScene == 2 && e.name == "bookshelf" && isOpened == true && e.isDoorOpen == true){
                            textAlert = e.goTxtDoorOpen
                            myGameTxt.currentScene = maScene+2;
                            actOne();
                        }
                    }
                }
                // SI ON HIT
                else if(maCommande == "hit" && myGameTxt.currentAct >= 1){
                    textAlert = e.hitTxt;
                    if(e.hitWin == true){
                        myGameTxt.currentScene = maScene+1;
                        actOne();
                    }
                    if(e.hitOpens >= 0){
                        monItem[e.hitOpens].isOpened = true;
                        /* CONDITIONS SPECIFIQUES */
                        if(maScene == 2 && e.name == "desk"){
                            e.useOpens = 0;
                        }
                        if(maScene == 4 && e.name == "altar"){
                            //prendre le livre débloque un panneau supplémentaire dans le générique de fin
                            e.bledOut = true;
                        }
                        if(maScene == 4 && e.name == "book"){
                            //prendre le livre débloque un panneau supplémentaire dans le générique de fin
                            e.tookTheBook = 0;
                        }
                    }
                }
                // SI ON INSPECT
                else if(maCommande == "inspect" && myGameTxt.currentAct >= 2){
                    textAlert = e.inspectTxt;
                    if(e.inspectWin == true){
                        myGameTxt.currentScene = maScene+1;
                        actOne();
                    }
                    if(e.inspectOpens >= 0){
                        monItem[e.inspectOpens].isOpened = true;
                    }
                }
                // SI ON WAIT
                else if(maCommande == "wait" && myGameTxt.currentAct >= 3){
                    textAlert = e.waitTxt;
                    if(maScene == 2 && e.name == "bookshelf" && e.isDoorOpen == false){
                        isDoorOpen = true;
                    }
                    if(e.waitWin == true){
                        myGameTxt.currentScene = maScene+1;
                        actOne();
                    }
                    if(e.waitOpens >= 0){
                        monItem[e.waitOpens].isOpened = true;
                    }
                    /* CONDITIONS SPECIFIQUES */
                    if(maScene == 2 && e.name == "bookshelf"){
                        e.isDoorOpen = true;
                    }
                    if(maScene == 4 && e.name == "altar" && e.bledOut == true){
                        textAlert = e.waitTxtBledOut;
                        if(myGameTxt.currentAct == 3){
                            myGameTxt.scenes[0].items[2].canLeave = false;
                            myGameTxt.currentAct = myGameTxt.currentAct+1;
                            myGameTxt.currentScene = 6;
                            actOne();
                        }
                        if(myGameTxt.currentAct == 4){
                            myGameTxt.currentScene = myGameTxt.currentScene+1;
                            actOne();
                        }
                    }
                }
                // SI ON ACCEPT
                else if(maCommande == "accept" && myGameTxt.currentAct >= 4){
                    textAlert = e.acceptTxt;
                    if(e.acceptWin == true){
                        myGameTxt.currentScene = maScene+1;
                        actOne();
                    }
                    /* CONDITIONS SPECIFIQUES */
                    if(maScene == 2 && e.name == "bookshelf"){
                        e.isDoorOpen = true;
                    }
                    if(maScene == 4 && e.name == "altar"){
                        if(myGameTxt.currentAct == 4){
                            myGameTxt.currentScene = myGameTxt.currentScene+1;
                            actOne();
                        }
                    }
                }
                // SI LA COMMANDE N'EST PAS RECONNUE
                else{
                    textAlert = "Command not recognized or unavailable.";
                }
            }
        });
        //SI L'ITEM N'EST PAS RECONNU
        if(textAlert == ""){
            textAlert = "Object not recognized";
        }
    }
    return textAlert;
}
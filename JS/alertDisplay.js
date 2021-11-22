function displayAlert(text){
    let maDiv = document.getElementById("alertTxt");
    let monAlert = document.getElementById("boxAlert");
    let monBtn = document.getElementById("alertButton");
    monBtn.addEventListener("click", () => {
        document.getElementById("boxAlert").style.display = "none";
    })

    maDiv.innerHTML = "";
    monAlert.style.display = "block";

    /* TROUVER LE TEXTE A AFFICHER */
    let command = text.split(" ");
    let textToDisplay = findText(command);
    
    let txtFrag = textToDisplay.split("");
    let i = txtFrag.length;
    let j = 0;
    let interval = Math.round(Math.random()*25)+35;

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

function findText(commandItem){
    let textAlert = "";
    let monItem = myGameTxt.scenes[myGameTxt.currentScene].items;
    let maCommande = commandItem[0].toLowerCase();
    monItem.forEach((e) => {
        if(e.name == commandItem[1].toLowerCase()){
            if(maCommande == "look"){
                textAlert = e.lookTxt;
                if(e.lookWin == true){
                    myGameTxt.currentScene = myGameTxt.currentScene+1;
                    actOne();
                }
            }
            else if(maCommande == "use"){
                textAlert = e.useTxt;
                if(e.useWin == true){
                    myGameTxt.currentScene = myGameTxt.currentScene+1;
                    actOne();
                }
                if(e.useOpens){
                    e.isOpened = true;
                }
            }
            else if(maCommande == "go"){
                if(!e.isOpened){
                    textAlert = e.goTxt;
                }
                else if(e.isOpened){
                    textAlert = e.goTxtOpen;
                    myGameTxt.currentScene = myGameTxt.currentScene+1;
                    actOne();
                }
            }
            else if(maCommande == "hit" && myGameTxt.currentAct >= 1){
                textAlert = e.hitTxt;
                if(e.hitWin == true){
                    myGameTxt.currentScene = myGameTxt.currentScene+1;
                    actOne();
                }
            }
            else if(maCommande == "inspect" && myGameTxt.currentAct >= 2){
                textAlert = e.inspectTxt;
                if(e.inspectWin == true){
                    myGameTxt.currentScene = myGameTxt.currentScene+1;
                    actOne();
                }
            }
            else if(maCommande == "wait" && myGameTxt.currentAct >= 3){
                textAlert = e.waitTxt;
                if(e.waitWin == true){
                    myGameTxt.currentScene = myGameTxt.currentScene+1;
                    actOne();
                }
            }
            else if(maCommande == "accept" && myGameTxt.currentAct >= 4){
                textAlert = e.acceptTxt;
                if(e.acceptWin == true){
                    myGameTxt.currentScene = myGameTxt.currentScene+1;
                    actOne();
                }
            }
            else{
                textAlert = "Command not recognized or unavailable.";
            }
        }
    });
    if(textAlert == ""){
        textAlert = "Object not recognized";
    }
    return textAlert;
}
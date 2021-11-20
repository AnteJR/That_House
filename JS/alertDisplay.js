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
    let interval = Math.round(Math.random()*50)+50;

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
    monItem.forEach((e) => {
        if(e.name == commandItem[1].toLowerCase()){
            if(commandItem[0].toLowerCase() == "look"){
                textAlert = e.lookTxt;
            }
            else if(commandItem[0].toLowerCase() == "use"){
                textAlert = e.useTxt;
            }
            else if(commandItem[0].toLowerCase() == "go"){
                textAlert = e.goTxt;
            }
            else if(commandItem[0].toLowerCase() == "hit" && myGameTxt.currentAct >= 1){
                textAlert = e.hitTxt;
            }
            else if(commandItem[0].toLowerCase() == "inspect" && myGameTxt.currentAct >= 2){
                textAlert = e.inspectTxt;
            }
            else if(commandItem[0].toLowerCase() == "wait" && myGameTxt.currentAct >= 3){
                textAlert = e.waitTxt;
            }
            else if(commandItem[0].toLowerCase() == "accept" && myGameTxt.currentAct >= 4){
                textAlert = e.acceptTxt;
                myGameTxt.currentScene = myGameTxt.currentScene+1;
                actOne();
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
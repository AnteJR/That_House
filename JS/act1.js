/* MISE EN PLACE DES TEXTES POUR l'ACTE 1 */
function actOne(){
    let thisAct = myGameTxt.currentAct;
    let maScene = myGameTxt.scenes[myGameTxt.currentScene];
    let monTxt = "";
    let mesTxt = maScene.texts
    for(let i = 0; i<mesTxt.length; i++){
        if(mesTxt[i][1] == "regular"){
            if(mesTxt[i][2] == true){
                monTxt += `<div class = "wobblyTxt textDiv interactiveText">`;
            }
            else{
                monTxt += `<div class = "textDiv">`;
            }
            monTxt += mesTxt[i][0]+`</div>`;
        }
        if(mesTxt[i][1] == "angry" && thisAct >= 1){
            if(mesTxt[i][2] == true){
                monTxt += `<div class = "angerWobble textDiv iAmAnger interactiveText">`;
            }
            else{
                monTxt += `<div class = "textDiv iAmAnger">`;
            }
            monTxt += mesTxt[i][0]+`</div>`;
        }
        if(mesTxt[i][1] == "bargain" && thisAct >= 2){
            if(mesTxt[i][2] == true){
                monTxt += `<div class = "bargainWobble textDiv iAmBargain interactiveText">`;
            }
            else{
                monTxt += `<div class = "textDiv iAmBargain">`;
            }
            monTxt += mesTxt[i][0]+`</div>`;
        }
        if(mesTxt[i][1] == "sad" && thisAct >= 3){
            if(mesTxt[i][2] == true){
                monTxt += `<div class = "sadWobble textDiv iAmDepression interactiveText">`;
            }
            else{
                monTxt += `<div class = "textDiv iAmDepression">`;
            }
            monTxt += mesTxt[i][0]+`</div>`;
        }
        if(mesTxt[i][1] == "accept" && thisAct >= 3){
            if(mesTxt[i][2] == true){
                monTxt += `<div class = "acceptanceWobble textDiv iAmAcceptance interactiveText">`;
            }
            else{
                monTxt += `<div class = "textDiv iAmAcceptance">`;
            }
            monTxt += mesTxt[i][0]+`</div>`;
        }
    }
    gameDiv.innerHTML = monTxt;
}
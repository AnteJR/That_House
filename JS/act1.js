/* MISE EN PLACE DES TEXTES */
function actOne(){
    inspectColor();
    let thisAct = myGameTxt.currentAct;
    let maScene = myGameTxt.scenes[myGameTxt.currentScene];
    let monTxt = "";
    let mesTxt = maScene.texts
    if(myGameTxt.currentScene == 6){
        document.getElementById("gameScreen").style.textAlign = "center";
        for(let i = 0; i<mesTxt.length; i++){
            for(let j = 0; j<mesTxt[i].text.length; j++){
                if(mesTxt[i].id == thisAct){
                    if(mesTxt[i].text[j][1] == true){
                        monTxt += `<br/><div class = "titleDiv">`;
                    }
                    else{
                        monTxt += `<div class = "sadWobble textDiv">`;
                    }
                    monTxt += mesTxt[i].text[j][0]+`</div><br/>`;
                }
            }
        }
        monTxt += `<br/><input type="button" value="proceed" class="buttonGo" id="buttonGo"/>`;
    }
    else{
        document.getElementById("gameScreen").style.textAlign = "left";
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
            if(mesTxt[i][1] == "accept" && thisAct >= 4){
                if(mesTxt[i][2] == true){
                    monTxt += `<div class = "acceptanceWobble textDiv iAmAcceptance interactiveText">`;
                }
                else{
                    monTxt += `<div class = "textDiv iAmAcceptance">`;
                }
                monTxt += mesTxt[i][0]+`</div>`;
            }
        }
    }
    gameDiv.innerHTML = monTxt;
    if(myGameTxt.currentScene == 6){
        document.getElementById("buttonGo").addEventListener("click", function(){
            myGameTxt.currentScene = 0;
            actOne();
        });
    }
}
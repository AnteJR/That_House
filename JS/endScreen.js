function endScreen(i){
    document.getElementById("boxAlert").style.display = "none";
    document.getElementById("screenBottom").style.display = "none";
    document.getElementById("titleGame").style.display = "none";
    document.getElementById("gameScreen").style.marginTop = "10%";
    document.getElementById("gameScreen").style.textAlign = "center";
    let monTxt = myGameTxt.scenes[myGameTxt.currentScene].items[1].acceptTxtLetterOpen;
    let txtToDisplay = `<div class="textDiv bigTextDiv">`+monTxt[0][i];
    txtToDisplay += `</div><br/><br/><input type="button" value="${monTxt[1][i]}" class="buttonGoForward" id="buttonMoveForward"/>`
    gameDiv.innerHTML = txtToDisplay;
    document.getElementById("buttonMoveForward").addEventListener("click", function(){
        i++
        if(i<=5){
            endScreen(i);
        }
        else{
            document.getElementById("gameScreen").style.marginTop = "25px";
            txtToDisplay = `<div class="textDiv bigTextDiv">`;
            if(myGameTxt.scenes[4].items[3].tookTheBook == true){
                txtToDisplay += `"You speak of a world I knew</div><br/><div class="textDiv bigTextDiv">Before we lost the air</div><br/><div class="textDiv bigTextDiv">We all know the lie</div><br/><div class="textDiv bigTextDiv">Let it die</div><br/><div class="textDiv bigTextDiv">You speak of Paradise</div><br/><div class="textDiv bigTextDiv">Like it exists forever</div><br/><div class="textDiv bigTextDiv">They all made you believe</div><br/><div class="textDiv bigTextDiv">But I don't think I want to</div><br/><div class="textDiv bigTextDiv">Well, what's the point of life</div><br/><div class="textDiv bigTextDiv">If we can't be together?</div><br/><div class="textDiv bigTextDiv">I need you here with me</div><br/><div class="textDiv bigTextDiv">I need you to remember"</div><br/><div class="textDiv bigTextDiv">-Thornill</div><br/><br/><div class="textDiv bigTextDiv">`;
            }
            txtToDisplay += `Developpement: Joël Rimaz</div><br/><br/><div class="textDiv bigTextDiv">Under the direction of: Isaac Pante</div><br/><br/><div class="textDiv bigTextDiv">For the course "Digital Publications"</div><br/><br/><div class="textDiv bigTextDiv">University of Lausanne</div><br/><input type="button" value="back to menu" class="buttonGoForward" id="buttonBackHome"/>`;
            gameDiv.innerHTML = txtToDisplay;
            document.getElementById("buttonBackHome").addEventListener("click", function(){
                gameLaunch();
                document.getElementById("titleGame").style.display = "block";
            })
        }
    })
}
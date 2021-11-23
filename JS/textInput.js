/* FONCTION POUR QUE LE TITRE APPARAISSE EN FLOTTANT */
let title = document.getElementById('titleGame');
let titleText = title.textContent;
titleTxt(titleText);

function titleTxt (text){
    text = text.split("");
    let textToAppend = text.map((x, idx)=> {
        if(x == " "){
            x = "&nbsp;"
        }
        let delay = (idx) * 500;
        return `<span style="animation-delay: ${delay}ms">${x}</span>`;
    });
    title.innerHTML = textToAppend.join("");
}

/* CODE POUR QUE PRENDRE NOTE QUAND ON ECRIT DANS L'INPUT */
let monInput = document.getElementById('commandInput');
monInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        if(myGameTxt.currentScene == 6 && document.getElementById("boxAlert").style.display == "none"){
            myGameTxt.currentScene = 0;
            actOne();
        }
        else{
            if(document.getElementById("commandInput").value!=""){
                if(e.key == "Enter"){
                    if(document.getElementById("boxAlert").style.display == "none"){
                        if(myGameTxt.currentScene == 6){
                            myGameTxt.currentScene = 0;
                            actOne();
                            monInput.value = "";
                        }
                        else{
                            if(monInput.value == "leave"){
                                monInput.value = "leave "
                            }
                            displayAlert(monInput.value);
                            monInput.value = "";
                        }
                    }
                }
            }
            else{
                if(e.key == "Enter"){
                    if(document.getElementById("boxAlert").style.display == "block"){
                        document.getElementById("boxAlert").style.display = "none"
                    }
                }
            }
        }
    }
});

/* CODE POUR PRENDRE NOTE QUAND ON PRESSE SUR LE CLAVIER DEPUIS LE DOM */
window.addEventListener('keydown', (e) => {
    if(monInput != document.activeElement){
        if (e.key === "Spacebar" || e.key === " " || e.key != "ArrowLeft" || e.key != "ArrowRight" || e.key != "ArrowDown" || e.key != "ArrowUp") {
          e.preventDefault();
        }
        if(e.key != "Backspace" && e.key != "Enter" && e.key != "Meta" && e.key != "Shift" && e.key != "CapsLock" && e.key != "Control" && e.key != "Alt" && e.key != "ArrowLeft" && e.key != "ArrowRight" && e.key != "ArrowDown" && e.key != "ArrowUp"){
            monInput.value += e.key;
        }
        else if(e.key == "Backspace"){
            let valueInput = monInput.value.split("");
            valueInput.pop();
            monInput.value = valueInput.join("");
        }
        else if(e.key == "Enter"){
            if(myGameTxt.currentScene == 6 && document.getElementById("boxAlert").style.display == "none"){
                myGameTxt.currentScene = 0;
                actOne();
                monInput.value = "";
            }
            else{
                if(document.getElementById("commandInput").value!=""){
                    if(e.key == "Enter"){
                        if(document.getElementById("boxAlert").style.display == "none"){
                            if(myGameTxt.currentScene == 6){
                                myGameTxt.currentScene = 0;
                                actOne();
                            }
                            else{
                                if(monInput.value == "leave"){
                                    monInput.value = "leave "
                                }
                                displayAlert(monInput.value);
                                monInput.value = "";
                            }
                        }
                    }
                }
                else{
                    if(e.key == "Enter"){
                        if(document.getElementById("boxAlert").style.display == "block"){
                            document.getElementById("boxAlert").style.display = "none"
                        }
                    }
                }
            }
        }
    }
});

/* REMPLIR L'INPUT AVEC DES MOTS DES COMMANDES */
let mesCommandes = document.querySelectorAll(".command");
mesCommandes.forEach((element) => {
    element.addEventListener("click", function(){
        let maCommande = this.className.split(" ")[1];
        let commandTxt = maCommande.split("")
        commandTxt.pop();
        let canBeUsed = false;
        if(this.className.split(" ").length > 2){
            if(myGameTxt.currentAct >= 1 && this.className.split(" ")[1] == "hitC"){
                canBeUsed = true
            }
            if(myGameTxt.currentAct >= 2 && this.className.split(" ")[1] == "inspectC"){
                canBeUsed = true
            }
            if(myGameTxt.currentAct >= 3 && this.className.split(" ")[1] == "waitC"){
                canBeUsed = true
            }
            if(myGameTxt.currentAct >= 4 && this.className.split(" ")[1] == "acceptC"){
                canBeUsed = true
            }
        }
        else{
            canBeUsed = true
        }
        if(canBeUsed == true && document.getElementById('commandInput').value == ""){
            document.getElementById('commandInput').value += commandTxt.join("")+" ";
        }
    });
});

/* ON LANCE LE MENU */
function gameLaunch(){
    setTimeout(()=>{
        gameDiv.style.textAlign = "center";
        gameDiv.style.marginTop = "10%";
        document.getElementsByClassName("bottomScreen")[0].style.display = "none";
        gameDiv.innerHTML = `<div class="textDiv decorationTxt" style="animation-delay: 0s">~~~ </div><div class="startButton textDiv bigTextDiv" style="animation-delay: 0s">New Game</div><div class="textDiv decorationTxt" style="animation-delay: 0s"> ~~~</div><br/><br/><div class="textDiv decorationTxt" style="animation-delay: 1s">~~~ </div><div class="continueButton textDiv bigTextDiv" style="animation-delay: 1s">Continue Game</div><div class="textDiv decorationTxt" style="animation-delay: 1s"> ~~~</div><br/><br/><div class="textDiv decorationTxt" style="animation-delay: 2s">~~~ </div><div class="aboutButton textDiv bigTextDiv" style="animation-delay: 2s">About</div><div class="textDiv decorationTxt" style="animation-delay: 2s"> ~~~</div>`
        startUpSetUp();
        inspectColor()
    },10);
}

gameLaunch();
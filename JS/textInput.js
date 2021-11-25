/*
    CET EVENTLISTENER A POUR FOCUS L'INPUT.
    SON BUT ET DE RÉAGIR QUAND LE USER VALIDE L'INPUT
    EN UTILISANT LA TOUCHE "ENTER"
*/
let monInput = document.getElementById('commandInput');
monInput.addEventListener("keydown", (e) => {
    // si on appuie sur "Enter"
    if(e.key == "Enter"){
        // s'il l'input a une valeur non-nulle, on envoie les données pour afficher les alerts
        if(document.getElementById("commandInput").value!=""){
            if(document.getElementById("boxAlert").style.display == "none"){
                if(monInput.value == "leave"){
                    monInput.value = "leave "
                }
                displayAlert(monInput.value);
                monInput.value = "";
            }
        }
        // sinon, appuyer "Enter" depuis l'input ferme les boîtes de dialogue
        else{
            document.getElementById("boxAlert").style.display = "none"
        }
    }
});

/*
    CET EVENTLISTENER REMPLI L'INPUT SANS QUE L'INPUT SOIT FOCUS
    IL PREND COMME ÉLÉMENT LA WINDOW, DONC TOUT LE DOM
*/
window.addEventListener('keydown', (e) => {
    // ne fonctionne que si l'input n'est pas focused, ce afin d'éviter les doubles inputs
    if(monInput != document.activeElement){
        // s'il s'agit de touches qui peuvent faire bouger la position de la fenêtre, on désactive leur effet par défaut
        if (e.key === "Spacebar" || e.key === " " || e.key != "ArrowLeft" || e.key != "ArrowRight" || e.key != "ArrowDown" || e.key != "ArrowUp") {
          e.preventDefault();
        }

        // on bloque les caractères spéciaux style shift, caps, ctrl, et on ajoute à l'input le reste
        if(e.key != "Backspace" && e.key != "Enter" && e.key != "Meta" && e.key != "Shift" && e.key != "CapsLock" && e.key != "Control" && e.key != "Alt" && e.key != "ArrowLeft" && e.key != "ArrowRight" && e.key != "ArrowDown" && e.key != "ArrowUp"){
            monInput.value += e.key;
        }
        // si on appuie sur "Backspace", supprimer le dernier caractère de l'input
        else if(e.key == "Backspace"){
            let valueInput = monInput.value.split("");
            valueInput.pop();
            monInput.value = valueInput.join("");
        }
        // si on appuie sur "Enter"
        else if(e.key == "Enter"){
            // s'il l'input a une valeur non-nulle, on envoie les données pour afficher les alerts
            if(document.getElementById("commandInput").value!=""){
                if(document.getElementById("boxAlert").style.display == "none"){
                    if(monInput.value == "leave"){
                        monInput.value = "leave "
                    }
                    displayAlert(monInput.value);
                    monInput.value = "";
                }
            }
            // sinon, appuyer "Enter" depuis l'input ferme les boîtes de dialogue
            else{
                document.getElementById("boxAlert").style.display = "none"
            }
        }
    }
});

/* 
    CE FOREACH AJOUTE DES EVENTLISTENER AUX COMMANDES EN BAS DE L'ÉCRAN
    AFIN DE PERMETTRE AU USER DE CLIQUER DESSUS POUR LES AJOUTER À L'INPUT
*/
let mesCommandes = document.querySelectorAll(".command");
mesCommandes.forEach((element) => {
    element.addEventListener("click", function(){
        let maCommande = this.className.split(" ")[1];
        let commandTxt = maCommande.split("")
        commandTxt.pop();
        let canBeUsed = false;

        // conditions pour rendre disponible les commandes aux bons actes
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

        // insérer le mot lié à la commande dans l'input
        if(canBeUsed == true && document.getElementById('commandInput').value == ""){
            document.getElementById('commandInput').value += commandTxt.join("")+" ";
        }
    });
});

/* 
    CETTE FONCTION LANCE LE "JEU", DANS LA MESURE
    OÙ ELLE LANCE LE MENU, QUI LUI LANCE LE JEU
*/
function gameLaunch(){
    // changement léger du style de la page
    gameDiv.style.textAlign = "center";
    gameDiv.style.marginTop = "10%";
    document.getElementsByClassName("bottomScreen")[0].style.display = "none";

    // insertion du texte contenant les élément du menu
    gameDiv.innerHTML = `<div class="textDiv decorationTxt" style="animation-delay: 0s">~~~ </div><div class="startButton textDiv bigTextDiv" style="animation-delay: 0s">New Game</div><div class="textDiv decorationTxt" style="animation-delay: 0s"> ~~~</div><br/><br/><div class="textDiv decorationTxt" style="animation-delay: 1s">~~~ </div><div class="continueButton textDiv bigTextDiv" style="animation-delay: 1s">Continue Game</div><div class="textDiv decorationTxt" style="animation-delay: 1s"> ~~~</div><br/><br/><div class="textDiv decorationTxt" style="animation-delay: 2s">~~~ </div><div class="aboutButton textDiv bigTextDiv" style="animation-delay: 2s">About</div><div class="textDiv decorationTxt" style="animation-delay: 2s"> ~~~</div>`
    
    // lancement de la fonction startUpSetUp(), qui ajoute les eventListener aux textes
    startUpSetUp();
}

gameLaunch();
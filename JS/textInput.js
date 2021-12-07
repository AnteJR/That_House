/*
    CET EVENTLISTENER A POUR FOCUS L'INPUT.
    SON BUT ET DE RÉAGIR QUAND LE USER VALIDE L'INPUT
    EN UTILISANT LA TOUCHE "ENTER"
*/
let monInput = document.getElementById('commandInput');
monInput.addEventListener("keydown", (e) => {
    // si on appuie sur "Enter"
    if (e.key == "Enter") {
        counterCommands = 0;
        // s'il l'input a une valeur non-nulle, on envoie les données pour afficher les alerts
        if (document.getElementById("commandInput").value != "") {
            if (document.getElementById("boxAlert").style.display == "none") {
                if (monInput.value == "leave") {
                    monInput.value = "leave "
                }
                else if ((monInput.value.split(" ").length == 1 && monInput.value != "leave") || monInput.value.split(" ").length > 2) {
                    monInput.value = "false statement";
                }
                displayAlert(monInput.value);
                monInput.value = "";
            }
        }
        // sinon, appuyer "Enter" depuis l'input ferme les boîtes de dialogue
        else {
            document.getElementById("boxAlert").style.display = "none";
            clearInterval(monInterval2);
        }
    }
    else if (e.key == "ArrowUp") {
        if (myGameTxt.previousInput.length > 0 && counterCommands <= myGameTxt.previousInput.length) {
            if (counterCommands + 1 <= myGameTxt.previousInput.length) counterCommands++;
            monInput.value = myGameTxt.previousInput[(myGameTxt.previousInput.length) - counterCommands];
        }
    }
    else if (e.key == "ArrowDown") {
        if (myGameTxt.previousInput.length > 0 && counterCommands <= myGameTxt.previousInput.length) {
            if (counterCommands - 1 > 0) counterCommands--;
            monInput.value = myGameTxt.previousInput[(myGameTxt.previousInput.length) - counterCommands];
        }
    }
});

let nameInput;
let counterCommands = 0;

/*
    CET EVENTLISTENER REMPLI L'INPUT SANS QUE L'INPUT SOIT FOCUS
    IL PREND COMME ÉLÉMENT LA WINDOW, DONC TOUT LE DOM
*/
window.addEventListener('keydown', (e) => {
    if (myGameTxt.currentScene == 7) nameInput = document.getElementById("monUsername");

    // condition pour lancer les bruitages, une lettre sur 2
    let canPlaySound = false;
    if (myGameTxt.currentScene != 5) {
        canPlaySound = true;
    }
    else {
        if (!myGameTxt.scenes[myGameTxt.currentScene].items[0].lookingAtLetter && !myGameTxt.isFinished) canPlaySound = true;
    }

    if (canPlaySound) playKeyType();

    // ne fonctionne que si l'input n'est pas focused, ce afin d'éviter les doubles inputs
    if (monInput != document.activeElement && nameInput != document.activeElement) {
        // s'il s'agit de touches qui peuvent faire bouger la position de la fenêtre, on désactive leur effet par défaut
        if (e.key === "Spacebar" || e.key === " " || e.key != "ArrowLeft" || e.key != "ArrowRight" || e.key != "ArrowDown" || e.key != "ArrowUp") {
            e.preventDefault();
        }

        // on bloque les caractères spéciaux style shift, caps, ctrl, et on ajoute à l'input le reste
        if (e.key != "Backspace" && e.key != "Enter" && e.key != "Meta" && e.key != "Shift" && e.key != "CapsLock" && e.key != "Control" && e.key != "Alt" && e.key != "ArrowLeft" && e.key != "ArrowRight" && e.key != "ArrowDown" && e.key != "ArrowUp") {
            if (myGameTxt.currentScene == 7) nameInput.value += e.key;
            else monInput.value += e.key;
        }

        // si on appuie sur "Backspace", supprimer le dernier caractère de l'input
        else if (e.key == "Backspace") {
            let valueInput = monInput.value.split("");
            valueInput.pop();
            if (myGameTxt.currentScene == 7) nameInput.value = valueInput.join("");
            else monInput.value = valueInput.join("");
        }

        // si on appuie sur "Enter"
        else if (e.key == "Enter") {
            counterCommands = 0;
            // s'il l'input a une valeur non-nulle, on envoie les données pour afficher les alerts
            if (document.getElementById("commandInput").value != "") {
                if (document.getElementById("boxAlert").style.display == "none") {
                    if (monInput.value.split(" ").length == 1 && monInput.value == "leave") {
                        monInput.value = "leave "
                    }
                    else if ((monInput.value.split(" ").length == 1 && monInput.value != "leave") || monInput.value.split(" ").length > 2) {
                        monInput.value = "false statement";
                    }
                    displayAlert(monInput.value);
                    monInput.value = "";
                }
            }
            // sinon, appuyer "Enter" depuis l'input ferme les boîtes de dialogue
            else {
                document.getElementById("boxAlert").style.display = "none";
                clearInterval(monInterval2);
            }
        }
        else if (e.key == "ArrowUp") {
            if (myGameTxt.previousInput.length > 0 && counterCommands <= myGameTxt.previousInput.length) {
                if (counterCommands + 1 <= myGameTxt.previousInput.length) counterCommands++;
                monInput.value = myGameTxt.previousInput[(myGameTxt.previousInput.length) - counterCommands];
            }
        }
        else if (e.key == "ArrowDown") {
            if (myGameTxt.previousInput.length > 0 && counterCommands <= myGameTxt.previousInput.length) {
                if (counterCommands - 1 > 0) counterCommands--;
                monInput.value = myGameTxt.previousInput[(myGameTxt.previousInput.length) - counterCommands];
            }
        }
    }
});

/* 
    CE FOREACH AJOUTE DES EVENTLISTENER AUX COMMANDES EN BAS DE L'ÉCRAN
    AFIN DE PERMETTRE AU USER DE CLIQUER DESSUS POUR LES AJOUTER À L'INPUT
*/
const mesCommandes = document.querySelectorAll(".command");
mesCommandes.forEach((element) => {
    element.addEventListener("click", function () {
        let maCommande = this.textContent;
        let canBeUsed = false;
        let monAct = myGameTxt.currentAct;

        // conditions pour rendre disponible les commandes aux bons actes
        if (this.className.split(" ")[2] == "bonusC") {
            if (monAct >= 1 && this.className.split(" ")[1] == "hitC") {
                canBeUsed = true;
            }
            if (monAct >= 2 && this.className.split(" ")[1] == "inspectC") {
                canBeUsed = true;
            }
            if (monAct >= 3 && this.className.split(" ")[1] == "waitC") {
                canBeUsed = true;
            }
            if (monAct >= 4 && this.className.split(" ")[1] == "acceptC") {
                canBeUsed = true;
            }
        }
        else {
            canBeUsed = true;
        }

        // insérer le mot lié à la commande dans l'input
        if (canBeUsed == true) {
            document.getElementById('commandInput').value = maCommande + " ";
            if (maCommande.toLowerCase() == "leave") {
                displayAlert("leave ")
                document.getElementById('commandInput').value = "";
            }
        }
    });
});

/* 
    CETTE FONCTION LANCE LE "JEU", DANS LA MESURE
    OÙ ELLE LANCE LE MENU, QUI LUI LANCE LE JEU
*/
function gameLaunch() {
    // changement léger du style de la page
    gameDiv.style.textAlign = "center";
    gameDiv.style.marginTop = "10%";
    document.getElementsByClassName("bottomScreen")[0].style.display = "none";

    // insertion du texte contenant les élément du menu
    gameDiv.innerHTML = `<div class="startButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 0s">~~~ New Game ~~~</div><br/><br/><div class="continueButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 1s">~~~ Continue Game ~~~</div><br/><br/><div class="aboutButton textDiv bigTextDiv whiteText menuTxt" style="animation-delay: 2s">~~~ About ~~~</div>`;

    // lancement de la fonction startUpSetUp(), qui ajoute les eventListener aux textes
    startUpSetUp();
    playMusic("menu");
}
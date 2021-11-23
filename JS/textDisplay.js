var currentAct;

/* UN OBSERVATEUR QUI REGARDE SI DU CONTENU A ÉTÉ AJOUTÉ À LA DIV DE JEU */
let gameDiv = document.getElementById("gameScreen");
const observer = new MutationObserver(function() {
    displayGameText();
    /* REMPLIR L'INPUT AVEC DES MOTS FLOTTANTS DU TEXTE DE JEU */
    let mesObjets = document.querySelectorAll(".interactiveText");
    mesObjets.forEach((element) => {
        element.addEventListener("click", function(){
            let monObjet = this.innerHTML.split(">");
            monObjet.forEach((e, i) => {
                if(i%2 == 0){
                    monObjet[i] = ""
                }
                else{
                    let obj = monObjet[i].split("")[0];
                    if(obj == "." || obj == ","){
                        monObjet[i] = ""
                    }
                    else{
                        monObjet[i] = obj;
                    }
                }
            });
            let monMot = monObjet.join("");
            if(document.getElementById("commandInput").value != ""){
                document.getElementById("commandInput").value += monMot;
            }
        });
    });
});
observer.observe(gameDiv, {characterData: false, childList: true, attributes: false});

/* FONCTION POUR AFFICHER DU TEXTE PHRASE APRÈS PHRASE, EN METTANT DES MOTS EN ÉVIDENCE SI BESOIN */
function displayGameText(){
    let textsToAppear = document.querySelectorAll('.textDiv');
    let texts = [];

    textsToAppear.forEach((el, idx)=> {
        let textOriginal = el.textContent;
        texts.push(textOriginal);
        el.innerHTML = "";
        let text = textOriginal.split("");
        let nbrChar = text.length;
        let charPos = 0;

        txtDisplay(nbrChar, charPos, el, text, idx);
    });

    function txtDisplay(i, j, element, txtFrag, index){
        let interval1 = 0;
        if(index > 0){
            let previousTexts = 0;
            for(let k = 0; k<texts.length-1; k++){
                previousTexts += texts[k].length;
            }
            interval1 = 50*previousTexts;
        }
        setTimeout(function(){
            setTimeout(()=> {
                if(i>0){
                    let delay = 0;
                    if(txtFrag[j] == " "){
                        txtFrag[j] = "&nbsp;"
                    }
                    if(element.getAttribute("class").split(" ")[0] == "wobblyTxt"){
                        delay = j*50;
                        element.innerHTML+=`<span style="animation-delay: ${delay}ms">${txtFrag[j]}</span>`;
                    }
                    else if(element.getAttribute("class").split(" ")[0] == "angerWobble"){
                        delay = j*20;
                        element.innerHTML+=`<span style="animation-delay: ${delay}ms">${txtFrag[j]}</span>`;
                    }
                    else if(element.getAttribute("class").split(" ")[0] == "bargainWobble"){
                        delay = j*500;
                        element.innerHTML+=`<span style="animation-delay: ${delay}ms">${txtFrag[j]}</span>`;
                    }
                    else if(element.getAttribute("class").split(" ")[0] == "sadWobble"){
                        delay = j*500;
                        element.innerHTML+=`<span style="animation-delay: ${delay}ms">${txtFrag[j]}</span>`;
                    }
                    else{
                        if(txtFrag[j] == "&nbsp;"){
                            txtFrag[j] = " "
                        }
                        element.innerHTML+=txtFrag[j];
                    }
                    j++;
                    i--;
                    txtDisplay(i, j, element, txtFrag);
                }
            },45);
        },interval1);
    }
}

/* FONCTION POUR L'AFFICHAGE DES COMMANDES */
function inspectColor(){
    if(myGameTxt.currentAct == 0 ){
        document.querySelectorAll(".bonusC").forEach((e) => {
            e.style.opacity = 0.2;
        });
    }
    if(myGameTxt.currentAct >= 1 ){
        document.querySelectorAll(".bonusC").forEach((e) => {
            if(e.className.split(" ")[1] == "hitC"){
                e.style.opacity = 1;
            }
            else{
                e.style.opacity = 0.2;
            }
        });
    }
    if(myGameTxt.currentAct >= 2 ){
        document.querySelectorAll(".bonusC").forEach((e) => {
            if(e.className.split(" ")[1] == "hitC"){
                e.style.opacity = 1;
            }
            else if(e.className.split(" ")[1] == "inspectC"){
                e.style.opacity = 1;
            }
            else{
                e.style.opacity = 0.2;
            }
        });
    }
    if(myGameTxt.currentAct >= 3 ){
        document.querySelectorAll(".bonusC").forEach((e) => {
            if(e.className.split(" ")[1] == "acceptC"){
                e.style.opacity = 0.2;
            }
            else{
                e.style.opacity = 1;
            }
        });
    }
    if(myGameTxt.currentAct >= 4 ){
        document.querySelectorAll(".bonusC").forEach((e) => {
            e.style.opacity = 1;
        });
    }
}
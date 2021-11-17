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

/* UN OBSERVATEUR QUI REGARDE SI DU CONTENU A ÉTÉ AJOUTÉ À LA DIV DE JEU */
let gameDiv = document.getElementById("gameScreen");
const observer = new MutationObserver(function() {
    displayGameText();
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
        let inter = Math.round(Math.random()*50)+50;
        let charPos = 0;

        txtDisplay(nbrChar, charPos, inter, el, text, idx);
    });

    function txtDisplay(i, j, interval2, element, txtFrag, index){
        let interval1 = 0;
        if(index > 0){
            let previousTexts = 0;
            for(let k = 0; k<texts.length-1; k++){
                previousTexts += texts[k].length;
            }
            interval1 = (100*previousTexts)-100;
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
                    txtDisplay(i, j, interval2, element, txtFrag);
                }
            },interval2);

        },interval1);
    }
}

/* ESSAI DE TEXTE POUR TESTER */
setTimeout(()=>{

    gameDiv.innerHTML = `<div class="textDiv">This is not my house.</div> <div class="textDiv">I wandered in the streets for some times.</div> <div class="textDiv">Here I stand, at the gate.</div> <div class="textDiv">There is a</div> <div class="wobblyTxt textDiv">road</div> <div class="textDiv">that leads to the</div> <div class="wobblyTxt textDiv">door.</div> <div class="textDiv">I may be too far away from home now.</div>`

},10);
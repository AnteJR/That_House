function openLetter(){
    document.body.style.animation = "none"
    document.body.style.color = "rgb(3, 15, 26)";
    document.body.style.backgroundColor = "white";
    document.body.style.opacity = 1;
    document.getElementById("flickerDiv").style.display = "none";
    document.getElementsByClassName("gameContainer")[0].style.borderWidth = "0px";
    document.getElementById("boxAlert").style.display = "none";
    document.getElementById("screenBottom").style.display = "none";
    document.getElementById("titleGame").style.display = "none";
    let monTxt = myGameTxt.scenes[myGameTxt.currentScene].items[0].useTxtOpen;
    monTxt += `<br/><input type="button" value="proceed" class="buttonGoBack" id="buttonGoBack"/>`;
    gameDiv.innerHTML = monTxt;
    let mesParagraphes = document.querySelectorAll('.textDiv');
    mesParagraphes.forEach(e => {
        e.style.fontSize = "0.75em";
    });
    document.getElementById("buttonGoBack").addEventListener("click", function(){
        document.body.style.animation = "textShadowWhite 1.033s infinite"
        document.body.style.color = "white";
        document.body.style.backgroundColor = "rgb(3, 15, 26)";
        document.body.style.opacity = 1;
        document.getElementById("flickerDiv").style.display = "block";
        document.getElementsByClassName("gameContainer")[0].style.borderWidth = "5px";
        document.getElementById("screenBottom").style.display = "block";
        document.getElementById("titleGame").style.display = "block";
        myGameTxt.scenes[myGameTxt.currentScene].items[0].lookingAtLetter = false;
        actOne();
    });
}
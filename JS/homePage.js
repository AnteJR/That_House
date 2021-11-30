function homePage(){
    gameDiv.style.textAlign = "center";
    document.getElementById("screenBottom").style.display = "none";
    document.getElementById("titleGame").style.fontSize = "2em";

    gameDiv.innerHTML = `<br />
        <div class= "wobblyTxt textDiv whiteText">That House</div>
        <div class= "textDiv whiteText"> is a text-based adventure game about grief and the acceptance of one's own mortality.</div><br />
        <div class= "textDiv whiteText">This game has been developped in the context of a course on digital publishing given by Isaac Pante at the University of Lausanne, in Fall 2021.</div><br /><br />
        <input type="button" value="play game" class="buttonGo" id="buttonStartGame"/>`;
        document.getElementById("buttonStartGame").addEventListener("click", function(){
            document.getElementById("titleGame").style.fontSize = "1.25em";
            myGameTxt.isMenu = false;
            gameLaunch();
        });
}

homePage()
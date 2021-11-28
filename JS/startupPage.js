/*
    CETTE FONCTION SERT À AFFICHER LA PAGE D'ACCUEIL
    ET SES TROIS OPTIONS : "NEW GAME", "CONTINUE" ET "ABOUT"
*/
function startUpSetUp(){
    let optionsMenu = document.querySelectorAll(".bigTextDiv");
    optionsMenu.forEach((e) => {
        let maClass = e.className.split(" ")[0];
        e.addEventListener("click", function(){
            // pour lancer une nouvelle partie
            if(maClass == "startButton"){
                // reset le style, notamment en affichant le bas de l'écran
                gameDiv.style.textAlign = "left";
                gameDiv.style.marginTop = "0%";

                if(localStorage.act){
                    gameDiv.innerHTML = `<br/><div class="textDiv">There is an existing saved game:</div> 
                    <ul style="list-style:none;">
                        <li>
                            <div class="textDiv">Act ${localStorage.act}</div>
                        </li>
                        <li>
                            <div class="textDiv">Name: ${localStorage.username}</div>
                        </li>
                    </ul>
                    <div class="textDiv">Do you wish to erase it and start a new game?</div>
                    <br/>
                    <br/>
                    <input type="button" value="Yes, proceed" class="buttonAlert" id="alertButton2"/>
                    <input type="button" value="Nope, cancel" class="buttonAlert" id="alertButton3"/>`;
                    
                    document.getElementById("alertButton2").addEventListener("click", () => {
                        localStorage.clear();
                        myGameTxt.currentAct = 0;
                        myGameTxt.currentScene = 7;
                        actOne();
                    });
                    document.getElementById("alertButton3").addEventListener("click", () => {
                        gameLaunch();
                    });
                }
                else{
                    myGameTxt.currentAct = 0;
                    myGameTxt.currentScene = 7;
                    actOne();
                }
            }
            // pour continuer sa partie
            else if(maClass == "continueButton"){
                // reset le style, notamment en affichant le bas de l'écran, et c'est parti
                gameDiv.style.textAlign = "left";
                gameDiv.style.marginTop = "0%";
                document.getElementsByClassName("bottomScreen")[0].style.display = "block";
                actOne();
            }
            // afficher des infos sur le jeu et son développeur (moi lol)
            else if(maClass =="aboutButton"){
                // reset le style, et ajout d'un bouton en bas de l'écran pour revenir en arrière
                gameDiv.style.textAlign = "left";
                gameDiv.style.marginTop = "5%";
                gameDiv.innerHTML = `<div class="textDiv wigglyTxt">Developper: Joël Rimaz</div><br /><br /><div class="textDiv">Under the direction of: Isaac Pante</div><br/><br/><div class="textDiv">For the course "Digital Publication"</div><br/><br/><div class="textDiv">University of Lausanne</div><br/><br/><div class="textDiv">Github - AnteJR</div><br/><br/><input type="button" value="back" class="buttonAlert" id="buttonBack"/>`;
                document.getElementById("buttonBack").addEventListener("click", function(){
                    gameLaunch();
                });
            }
        });
    })
}
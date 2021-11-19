function startUpSetUp(){
    let optionsMenu = document.querySelectorAll(".bigTextDiv");
    optionsMenu.forEach((e) => {
        let maClass = e.className.split(" ")[0];
        e.addEventListener("click", function(){
            /* LANCER UNE NOUVELLE PARTIE */
            if(maClass == "startButton"){
                gameDiv.style.textAlign = "left";
                gameDiv.style.marginTop = "0%";
                document.getElementsByClassName("bottomScreen")[0].style.display = "block";
                actOne();
            }
            /* LANCER LA PARTIE SUR LOCALSTORAGE */
            else if(maClass == "continueButton"){
                
            }
            /* AFFICHER DES INFOS SUR LE DEV (MOI) */
            else if(maClass =="aboutButton"){
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
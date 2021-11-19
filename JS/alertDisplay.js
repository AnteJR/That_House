function displayAlert(text){
    let maDiv = document.getElementById("alertTxt");
    let monAlert = document.getElementById("boxAlert");
    let monBtn = document.getElementById("alertButton");
    monBtn.addEventListener("click", () => {
        document.getElementById("boxAlert").style.display = "none";
    })

    maDiv.innerHTML = "";
    monAlert.style.display = "block";
    
    let txtFrag = text.split("");
    let i = txtFrag.length;
    let j = 0;
    let interval = Math.round(Math.random()*50)+50;

    txtDisplay();

    function txtDisplay(){
        setTimeout(function(){
            if(i>0){
                maDiv.innerHTML += txtFrag[j];
                j++;
                i--;
                txtDisplay();
            }
        },interval);
    }
}
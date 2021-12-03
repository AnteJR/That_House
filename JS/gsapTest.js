gsap.from("div",{
    duration: 5,
    opacity:0
});

function alertAppear(maDiv){
    maDiv = "#"+maDiv.id;
    gsap.from(maDiv,{
        duration:2,
        y:-200,
        ease: "back"
    });
    gsap.from(document.body,{
        duration:1,
        backgroundColor: "white"
    });
}

function backgroundFlash(){
    gsap.from(document.body,{
        duration:1,
        backgroundColor: "white"
    });
}

function gsapLetter(monBody){
    gsap.to(monBody,{
        duration: 3,
        backgroundColor: "white"
    })
}

function gsapLetterBack(monBody){
    gsap.to(monBody,{
        duration: 2,
        backgroundColor: "rgb(3, 15, 26)"
    })
}
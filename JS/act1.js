var act1 = {
    name: "Act 1",
    actNumber: 1,
	scenes: [
        {
            name: "Scene1",
            sceneNumber: 1,
            texts: [
                ["This wasn’t not my house. I wandered in the streets for some times. Here I stood, at the gate. There was a ", "regular", false],
                ["road ", "regular", true],
                ["that lead to a ", "regular", false],
                ["door. ", "regular", true],
                ["I may have been too far away from home now.", "regular", false]
            ],
            items: [
                {
                    name: "road",
                    look: false,
                    use: false,
                    go: false
                },
                {
                    name: "door",
                    look: false,
                    use: false,
                    go: false
                }
            ],
        },
		{
            name: "Scene2",
            sceneNumber: 2,
			texts: [
                ["There I was. The ", "regular", false],
				["door. ", "regular", true],
				["was right there. There also was a. ", "regular", false],
				["window", "regular", true],
                [", next to it, on the left. Everything looked frozen in time. I didn’t know what to think about it. There was a ", "regular", false],
				["doorbell. ", "regular", true],
				["I could just… ring it. ", "regular", false],
			],
			items: [
                {
					name: "window",
					look: false,
					use: false,
					go: false
				},
                {
					name: "door",
					look: false,
					use: false,
					go: false
				},
                {
					name: "doorbell",
					look: false,
					use: false,
					go: false
				}
			],
		},
		{
			//scene3, 4, etc
		}
	],
	complete: false,
    currentScene:1,
};

/* MISE EN PLACE DES TEXTES POUR l'ACTE 1 */
function actOne(){
    currentAct = act1;
    gameDiv.innerHTML = `<div class="textDiv">Game will be here</div>`
}
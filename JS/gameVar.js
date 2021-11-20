var myGameTxt = {
    name: "Act 1",
    actNumber: 1,
	scenes: [
        {
            name: "Scene1",
            sceneNumber: 1,
            texts: [
                ["This wasn’t my house. I wandered in the streets for some times. Here I stood, at the gate. There was a ", "regular", false],
                ["road", "regular", true],
                [" that lead to a ", "regular", false],
                ["door.", "regular", true],
                [" I may have been too far away from home now. ", "regular", false],
                ["I hated to see that house again.", "angry", false]
            ],
            items: [
                {
                    name: "road",
                    look: false,
                    lookTxt: "The road was short. It was mainly made of dirt. It had not been maintained in a while.",
                    use: false,
                    useTxt: "I might as well.",
                    go: false,
                    useTxt: "I might as well.",
                    hit: false,
                    hitTxt: "Why would I hit dirt?",
                    inspect: false,
                    inspectTxt: "It was dirt, what do you want me to say?",
                    wait: false,
                    waitTxt: "I waited for a bit. A bird flew by. Time to move",
                    accept: false,
                    acceptTxt: "I hoped this was the last time I had to go in that house."
                },
                {
                    name: "door",
                    look: false,
                    lookTxt: "The door looked closed from up here. I could try to open it. Needed to go to it though.",
                    use: false,
                    useTxt: "I needed to get closer to it.",
                    go: false,
                    goTxt: "I might as well.",
                    hit: false,
                    hitTxt: "I mean, I could. Needed to get closer though.",
                    inspect: false,
                    inspectTxt: "I was too far away to see anything.",
                    wait: false,
                    waitTxt: "I waited for a bit. The door kept shut. Time to move.",
                    accept: false,
                    acceptTxt: "I hope this is the last time I have to go in that house."
                },
                {
                    name: "leave",
                    left: false,
                    leftTrue: "I decided to go. There was nothing for me there.",
                    leftFalse: "I felt drawn to the house. I couldn't leave just yet."
                }
            ],
        },
		{
            name: "Scene2",
            sceneNumber: 2,
			texts: [
                ["There I was. The ", "regular", false],
				["door.", "regular", true],
				[" was right there. There also was a ", "regular", false],
				["window", "regular", true],
                [", next to it, on the left. Everything looked frozen in time. I didn’t know what to think about it. There was a ", "regular", false],
				["doorbell.", "regular", true],
				[" I could just… ring it. ", "regular", false],
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
                    lookTxt: "A bit too frail if you ask me. I didn't know if it was unlocked or not.",
					use: false,
                    useTxt: "Huh. It was unlocked. Who the Hell would leave it like that?",
					go: false,
                    goTxt: "Here goes nothing.",
                    noGoTxt: "I still didn't know if it was unlocked."
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
    currentScene:0,
    currentAct:0
};
/*
    CETTE VARIABLE CONTIENT L'ENSEMBLE DES TEXTES ET DES VARIABLES UTILES AU FONCTIONNEMENT DU JEU
    SA STRUCTURE GÉNÉRALE (SAUF EXCEPTIONS) EST LA SUIVANTE :
    myGameTxt = {
        scenes : [
            {
                name : string,
                texts : [
                    [string, string, boolean]
                    .
                    .
                    .
                ],
                items : [
                    {
                        name : string,
                        lookOpens : int,
                        useOpens : int,
                        hitOpens : int,
                        inspectOpens : int,
                        waitOpens : int,
                        acceptOpens : int,
                        isOpened: boolean,
                        lookTxt : string,
                        lookTxtOpen : string,
                        useTxt : string,
                        useTxtOpen : string,
                        goTxt : string,
                        goTxtOpen : string,
                        hitTxt : string,
                        inspectTxt : string,
                        waitTxt : string,
                        acceptTxt : string,
                    }
                    .
                    .
                    .
                    {
                        name : string,
                        leftTrue: string,
                    }
                ]
            }
            .
            .
            .
        ]
    }
    
    LES EXCEPTIONS SONT DES CONDITIONS SPÉCIFIQUES À LA PROGRESSION
*/
var myGameTxt = {
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
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "The road was short. It was mainly made of dirt. It had not been maintained in a while.",
                    useWin: true,
                    useTxtOpen: "I might as well.",
                    goWin: true,
                    goTxtOpen: "I might as well.",
                    hitTxt: "Why would I hit dirt?",
                    inspectTxt: "It was dirt, what do you want me to say?",
                    waitTxt: "I waited for a bit. A bird flew by. Time to move",
                    acceptWin: true,
                    acceptTxt: "This was the last time I had to go in that house. I could feel it."
                },
                {
                    name: "door",
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "The door looked closed from up here. I could try to open it. Needed to go to it though.",
                    useTxtOpen: "I needed to get closer to it.",
                    goWin: true,
                    goTxtOpen: "I might as well.",
                    hitTxt: "I mean, I could. Needed to get closer though.",
                    inspectTxt: "I was too far away to see anything.",
                    waitTxt: "I waited for a bit. The door kept shut. Time to move.",
                    acceptTxt: "What do you mean?"
                },
                {
                    name: "leave",
                    canLeave: false,
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
                ["door", "regular", true],
                [" was right there. ", "regular", false],
                ["The air outside was cold and wet. I'd rather go inside again... ", "sad", false],
                ["There also was a ", "regular", false],
                ["window", "regular", true],
                [", next to it, on the left. Everything looked frozen in time. I didn’t know what to think about it. There was a ", "regular", false],
                ["doorbell.", "regular", true],
                [" I could just... ring it. ", "regular", false],
            ],
            items: [
                {
                    name: "window",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: 0,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "The curtains were drawn. Hard to say if anyone was here.",
                    lookTxtOpen: "The window was now broken. Wouldn't try and touch it.",
                    useTxt: "It was closed shut. Couldn't open it from this side.",
                    useTxtOpen: "I cut my finger on the glass. Stung a bit.",
                    goTxt: "Yeaaah. No. It was closed, and I could not see the other side.",
                    goTxtOpen: "Sure, it was open... and broken glass. No way I was going through there.",
                    hitTxt: "The glash shattered. It was sharp. I wouldn't want to go in from here.",
                    inspectTxt: "The curtains reminded me of my parents'. Weird.",
                    waitTxt: "I stood in the reflection. Pale as a ghost. I looked tired.",
                    acceptWin: true,
                    acceptTxt: "I pushed the window, and it opened? Might as well go through it."
                },
                {
                    name: "door",
                    lookOpens: -1,
                    useOpens: 1,
                    hitOpens: 1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "A bit too frail if you ask me. I didn't know if it was unlocked or not.",
                    lookTxtOpen: "It was unlocked after all.",
                    useTxt: "Huh. It was unlocked. Who the Hell would leave it like that?",
                    useTxtOpen: "It was open now. What was there left to do?",
                    goWin: true,
                    goTxt: "I didn't even know if it was opened.",
                    goTxtOpen: "Here went nothing.",
                    hitWin: true,
                    hitTxt: "I smashed the door. Fuck that door. I was glad it broke.",
                    inspectTxt: "The handle was heavy, probably lead. The door must've been decades old.",
                    waitTxt: "As if the door would magically disappear. Time to move.",
                    acceptWin: true,
                    acceptTxt: "I had to accept going into that house again. One last time."
                },
                {
                    name: "doorbell",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: false,
                    canBeOpened: false,
                    lookTxt: "It looked broken. I’d been surprised if it rang.",
                    useTxt: "Not a sound. Didn’t know what I was expecting.",
                    goTxt: "The doorbell is right there.",
                    hitTxt: "The bell rang after being hit. Not a sound came from inside.",
                    inspectTxt: "The name on it was scratched off. The first letter was the same as mine.",
                    waitTxt: "Didn't konw what I was waiting for. It was broken.",
                    acceptTxt: "The name, though scratched, was my father's. He was gone, wasn't he?"
                },
                {
                    name: "leave",
                    leftTrue: "I backed off. The air around me was cold.",
                }
            ],
        },
        {
            name: "Scene3",
            sceneNumber: 3,
            texts: [
                ["Here I was inside the house.", "regular", false],
                [".. ", "regular", false],
                ["Again. ", "angry", false],
                ["It was dark, and clearly abandonned. ", "regular", false],
                ["I felt alone. ", "sad", false],
                ["The house was just one room with a ", "regular", false],
                ["staircase", "regular", true],
                [" on my right. In the middle of the room, a ", "regular", false],
                ["desk.", "regular", true],
                [" On it, there was a ", "bargain", false],
                ["postcard.", "bargain", true],
                [" There was an old ", "regular", false],
                ["bookshelf", "regular", true],
                [" at the back. Nothing else stood out in this room.", "regular", false],
            ],
            items: [
                {
                    name: "staircase",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: 0,
                    acceptOpens: 0,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "It lead somewhere upstairs. There was a door at the top.",
                    lookTxtOpen: "It was open now. Might as well go through.",
                    useTxt: "The door upstairs was locked. Not my lucky day.",
                    useTxtOpen: "The door was opened now. I could just go.",
                    goWin: true,
                    goTxt: "I had to get it open. Otherwise I was stuck down here.",
                    goTxtOpen: "The door was now open! The door creaked when it opened. I entered the next floor.",
                    hitTxt: "My hand hurt after hitting the door upstairs. It didn't even budge.",
                    inspectTxt: "The keyhole to the door upstairs was ancient, and rusty.",
                    waitTxt: "After a while, suddenly, a clic. And the door creaked open.",
                    acceptTxt: "This door was the one to my childhood's bedroom. Suddenly the door came open."
                },
                {
                    name: "desk",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: 1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: 1,
                    btnOpens: 3,
                    gotKey: false,
                    canPressBtn: false,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "It was a big oak desk. Dusty though. Looked sturdy enough.",
                    lookTxtOpen: "It was a big oak desk. Dusty though. Looked sturdy enough.",
                    useTxt: "There was a drawer, that was closed shut.",
                    useTxtOpen: "The drawer could now open. Inside, there was a key. I took it.",
                    useTxtBtn: "I entered the code 120896. I heard a click by the bookshelf.",
                    goTxt: "I'm at the desk, though nothing is of note.",
                    goTxtOpen: "I'm at the desk, though nothing is of note.",
                    hitTxt: "I banged the drawer. With a sharp sound, it actually opened.",
                    inspectTxt: "Under the desk was hidden a pad with numbers. What was the combination?",
                    waitTxt: "Nothing happened. Why am I wasting my time?",
                    acceptTxt: "This desk was mine. I had it at my parent's house. The drawer just needed to be hit."
                },
                {
                    name: "postcard",
                    lookOpens: -1,
                    useOpens: 2,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    useCanPressBtn: 1,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: `It was a postcard from some touristic island. Said "A piece of Paradise" on the front.`,
                    lookTxtOpen: `It read: "August 12, 1996". The day of my birth.`,
                    useTxt: "I flipped the card to see what was on the back.",
                    useTxtOpen: "What could I do more than flip it?",
                    goTxt: "I wish I could go to wherever the postcard depicts.",
                    goTxtOpen: "I wish I could go to wherever the postcard depicts.",
                    hitTxt: "I crumbled the postcard. Not sure why...",
                    inspectTxt: "There was a signature on the front. I couldn't remember whose it was.",
                    waitTxt: "Nothing happened.",
                    acceptTxt: "It was my dad's. The signature. Why was it his?"
                },
                {
                    name: "bookshelf",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: false,
                    isDoorOpen: false,
                    canBeOpened: true,
                    lookTxt: "The bookshelf was mostly old and dusty. The books did not look interesting.",
                    lookTxtOpen: "The shelf had moved to its left. Now there was a door behind.",
                    useTxt: "I opened a book at random. It was some encyclopedia. Nothing of notice.",
                    useTxtOpen: "Of course the door was locked. There was a ticking sound, though.",
                    goTxt: "Go where? The bookshelf wouldn't just run away.",
                    goTxtOpen: "Wow. It actually moved. I was impressed.",
                    goTxtDoorOpen: "I went through the door.",
                    hitTxt: "With a swift hit, some of the books fell.",
                    inspectTxt: `A book caught my eyes. "The Haze". It felt familiar, but I couldn't tell why.`,
                    waitTxt: "The ticking sounds faded, then a loud crack. Sounded like the door behind opened.",
                    acceptTxt: "This bookshelf belonged to my parents. Long ago. The shelf sled and the door behind was open."
                },
                {
                    name: "leave",
                    leftTrue: "I left the house. The air outside bit me with cold.",
                }
            ],
        },
        {
            name: "Scene4",
            sceneNumber: 4,
            texts: [
                ["The room was largely empty, except for a ", "regular", false],
                ["bed.", "regular", true],
                [" Beside it, a ", "regular", false],
                ["bedlamp", "regular", true],
                [" which was lit", "regular", false],
                [", plunging the room in a gloomy atmosphere", "sad", false],
                [". ", "regular", false],
                [" Under the bed was a ", "bargain", false],
                ["teddybear.", "bargain", true],
                [" There was a window, which was broken. ", "regular", false],
                ["On the ground laid some broken ", "angry", false],
                ["glass.", "angry", true],
                [" The moon shone through a hole in the roof.", "accept", false],
                [" There were papers on the ", "regular", false],
                ["wall", "regular", true],
                [" behind me.", "regular", false],
            ],
            items: [
                {
                    name: "bed",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: 2,
                    waitOpens: -1,
                    acceptOpens: 2,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "It was... moldy. Must've been here for ages. Pretty gross.",
                    useTxtOpen: "I wouldn't dare touch that. It smelled.",
                    goTxtOpen: "I was at the bed already, not like there was much to see.",
                    hitTxt: "Kicking the bed proved useless. Some insects crawled from under. I got goosebumps.",
                    inspectTxt: "Carved in the bed's framed laid a small copper key. I took it, just in case.",
                    waitTxt: "The stench made me feel sick. And somewhat nostalgic.",
                    acceptTxt: "It was my bed as a child. I knew I hid a key in it. It opened a compartment in the teddybear."
                },
                {
                    name: "bedlamp",
                    lookOpens: -1,
                    useOpens: 1,
                    hitOpens: 1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "The lamp casted a dim yellow-ish light on the bed.",
                    lookTxtOpen: "Now it was turned off, and the room went dark. The wall, though, was now glowing.",
                    useTxt: "I pulled on the little chain dangling from the lamp. Now it was off.",
                    useTxtOpen: "I already turned it off. I could still see my way out of here.",
                    goTxt: "The lamp was right there.",
                    goTxtOpen: "The lamp was right there.",
                    hitTxt: "I smashed the lightbulb. The lamp couldn't shine anymore.",
                    inspectTxt: "The end of the chain had a little engraving, with my name on it.",
                    waitTxt: "Nothing happened.",
                    acceptTxt: "I remembered this lamp. It stood in my parent's room when I was little."
                },
                {
                    name: "teddybear",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: `The bear was damp, which made it look gross and malformed.`,
                    lookTxtOpen: `There was a compartment at the back of its head.`,
                    useTxt: "It was heavier than expected. Not sure of its use, though.",
                    useTxtOpen: `Inside there was a note. It said: "Here's to you. Find the final letter".`,
                    goTxt: "The bear's right there.",
                    goTxtOpen: "The bear's right there.",
                    hitTxt: "I kicked the bear. It made squishy sound.",
                    inspectTxt: "The bear had a tag. On it were my initials.",
                    waitTxt: "I looked like it would crumble right in front of my eyes, but it didn't.",
                    acceptTxt: "It was given by my father long ago. Must've been 2 or 3. Loved that bear"
                },
                {
                    name: "glass",
                    useGlassOpens: [4, 1],
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "The glass was a bit foggy.",
                    useTxtOpen: "I took a piece of glass and kept it in my coat.",
                    goTxtOpen: "The glass laid at my feet. How many years had this house been in such a state?",
                    hitTxt: "Stomping on the shards, I created smaller shards.",
                    inspectTxt: `Nothing of notice here.`,
                    waitTxt: "Was the glass supposed to magically fix itself? Surprise, it didn't.",
                    acceptTxt: "What was the meaning? That everything would be destroyed in time?"
                },
                {
                    name: "wall",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "The walls is littered with newspaper clips from the 1990s.",
                    lookTxtOpen: `Some words were underlined with glowing ink. "We always loved you".`,
                    useTxt: "I tore a newspaper clip, to find the exact same one underneath.",
                    useTxtOpen: "The ink was somehow fresh. Touching it smeared it further.",
                    goTxt: "I was in front of the wall now.",
                    goTxtOpen: "I was in front of the wall now.",
                    hitTxt: "The wall was study. Wouldn't want to break a bone hitting that...",
                    inspectTxt: `One article stood out. It was from this year, about a car accident.`,
                    waitTxt: "I read the papers in silence. It was pretty ominous.",
                    acceptTxt: "The articles were from the time I was born, and grew up. And something about a fatal car accident..."
                },
                {
                    name: "leave",
                    leftTrue: "I came down to the room. I still had chills from before.",
                }
            ],
        },
        {
            name: "Scene5",
            sceneNumber: 5,
            texts: [
                ["Behind the bookshelf was a staircase which lead to a tiny square room lit only by a series of five ", "regular", false],
                ["candles.", "regular", true],
                [" In the middle stood an ", "regular", false],
                ["altar", "regular", true],
                [" with a tiny car ", "regular", false],
                ["figurine.", "regular", true],
                [" It was very ominous. ", "sad", false],
                ["Scary, even. It made my blood crawl. ", "anger", false],
                ["That car was a replica of mine. ", "accept", false],
                ["There was a ", "sad", false],
                ["book", "sad", true],
                [" next to the figurine.", "sad", false],
            ],
            items: [
                {
                    name: "candles",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "The candles were already burning. How is this possible?",
                    useTxtOpen: "I wouldn't dare touch that. I didn't to burn myself.",
                    goTxtOpen: "I was already neat the candles. The room was small enough.",
                    hitTxt: "One of the candles fell after I kicked the stand. Pretty sure it didn't help.",
                    inspectTxt: "The candles' wax was dripping and forming cascading shapes towards the ground.",
                    waitTxt: "I waited for about an hour. The candles didn't diminish in size. That was... weird.",
                    acceptTxt: "These candles were otherworldly. That was the only sound explaination."
                },
                {
                    name: "altar",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    bledOut: false,
                    isOpened: false,
                    canBeOpened: true,
                    lookTxt: "The altar stood proudly in the middle of this tiny chamber. Looked like marble.",
                    lookTxtOpen: "The altar looked scary in the middle of this tiny chamber.",
                    useTxt: "There was a receptacle, probably for some fluid. I shivered.",
                    useTxtOpen: "I wondered... I took the glass shard and made my hand bleed, let it drip on the altar.",
                    goTxt: "The room was too small for me to move anywhere.",
                    goTxtOpen: "The room was too small for me to move anywhere.",
                    hitTxt: "Why would I do that?",
                    inspectTxt: "It was marble indeed. A black-ish stone with white-grey irregular stripes.",
                    waitTxt: "Nothing to wait for.",
                    waitTxtBledOut: "I waited for it to have a result. Suddenly, a light, and I was transported elsewhere.",
                    acceptTxt: "Where was I? Why were all these items and texts about me? I was again transported elsewhere."
                },
                {
                    name: "figurine",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: `This was a family car, similar to the one I bought years ago, when I got my first job.`,
                    useTxtOpen: `I took it in my hands, trembling. Why was I trembling? I put it back.`,
                    goTxtOpen: "The altar was right there. And the car is on it.",
                    hitTxt: "I threw the car to the ground. Picked it up and placed it back after.",
                    inspectTxt: "The car looked hand-painted. There were a few imperfections here and there.",
                    waitTxt: "I waited, but it didn't do much.",
                    acceptTxt: "I bought that exact same car years ago. Last I knew I was driving it. Why am I here then?"
                },
                {
                    name: "book",
                    lookOpens: -1,
                    useOpens: -1,
                    hitOpens: -1,
                    inspectOpens: -1,
                    waitOpens: -1,
                    acceptOpens: -1,
                    tookTheBook: false,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: `It was a copy of "The Haze", a poetry book my mom used to read me when I was little.`,
                    useTxtOpen: "I took the book, maybe to read it later.",
                    goTxtOpen: "I was already at the altar upon which the book sat.",
                    hitTxt: "Why would I do such a thing? This had sentimental value.",
                    inspectTxt: `I read an extract: "Let it flow, like clear water, and be. Be with the ones you love."`,
                    waitTxt: "Waiting didn't do much. At all.",
                    acceptTxt: "It was a book about life after death. Weird to have been read that as a kid."
                },
                {
                    name: "leave",
                    leftTrue: "I rush up the stairs, I did not wait to stay down there for too long.",
                }
            ],
        },
        {
            name: "Final scene",
            sceneNumber: 6,
            texts: [
                ["The light was blinding at first. The warmth was unsettling, considering the coldness of the house. Where was I? ", "regular", false],
                ["Only two things laid before me in the garden. First, there was a ", "accept", false],
                ["letter,", "accept", true],
                [" folded in the grass, and a ", "accept", false],
                ["screen,", "accept", true],
                [" old-fashioned, but it seemed to be working. For the first time I felt... good. At peace.", "accept", false],
            ],
            items: [
                {
                    name: "letter",
                    lookingAtLetter: false,
                    letterRead: false,
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "The letter was folded. It was white, neat. It had a pleasant smell to it.",
                    useTxtOpen: `<div class="textDiv">Dear me,</div><br/><br/><div class="textDiv">I've been meaning to tell you so, so much. About how I love you. And how I have been happy being you all this time. You must have many questions. Let me get to some.</div><br/><br/><div class="textDiv">First and foremost, that house you've been seeing is indeed yours. Ours. The one we grew up in. It's been decayed this way because of we never thought about it in our adult life. We've been living our life, we didn't have the need to remember, we were busy with work, love, friends... It's unfortunate, but that's behind us now.</div><br/><br/><div class="textDiv">Now the important part. Yes. You died. I mean, we died. Together. At the same time. You had a bad car accident. You've been badly injured, and fought for your life, in a coma, for 4 months. You caved in, you had to, but you never stopped fighting.</div><br/><br/><div class="textDiv">But you do not have to worry anymore. The electrons of our body mingle and dance with the electrons of the ground below us and the air. We are no longer breathing. And we have to remember that there is no point where any of that ends and we begin. We now are energy. Not memory. Not self. Our choices, name, personality, all came after us. We were before them, and we will be after.</div><br/><br/><div class="textDiv">There is no time. There is no death. Life is a dream. It's a wish. Made again, and again, and again, and again, and on into eternity. We are all of it. We are everything. We are all. </div><br/><br/><div class="textDiv">So there is nothing to fear. You are loved. We are everywhere. We are dead, yet, in a sense, we are more alive. We joined the stars, and the rest of the universe.</div><br/><br/><div class="textDiv">With you always,</div><br/><div class="textDiv">`,
                    goTxtOpen: "It was at my feet already.",
                    hitTxt: "Was I out of your mind? No way would I've done that!",
                    inspectTxt: "The letter was rather small in my hands. It felt... fragile.",
                    waitTxt: "I took in the moment. I felt so... so peaceful.",
                    acceptTxt: "The letter was signed by myself. It was touching. I felt a tear running down my cheek."
                },
                {
                    name: "screen",
                    isOpened: true,
                    canBeOpened: false,
                    lookTxtOpen: "The screen flashed pictures of places. Seemed familiar, somehow.",
                    useTxtOpen: "There wasn't any buttons to use. It was just a sceen.",
                    goTxtOpen: "The screen was in front of me.",
                    hitTxt: "I wasn't going to.",
                    inspectTxt: "These were scenes from my life. Memories, flashing, incendescent.",
                    waitTxt: "I watched for a few minutes, no picture was the same as the other.",
                    acceptTxt: "I felt like there was something missing. What was that letter saying?",
                    acceptTxtLetterOpen: [
                        [
                            "There I stood, at the end of my journey.",
                            "That house, once alien, now felt familiar.",
                            "I accepted its warm embrace.",
                            "Then, everything went black.",
                            "I was now part of all, whole again.",
                            "I stopped dreaming."
                        ],
                        [
                            "This is my home",
                            "I now feel it",
                            "I am the cosmos",
                            "I am everything",
                            "I am alive",
                            "I plunged into the horizon"
                        ]
                    ]
                },
                {
                    name: "leave",
                    leftTrue: "Why would I leave? I wouldn't even know how to.",
                }
            ],
        },
        {
            name: "Act Title",
            sceneNumber: 7,
            texts: [
                {
                    id: 0,
                    text: [
                        ["Act 1", true],
                        ["The house by the street", false]
                    ]
                },
                {
                    id: 1,
                    text: [
                        ["Act 2", true],
                        ["Up we go", false]
                    ]
                },
                {
                    id: 2,
                    text: [
                        ["Act 3", true],
                        ["More secrets", false]
                    ]
                },
                {
                    id: 3,
                    text: [
                        ["Act 4", true],
                        ["The space beyond", false]
                    ]
                },
                {
                    id: 4,
                    text: [
                        ["Act 5", true],
                        ["Revelations", false]
                    ]
                }
            ],
        },
        {
            name: "Enter your name",
            sceneNumber: 8,
            title: "What's your name?",
            text1: "Please enter your username.",
            text2: "It works best with your actual first name."
        },
    ],
    currentScene: 6,
    currentAct: 0,
    username: "",
    isFinished: false,
    isMenu: false,
    previousInput: [],
    mesInputs: [],
    nbrInputs: 0
};

let baseGameTxt = JSON.parse(JSON.stringify(myGameTxt));
myGameTxt.mesInputs = countOutcomes();
myGameTxt.nbrInputs = myGameTxt.mesInputs.length;

function countOutcomes() {
    let mesCommandes = [];
    let totalCommandsForThisAct = 0;
    let i = 0;
    let monAct = myGameTxt.currentAct;
    if (monAct == 0) i = 2;
    else if (monAct == 1 || monAct == 2) i = 3;
    else if (monAct == 3) i = 4;
    else if (monAct == 4) i = 5;
    for (let k = i; k >= 0; k--) {
        let mesItems = myGameTxt.scenes[k].items;
        let monActe = parseInt(monAct);
        let nbrCommands = 3 + monActe;
        if (mesItems) {
            let lengthItem = parseInt(mesItems.length);
            let actualItemLength = lengthItem - 1;
            if (monAct < 2 && k == 2) {
                actualItemLength--;
            }
            if (monAct == 2 && k == 3) {
                actualItemLength--;
            }
            mesItems.forEach((e) => {
                let canBeAdded = false;
                let canBeAdded2 = false;
                if (e.name != "leave") {
                    if (e.canBeOpened && e.isOpened == false) {
                        if (monAct == 0) {
                            if (e.name == "door") {
                                actualItemLength++;
                                canBeAdded = true;
                            }
                        }
                        else if (monAct == 1) {
                            if (e.name == "door" || e.name == "desk" || e.name == "window" || e.name == "bedlamp" || e.name == "staircase") {
                                actualItemLength++;
                                canBeAdded = true;
                            }
                        }
                        else if (monAct == 2) {
                            if (e.name == "door" || e.name == "desk" || e.name == "window" || e.name == "bedlamp" || e.name == "staircase" || e.name == "bed" || e.name == "postcard" || e.name == "bookshelf") {
                                actualItemLength++;
                                canBeAdded = true;
                            }
                        }
                        else if (monAct == 3) {
                            if (e.name == "door" || e.name == "desk" || e.name == "window" || e.name == "bedlamp" || e.name == "staircase" || e.name == "bed" || e.name == "postcard" || e.name == "bookshelf" || e.name == "altar") {
                                actualItemLength++;
                                canBeAdded = true;
                            }
                        }
                        else {
                            actualItemLength++;
                            canBeAdded = true;
                        }
                        if (canBeAdded) {
                            mesCommandes.push(`look ${e.name} ${k} opened`);
                            mesCommandes.push(`use ${e.name} ${k} opened`);
                            mesCommandes.push(`go ${e.name} ${k} opened`);
                            if (monAct >= 1) mesCommandes.push(`hit ${e.name} ${k} opened`);
                            if (monAct >= 2) mesCommandes.push(`inspect ${e.name} ${k} opened`);
                            if (monAct >= 3) mesCommandes.push(`wait ${e.name} ${k} opened`);
                            if (monAct >= 4) mesCommandes.push(`accept ${e.name} ${k} opened`);
                        }
                    }
                    if (monAct == 0 && e.name != "postcard") canBeAdded2 = true;
                    if (monAct == 1 && e.name != "postcard" && e.name != "teddybear") canBeAdded2 = true;
                    if (monAct > 1) canBeAdded2 = true;

                    if (canBeAdded2) {
                        mesCommandes.push(`look ${e.name} ${k}`);
                        mesCommandes.push(`use ${e.name} ${k}`);
                        mesCommandes.push(`go ${e.name} ${k}`);
                        if (monAct >= 1) mesCommandes.push(`hit ${e.name} ${k}`);
                        if (monAct >= 2) mesCommandes.push(`inspect ${e.name} ${k}`);
                        if (monAct >= 3) mesCommandes.push(`wait ${e.name} ${k}`);
                        if (monAct >= 4) mesCommandes.push(`accept ${e.name} ${k}`);
                    }
                }
            });
            totalCommandsForThisAct += (actualItemLength * nbrCommands) + 1;
        }
    }
    return mesCommandes;
}
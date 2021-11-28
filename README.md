# That House
## What's _That House_?
_That House_ is a text-based adventure game I programmed in the context of the course "Digital Publications", given by Isaac Pante at the University of Lausanne. It has for subject death and its acceptance. You play as a person who recently died in a car accident, who (re)visits a place once familiar, and learn to accept their own death. The story is recursive: you will play through the same selection of scenes multiple times, each time bringing something new, either in unlockable content, or backstory. The game features:
* A story-rich scenario with liberty of exploration
* A recursive story, where each iteration bring something new
* A personal take on death and how one can deal with its inevitability
* Text animations to help visualize what can and cannot be interacted with
* Full liberty of control: write commands from the input, the DOM, or clic interactive texts
* References to works such as _Midnight Mass_ and Thornhill's _The Dark Pool_
## How do I play _That House_?
### BEWARE, SPOILERS AHEAD
The game can be downloaded from this Repository. Once you've got it on your computer, simply open the `jeu.html` file in your preferred browser and you're good to go. Now, here are a few useful things to know about _That House_:
1. The game is recursive, and thus will repeat in a series of acts.
2. The element you can interact with are highlighted with an animation.
3. You can either enter command directly by writing them, from the input or the DOM.
4. You can also clic on a command at the bottom of the screen and then at an object in the text to create a working command.
5. Only the words highlighted can be interacted with.
6. Sometimes, the solution is to leave.
7. Pick-ups unlock further content automatically. No need to enter them in your commands.
8. A command is either _"leave"_, or a composition of 2 words, like _"look book"_. Adding more words won't help.

The game has a series of command, which are described as follows:
1. **LOOK** allows you to, well, look at items and objects
2. **USE** is the generic interaction with an object. Use it to turn an interruptor on, or to pick up an item.
3. **GO** is the command to move from a scene to another. To go through a door, enter _"go door"_.
4. **LEAVE** is the only command used as its own. Use this to go back to the previous scenes.
5. **HIT** is the first unlockable command, obtained in act 2. Hit things, break them. See what suprises they contain.
6. **INSPECT** is a more thorough look at an element. It is used to get more details out of the decor, and sometimes find secrets...
7. **WAIT** makes you wait in front of an object for some times. Patience is a virtue!
8. **ACCEPT** either makes you realize the state you are in, or unlocks puzzle solutions. It is also the final command you'll need to enter to complete the game.
## Logbook
### Lundi 15.11 - 4h (Word)
1. Mise en place du concept
2. Écriture sommaire de l'histoire
3. Conceptualisation des mécaniques :
   - Histoire récursive en 5 actes, qui suit les étapes du deuil
   - Chaque nouvelle itération apporte des nouveautés, dont 1 possibilité d'interaction
   - Certains puzzles sont bloqués tant qu'on est pas au bon stade
### Mardi 16.11 - 6h
1. Création de la structure HTML du jeu
2. Mise en page de l'interface en CSS
### Mercredi 17.11 - 6h
1. Établissement d'une fonction pour afficher le texte caractère par caractère
2. Précisions ajoutées dans cette fonction pour le texte interactif
3. Mise en place des animations selon l'itération dans l'histoire (`keyframes CSS`)
4. Mise en place d'un `observer` qui fait attention aux changements d'innerHTML dans la zone de jeu
5. Mise en ligne sur GitHub
### Jeudi 18.11 - 2h
1. Commentaire du `readme.md`
2. Reprise du système de fichiers
### Vendredi 19.11 - 8h
1. Système d'alert customisées
2. Création d'un objet JSON pour stocker les infos de chaque acte
3. Interraction clavier avec l'input, que ce soit en focus ou en tapant sur son clavier dans le DOM
4. On peut désormais cliquer sur les mots (commandes ET mots dans le texte) pour remplir l'input
5. Ajout d'une page de menu et une page d'info
### Samedi 20.11 - 4h
1. Système d'alert au point avec les textes dans l'objet JSON
### Dimanche 21.11 - 4h
1. Conditions basiques de progression
### Lundi 22.11 - 4h
1. Conditions plus complexes scènes 1/2/3
2. Progressé dans l'écriture scènes 1/2/3
### Mardi 23.11 - 8h
1. Conditions plus complexes scènes 4/5
2. Progressé dans l'écriture scènes 4/5
### Mercredi 24.11 - 6h
1. Conditions plus complexes scènes 6
2. Progresser dans l'écriture scènes 6
3. Fait un générique de fin
### Jeudi 25.11 - 8h
1. Gérer les sauvegardes savec le `localStorage`
2. Améliorer les transitions
3. Commenter le texte
### Vendredi 26.11 - 2h
1. Peaufinage et correction de bug du `localStorage`
2. Sound design primaire (bruit de clavier)
### Samedi 27.11 - 4h
1. Composition de musiques sur `BeepBox` - reste à les intégrer
2. On doit maintenant entrer un nom (utile pour la scène finale)
### Dimanche 28.11 - 4h
1. Correctif de bugs dans l'input
2. Léger allègement de la charge d'affichage
3. Le jeu alerte maintenant si une sauvegarde existe déjà quand on clique sur "nouvelle partie"
2. TODO : Muuuuuuuuusique à mettre ! (et BETTER sound design)
3. TODO : Playtest & bug fix
4. TODO : Alléger le code là où c'est possible (BIS)

class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Your name");
        this.button = createButton("Play");
        this.reset = createButton("Reset");
        this.greetings = createElement('h2');
    }
    display(){
        this.title.html("Multiplayer car racing game");
        this.title.position(displayWidth * 4/10,displayHeight * 1/10);
        this.input.position(displayWidth * 4.5/10,displayHeight * 3/10);
        this.button.position(displayWidth * 4.9/10,displayHeight * 4.5/10);
        this.reset.position(windowWidth * 8/10, windowHeight * 1/10);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            this.greetings.html("Hi " + name + ", Please wait for other players");
            this.greetings.position(displayWidth * 3.5/10,displayHeight * 3/10);

            playerCount = playerCount + 1;
            console.log(playerCount);
            player.index = playerCount;
            player.name = name;
            player.distance = 0;
            player.updateCount(player.index);
            player.update();
        });

        this.reset.mousePressed(() => {
            game.update(0);
            player.updateCount(0);
            player.updateCarsAtEnd(0);
        });

    }
    hideAll (){
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }
}
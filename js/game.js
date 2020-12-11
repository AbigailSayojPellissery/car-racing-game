class Game{
    constructor(){

    }
    getState(){
        var gameRef = database.ref('gameState');
        gameRef.on("value", function (data){
            if(data.val() === 0 && data.val() < gameState){
                window.location.reload();
            }
            gameState = data.val();
        })
    }
    update(state){
        var gameRef = database.ref('/');
        gameRef.update({
            'gameState': state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            console.log(playerCount);
            form = new Form();
            form.display();
        }
        car1 = createSprite(0,0);
        car2 = createSprite(0,0);
        car3 = createSprite(0,0);
        car4 = createSprite(0,0);

        car1.addImage("car1", car1Img);
        car2.addImage("car2", car2Img);
        car3.addImage("car3", car3Img);
        car4.addImage("car4", car4Img);

        cars = [car1, car2, car3, car4];
    }

    play(){
        form.hideAll();
        Player.getPlayerInfo();
        Player.getCarsAtEnd();
        if (allPlayers !== undefined){
            var index1 = 0;
            var x1, y1;
            x1 = 100;

            for (var plr in allPlayers){
                index1 = index1 + 1;
                x1 = x1 + 200;
                y1 = displayHeight * 7/10 - allPlayers[plr].distance;
                cars[index1 - 1].x = x1;
                cars[index1 - 1].y = y1;

                if(plr === "player" + player.index){
                    console.log(plr);
                    camera.position.y = y1;
                    stroke("darkcyan");
                    fill("darkcyan");
                    ellipseMode(CENTER);
                    ellipse(x1, y1, 70, 70);
                }
            }

            if(keyIsDown(UP_ARROW) && player.index !== undefined){
                player.distance = player.distance + 20;
                player.update();
            }
            if(player.distance > 2540){
                gameState = 2;
                carsAtEnd = carsAtEnd + 1;
                player.rank = carsAtEnd;
                player.updateCarsAtEnd(carsAtEnd);
            }
        }
    }
    end(){
        console.log("END")
    }
}
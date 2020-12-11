class Player{
    construtor(){
        this.name = null;
        this.distance = null;
        this.index = null;
        this.rank = null;
    }
    getCount(){
        var gameRef = database.ref('playerCount2');
        gameRef.on("value", function (data){
            playerCount = data.val();
            console.log(playerCount2);
        })
    }
    updateCount(newCount){
        var gameRef = database.ref('/');
        gameRef.update({
            'playerCount': newCount
        })
    }
    update(){
        var playerIndex = "players/player" + this.index;
        console.log (this.index);
        database.ref(playerIndex).update({
            'name': this.name,
            'distance': this.distance,
            'rank' : this.rank
        })
    }
    static getPlayerInfo(){
        var infoRef = database.ref('players');
        infoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
    static getCarsAtEnd(){
        var gameRef = database.ref('carsAtEnd');
        gameRef.on("value", function(data){
            carsAtEnd = data.val();
        })
    }
    updateCarsAtEnd(newCount){
        var gameRef = database.ref('/');
        gameRef.update({
            'carsAtEnd' : newCount
        })
    }
}